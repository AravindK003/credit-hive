import React from "react";
import { CardActions } from "@material-ui/core";
import {Formik,Form} from 'formik';
import { Typography,Box } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import Card from "components/Card/Card";
import TextInput from "components/CustomInput/TextInput";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";


export default function ProfileEdit(){
    const onSubmit=(e)=>{
      console.log(e);
    }
    let initialValues = {
      firstName: '',
      lastName:'',
      middleName:'',
      creditScore:''
    };
    return(
        <div>
        <Formik
        enableReinitialize
        initialValues={initialValues} 
        onSubmit={(e)=>onSubmit(e)}
        >
            <Form>
                        <React.Fragment>
                           <Card>
                            <CardContent>
                            <Typography variant="h4">Edit Profile</Typography><br />
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={3}>
                                        <Box p={3}>
                                        First Name :
                                        </Box>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={9}>
                                    <TextInput name="firstName" label="First Name"/>
                                     </GridItem>
                                     <GridItem xs={12} sm={12} md={3}>
                                        <Box p={3}>
                                        Middle Name :
                                        </Box>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={9}>
                                    <TextInput name="middleName" label="Middle Name" />
                                     </GridItem>

                                     <GridItem xs={12} sm={12} md={3}>
                                        <Box p={3}>
                                        Last Name :
                                        </Box>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={9}>
                                    <TextInput name="lastName" label="Last Name" />
                                     </GridItem>

                                     <GridItem xs={12} sm={12} md={3}>
                                        <Box p={3}>
                                        Credit Score :
                                        </Box>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={9}>
                                    <TextInput name="creditScore" label="Credit Score" />
                                     </GridItem>
                                </GridContainer>
                            </CardContent>
                            <CardActions>
                            <Button variant="contained" color="primary" type="submit">Update</Button>
                            </CardActions>
                            </Card>
                           
                        </React.Fragment>
            </Form>
        </Formik>
        </div>
    )
  }

