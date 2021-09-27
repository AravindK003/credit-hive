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

export default function FinPartnerEdit(props){
    // let KycStatus = [
    //     { name: "Approved", value: "approved" },
    //     { name: "Pending", value: "pending" },
    //     { name: "Rejected", value: "rejected" },
    //   ];
    //   let FormStatus = [
    //     { name: "Finished and Submitted", value: "finished_and_submitted" },
    //     { name: "Partially Filled", value: "partially_filled" },
    //   ];
    //   let group_institute = [
    //     { name: "Yes", value: "yes" },
    //     { name: "No", value: "no" },
    //   ]
    const onSubmit=(e)=>{
      console.log(e);
    }
    let initialValues = {
      name: props.id,
    };
    return(
        <div>
           <Box p={0} style={{justifyContent:'flex-end',textAlign:'right'}}>
            <Button variant="outlined" color="primary" onClick={()=>{props.handleEdit()}}>Add FinPartner</Button></Box>
        <Formik
        enableReinitialize
        initialValues={initialValues} 
        onSubmit={(e)=>onSubmit(e)}
        >
            <Form>
                        <React.Fragment>
                          <GridContainer> 
                              <GridItem xs={12} sm={12} md={12}>
                                <Typography variant="subtitle1">{props.id ? `Edit FinPartner`:`Add FinPartner`}</Typography>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <SelectInput name="partner" label="Partner" 
                                             optionText="name"
                                             optionValue="value"
                                            options={[]}/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="organization_name" label="Organisation Name"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TimePickerInput name="year_of_incorporation" label="Year of Incorporation" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="organization_type" label="Organization Type"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="organization_website" label="Organization Website"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="office_landline_number1" label="Office Landline Number1"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="office_landline_number2" label="Office Landline Number2"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="organization_website" label="Organization Website"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={12}>
                                <TextAreaInput name="registered_office_address" label="Registered Office Address"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="no_of_branches" label="No of Branches" type="number" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="branch_name" label="Branch Name"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="employee_strength" label="Employee Strength" type="number"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="branch_email" label="Branch Email"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={12}>
                                <TextAreaInput name="branch_address" label="Branch Address" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="branch_office_landline1" label="Branch Office Landline1" type="number"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="branch_office_landline2" label="Branch Office Landline2" type="number"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="branch_website" label="Branch Website" type="number"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="founder_or_chairman" label="Founder or Chairman Name" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="contact_number" label="Contact Number" type="number"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="email_id" label="Email Id" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={12}>
                                <TextAreaInput name="home_address" label="Home Address" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="home_contact_number1" label="Home Contact Number1" type="number"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="home_contact_number2" label="Home Contact Number2" type="number"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="aadhar_number" label="Aadhar Number" type="number"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="pan_number" label="PAN Number" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="main_occupation_of_chairman" label="Main Occupation of Chairman" />
                              </GridItem>

                           
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="hr_spoc_name1" label="HR SPOC Name1" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="hr_spoc_landline1" label="HR SPOC Landline1" type="number"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="hr_spoc_mobile_number1" label="HR SPOC Mobile Number1" type="number"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="hr_spoc_email 1" label="HR SPOC Email 1" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="hr_spoc_name2" label="HR SPOC Name2" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="hr_spoc_landline2" label="HR SPOC Landline2" type="number"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="hr_spoc_mobile_number2" label="HR SPOC Mobile Number2" type="number"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="hr_spoc_email 2" label="HR SPOC Email 2" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="company_pan_number" label="Company PAN number" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="company_gst_number" label="Company GST number" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                               <Box p={2}>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={6}>
                                    &nbsp;  &nbsp;  AOA : 
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                    <input type="file" onClick={(e)=>console.log(e)}/>
                                    </GridItem>
                                </GridContainer></Box>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                              <Box p={2}>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={6}>
                                    &nbsp;  &nbsp;  MOA : 
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                    <input type="file" onClick={(e)=>console.log(e)}/>
                                    </GridItem>
                                </GridContainer></Box>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                              <Box p={2}>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={6}>
                                    &nbsp;  &nbsp;  COI : 
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                    <input type="file" onClick={(e)=>console.log(e)}/>
                                    </GridItem>
                                </GridContainer></Box>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                              <Box p={2}>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={6}>
                                    &nbsp;  &nbsp;  GST Certificate: 
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                    <input type="file" onClick={(e)=>console.log(e)}/>
                                    </GridItem>
                                </GridContainer></Box>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                              <Box p={2}>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={6}>
                                    &nbsp;  &nbsp;  Company PAN Card: 
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <input type="file" onClick={(e)=>console.log(e)}/>
                                    </GridItem>
                                </GridContainer></Box>
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

  FinPartnerEdit.propTypes = {
    id: PropTypes.string,
    handleEdit: PropTypes.function
  };

