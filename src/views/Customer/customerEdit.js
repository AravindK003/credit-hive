import React from "react";
import {Formik,Form} from 'formik';
import { Button, Typography,Box } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import TextInput from "components/CustomInput/TextInput";
import PropTypes from "prop-types";
import SelectInput from "components/CustomInput/SelectInput";
import TextAreaInput from "components/CustomInput/TextAreaInput";
import TimePickerInput from "components/CustomInput/TimePicker";
import CheckboxInput from "components/CustomInput/CheckboxInput";

export default function CustomerEdit(props){
    let KycStatus = [
        { name: "Approved", value: "approved" },
        { name: "Pending", value: "pending" },
        { name: "Rejected", value: "rejected" },
      ];
      let FormStatus = [
        { name: "Finished and Submitted", value: "finished_and_submitted" },
        { name: "Partially Filled", value: "partially_filled" },
      ];
      let edAccount = [
        { name: "Current", value: "current" },
        { name: "Savings", value: "savings" },
      ]
    const onSubmit=(e)=>{
      console.log(e);
    }
    let initialValues = {
      name: props.id,
    };
    return(
        <div>
           <Box p={0} style={{justifyContent:'flex-end',textAlign:'right'}}>
      <Button variant="outlined" color="primary" onClick={()=>{props.handleEdit()}}>Add Customer</Button></Box>
        <Formik
        enableReinitialize
        initialValues={initialValues} 
        onSubmit={(e)=>onSubmit(e)}
        >
            <Form>
                        <React.Fragment>
                          <GridContainer> 
                              <GridItem xs={12} sm={12} md={12}>
                                <Typography variant="subtitle1">{props.id ? `Edit Customer`:`Add Customer`}</Typography>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <SelectInput name="user" label="User" options={[]}/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <SelectInput name="scheme" label="Scheme" options={[]}/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <SelectInput name="kyc_status" 
                                            label="KYC Status" 
                                            optionText="name"
                                            optionValue="value"
                                            options={KycStatus}/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <SelectInput name="form_status" 
                                            label="Form Status" 
                                            optionText="name"
                                            optionValue="value"
                                            options={FormStatus}/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={4}>
                                <TextInput name="first_name" label="First Name" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={4}>
                                <TextInput name="middle_name" label="Middle Name" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={4}>
                                <TextInput name="last_name" label="Last Name" />
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
                                <TextInput name="organisation_site" label="Organisation Site" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={12}>
                                <TextAreaInput name="organisation_address" label="Organisation Address" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TimePickerInput name="join_date" label="Join Date" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="department_name" label="Department Name" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="office_number" label="Office Number" type="number"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="extension" label="Extension" type="number"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="aadhar_number" label="Aadhar Number" type="number"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="pan_number" label="Pan Number" type="number"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="credit_score" label="Credit Score" type="number"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <CheckboxInput name="credit_eligible" label="Credit Eligible" type="number"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="student_or_employee" label="Student or Employee Name" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="education_institution_name" label="Education Institution Name" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="usid" label="USID" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="standard_or_course" label="Standard or Course" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="education_institution_account_no" label="Education Institution Account Number" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <SelectInput name="education_institution_account_type" 
                                            label="Education Institution Account Type"
                                            optionText="name"
                                            optionValue="value"
                                            options={edAccount} />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="education_institution_ifsc" label="Education Institution IFSC" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="amount" label="Amount" type="number" />
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

  CustomerEdit.propTypes = {
    id: PropTypes.string,
    handleEdit: PropTypes.function
  };

