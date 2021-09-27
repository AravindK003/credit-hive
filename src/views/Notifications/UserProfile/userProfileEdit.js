import React from "react";
import {Formik,Form} from 'formik';
import { Button, Typography,Box } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import TextInput from "components/CustomInput/TextInput";
import PropTypes from "prop-types";
import SelectInput from "components/CustomInput/SelectInput";
import CheckboxInput from "components/CustomInput/CheckboxInput";

export default function UserProfileEdit(props){
    const onSubmit=(e)=>{
      console.log(e);
    }
    let initialValues = {
      name: props.id,
    };
    return(
        <div>
        <Box p={0} style={{justifyContent:'flex-end',textAlign:'right'}}>
        <Button variant="outlined" color="primary" onClick={()=>{props.handleEdit()}}>Add UserProfile</Button></Box>
        <Formik
        enableReinitialize
        initialValues={initialValues} 
        onSubmit={(e)=>onSubmit(e)}
        >
            <Form>
                        <React.Fragment>
                          <GridContainer> 
                              <GridItem xs={12} sm={12} md={12}>
                                <Typography variant="subtitle1">{props.id ? `Edit UserProfile`:`Add UserProfile`}</Typography>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="mobile" label="mobile" type="number"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <CheckboxInput name="is_mobile_verified" label="isMobileVerified" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="counter" label="Counter" type="number"/>
                              </GridItem> 
                              <GridItem xs={12} sm={12} md={6}>
                                <CheckboxInput name="is_email_verified" label="isEmailVerified" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <SelectInput name="user" label="User" options={[]}/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="email_change_pending" label="Email Change Pending" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={12}>
                              &nbsp; <Button variant="contained" color="primary" type="submit">Save</Button>
                              </GridItem>
                          </GridContainer>
                        </React.Fragment>
            </Form>
        </Formik>             
            
        </div>
    )
  }

  UserProfileEdit.propTypes = {
    id: PropTypes.string,
    handleEdit: PropTypes.function
  };

