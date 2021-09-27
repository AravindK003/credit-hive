import React from "react";
import {Formik,Form} from 'formik';
import { Button, Typography } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import TextInput from "components/CustomInput/TextInput";
import TextAreaInput from "components/CustomInput/TextAreaInput";
import CheckboxInput from "components/CustomInput/CheckboxInput";
import TimePickerInput from "components/CustomInput/TimePicker";

export default function CosForm1(){
    const onSubmit=(e)=>{
      console.log(e);
    }
    let initialValues = {
      phone: '',
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
                          <GridContainer> 
                              <GridItem xs={12} sm={12} md={12}>
                                <Typography variant="subtitle1">User Details</Typography>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={4}>
                                <TextInput name="firstname" label="First Name" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={4}>
                              <TextInput name="middlename" label="Middle Name" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={4}>
                              <TextInput name="lastname" label="Last Name" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="phone" label="Mobile Number" type="number" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="email" label="Email Address" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="occupation" label="Occupation" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="organisation_name" label="Organisation Name" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="organisation_type" label="Organisation Type" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="organisation_website" label="Organisation WebSite" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                  <TimePickerInput name="date_of_joining" label="Date Of Joining" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="department_name" label="Department Name" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="office_landline_number" label="Office Landline Number" type="number"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="extension" label="Extension" type="number"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={12}>
                                <TextAreaInput name="organisation_address" placeHolder="Organisation Address" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="aadhar_number" label="Aadhar Number" type="number"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="pan_number" label="Pan Number" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="credit_score" label="Credit Score" type="number"/>
                              </GridItem> 
                              <GridItem xs={12} sm={12} md={6}>
                                <CheckboxInput name="credit_eligible" label="Credit Eligible" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                              &nbsp;&nbsp;  <Button variant="contained" color="primary">Reset</Button>
                              &nbsp; <Button variant="contained" color="primary" type="submit">Save as Draft</Button>
                              </GridItem>
                          </GridContainer>
                           
                        </React.Fragment>
            </Form>
        </Formik>
        </div>
    )
  }