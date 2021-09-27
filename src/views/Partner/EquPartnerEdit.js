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

export default function EquPartnerEdit(props){
    // let KycStatus = [
    //     { name: "Approved", value: "approved" },
    //     { name: "Pending", value: "pending" },
    //     { name: "Rejected", value: "rejected" },
    //   ];
    //   let FormStatus = [
    //     { name: "Finished and Submitted", value: "finished_and_submitted" },
    //     { name: "Partially Filled", value: "partially_filled" },
    //   ];
      let group_institute = [
        { name: "Yes", value: "yes" },
        { name: "No", value: "no" },
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
            <Button variant="outlined" color="primary" onClick={()=>{props.handleEdit()}}>Add EquPartner</Button></Box>
        <Formik
        enableReinitialize
        initialValues={initialValues} 
        onSubmit={(e)=>onSubmit(e)}
        >
            <Form>
                        <React.Fragment>
                          <GridContainer> 
                              <GridItem xs={12} sm={12} md={12}>
                                <Typography variant="subtitle1">{props.id ? `Edit EquPartner`:`Add EquPartner`}</Typography>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <SelectInput name="partner" label="Partner" 
                                             optionText="name"
                                             optionValue="value"
                                            options={[]}/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="institution_name" label="Institution Name"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="landline_number_1" label="LandLine Number 1" type="number"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="landline_number_2" label="LandLine Number 2" type="number"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TimePickerInput name="data_of_establishment" label="Data of Establishment" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="parent_institution_name" label="Parent Institution Name"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="parent_institution_website" label="Parent Institution Website"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="student_strength_parent_institution" label="Student Strength of Parent Institution"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={12}>
                                <TextAreaInput name="address" label="Address" />
                              </GridItem>

                              <GridItem xs={12} sm={12} md={6}>
                                <SelectInput name="any_group_institute" label="Any Group Institute"
                                             optionText="name"
                                             optionValue="value"
                                             options={group_institute}/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="no_of_group_institution_connected_parent_institute" label="No of Group Institution connected to Parent Institute" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="group_institution_name" label="Group Institution Name" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TimePickerInput name="group_institution_year_of_establishment" label="Group Institution Year of Establishment" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                  <TextInput name="group_institution_website" label="Group Institution Website" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="group_institution_office_landline1" label="Group Institution Office Landline1" type="number"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="group_institution_office_landline2" label="Group Institution Office Landline2" type="number" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="student_strength_of_group_institution" label="Student Strength of Institution Group" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={12}>
                                <TextAreaInput name="group_institution_address" label="Group Institution Address" />
                              </GridItem>
                             
                              
                              <GridItem xs={12} sm={12} md={6}>
                                <SelectInput name="is_the_institute_autonomus" label="Is the Institute Autonomus" 
                                                                                      optionText="name"
                                                                                      optionValue="value"
                                                                                      options={group_institute}/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TimePickerInput name="year_of_receiving_autonomus_status" label="Year of Receiving Autonomus Status" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="affiliated_university" label="Affiliated University" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TimePickerInput name="year_of_receiving_recognization" label="Year of Receiving Recognization" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="institution_mail" label="Institution Mail Address" />
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
                                <TextInput name="administration_spoc_name" label="Administration SPOC Name" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="administration_spoc_landline" label="Administration SPOC Landline" type="number"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="administration_spoc_contact_number" label="Administration SPOC Contact Number" type="number"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="administration_spoc_email" label="Administration SPOC Email" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="no_of_courses_offered_parent_institute" label="No of Courses Offered By Parent Institute" type="number"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="no_of_courses_offered_group_institute" label="No of Courses Offered By Group Institute" type="number"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="fees_by_course_by_semester_offered_by_parent" label="Fees by Course by Semester Offer by Parent Institution" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="fees_by_course_by_semester_offered_by_group" label="Fees by Course by Semester Offer by Group Institution" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="board_affiliated" label="Board Affiliated" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="fees_per_semester_or_year" label="Fees per semester or year" />
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

  EquPartnerEdit.propTypes = {
    id: PropTypes.string,
    handleEdit: PropTypes.function
  };

