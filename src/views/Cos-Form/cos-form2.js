import React from "react";
import {Formik,Form} from 'formik';
import { Button, Typography } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import TextInput from "components/CustomInput/TextInput";

export default function CosForm2(){
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
                                <Typography variant="subtitle1">Parent / Working Professional Details</Typography>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="name" label="Student/Employee Name" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="education_institution_name" label="Education Institution Name" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="usid" label="USID" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="standard" label="Standard / Course Taken" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="bank_account" label="Education Institution Back Account" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="account_type" label="Account Type" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="ifsc" label="IFSC Number" type="number"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                              <TextInput name="amount" label="Amount(INR)" type="number"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={12}>
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