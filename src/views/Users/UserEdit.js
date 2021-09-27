import React from "react";
import {Formik,Form} from 'formik';
import { Button, Paper, Typography,Box } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import TextInput from "components/CustomInput/TextInput";
import PropTypes from "prop-types";
import CheckboxInput from "components/CustomInput/CheckboxInput";
import TransferList from "components/CustomInput/TransferList";
import TimePickerInput from "components/CustomInput/TimePicker";

export default function UserEdit(props){
    let id= props.id;
    const onSubmit=(e)=>{
      console.log(e);
    }
    let initialValues = {
      name: props.id,
    };
    return(
        <div>
        {id ?
         <Formik
         enableReinitialize
         initialValues={initialValues} 
         onSubmit={(e)=>onSubmit(e)}
         >
             <Form>
             <GridContainer> 
                     <GridItem xs={12} sm={12} md={12}>
                       <Typography variant="caption">Change User</Typography>
                     </GridItem>
                     <GridItem xs={12} sm={12} md={12}>
                     <Typography variant="subtitle1">Aravind</Typography>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}><br />
                         <Typography variant="body1">Name </Typography>
                     </GridItem>
                     <GridItem xs={12} sm={12} md={8}>
                       <TextInput name="name" />
                     </GridItem>

                     <GridItem xs={12} sm={12} md={4}><br />
                     <Typography variant="body1">Password </Typography>
                     </GridItem>
                     <GridItem xs={12} sm={12} md={8}>
                         <TextInput name="password" />
                     </GridItem>
                     <GridItem xs={12} sm={12} md={12}>
                         <Paper style={{backgroundColor:'skyblue'}}> 
                            <Box p={1}>
                            <Typography variant="subtitle1">Personal Info</Typography>
                            </Box>
                         </Paper>
                     </GridItem>
                     <GridItem xs={12} sm={12} md={4}><br />
                     <Typography variant="body1">First Name </Typography>
                     </GridItem>
                     <GridItem xs={12} sm={12} md={8}>
                         <TextInput name="firstname" />
                     </GridItem>

                     <GridItem xs={12} sm={12} md={4}><br />
                     <Typography variant="body1">Last Name </Typography>
                     </GridItem>
                     <GridItem xs={12} sm={12} md={8}>
                         <TextInput name="lastname" />
                     </GridItem>

                     <GridItem xs={12} sm={12} md={4}><br />
                     <Typography variant="body1">Email Address </Typography>
                     </GridItem>
                     <GridItem xs={12} sm={12} md={8}>
                         <TextInput name="email" />
                     </GridItem>
                     <GridItem xs={12} sm={12} md={12}>
                         <Paper style={{backgroundColor:'skyblue'}}> 
                            <Box p={1}>
                            <Typography variant="subtitle1">Permissions</Typography>
                            </Box>
                         </Paper>
                     </GridItem>
                    
                     <GridItem xs={12} sm={12} md={12}>
                         <CheckboxInput name="is_active" label="Active" />
                         <Typography variant="caption" style={{marginLeft:'25px',marginTop:'0px'}}>Designates whether this user should be treated as active. Unselect this instead of deleting accounts.</Typography>
                     </GridItem>
                     <GridItem xs={12} sm={12} md={12}>
                     <CheckboxInput name="staff_active" label="Staff Status" />
                         <Typography variant="caption" style={{marginLeft:'25px',marginTop:'0px'}}>Designates whether the user can login into this admin site.</Typography>
                     </GridItem>
                     <GridItem xs={12} sm={12} md={12}>
                     <CheckboxInput name="super_user_status" label="Super User Status" />
                         <Typography variant="caption" style={{marginLeft:'25px',marginTop:'0px'}}>Designates that this user has all permissions without explicitly assigning them .</Typography>
                     </GridItem>

                     <GridItem xs={12} sm={12} md={3}><br />
                     <Typography variant="caption">Groups:  </Typography>
                     </GridItem>

                     <GridItem xs={12} sm={12} md={9}><br />
                     <TransferList />
                     </GridItem>

                     <GridItem xs={12} sm={12} md={3}><br />
                     <Typography variant="caption">User Permissions:  </Typography>
                     </GridItem>
                     <GridItem xs={12} sm={12} md={9}><br />
                     <TransferList />
                     </GridItem>

                     <GridItem xs={12} sm={12} md={12}>
                         <Paper style={{backgroundColor:'skyblue'}}> 
                            <Box p={1}>
                            <Typography variant="subtitle1">Important Dates</Typography>
                            </Box>
                         </Paper>
                     </GridItem>

                     <GridItem xs={12} sm={12} md={3}><br />
                     <Typography variant="caption">Last Login: </Typography>
                     </GridItem>
                     <GridItem xs={12} sm={12} md={9}>
                     <TimePickerInput name="last_login" label="Last Login Time" />
                     </GridItem>

                     <GridItem xs={12} sm={12} md={3}><br />
                     <Typography variant="caption">Date Joined: </Typography>
                     </GridItem>
                     <GridItem xs={12} sm={12} md={9}>
                     <TimePickerInput name="join_date" label="Join Date" />
                     </GridItem>

                     <GridItem xs={12} sm={12} md={12}>
                     &nbsp; <Button variant="contained" color="primary" type="submit">Save</Button>
                     </GridItem>
                 </GridContainer>
           </Form>
           </Formik>:
        <Formik
        enableReinitialize
        initialValues={initialValues} 
        onSubmit={(e)=>onSubmit(e)}
        >
            <Form>
                        <React.Fragment>
                          <GridContainer> 
                              <GridItem xs={12} sm={12} md={12}>
                                <Typography variant="subtitle1">Add User</Typography>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={12}>
                                <TextInput name="name" label="Name" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={12}>
                                  <TextInput name="password" label="Password" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={12}>
                                <TextInput name="confirm_password" label="Password Confirmation" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={12}>
                              &nbsp; <Button variant="contained" color="primary" type="submit">Save</Button>
                              </GridItem>
                          </GridContainer>
                        </React.Fragment>
            </Form>
        </Formik>             
             }
        </div>
    )
  }

  UserEdit.propTypes = {
    id: PropTypes.string,
  };

