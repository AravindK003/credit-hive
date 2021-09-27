import React from "react";
import {Formik,Form} from 'formik';
import { Button, Typography } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import TextInput from "components/CustomInput/TextInput";
import CheckboxInput from "components/CustomInput/CheckboxInput";
import TextAreaInput from "components/CustomInput/TextAreaInput";
import PropTypes from "prop-types";

export default function SchemaEdit(props){
    let id= props.id;
    const onSubmit=(e)=>{
      console.log(e);
    }
    let initialValues = {
      name: props.id,
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
                                <Typography variant="subtitle1">{id ? `Edit Schema`:`Add Schema`}</Typography>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="name" label="Name" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                  <CheckboxInput name="is_active" label="IsActive" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="suggested_by" label="SuggestedBy" />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="financial_insti_share" label="Financial Insti Share" type="number"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="chtl_share" label="CHTL Share" type="number"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="rate_of_interest" label="Rate of Interest" type="number"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <TextInput name="payment_duration" label="Duration of Payment" type="number"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                              <TextInput name="min_score" label="Min Score" type="number"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                              <TextInput name="max_score" label="Max Score" type="number"/>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                              <TextAreaInput name="description" label="Description" />
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

  SchemaEdit.propTypes = {
    id: PropTypes.string,
  };

