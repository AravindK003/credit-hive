import React from "react";
import {Field} from 'formik';
import PropTypes from "prop-types";
import { TextField ,Box } from "@material-ui/core";

export default function TextInput(props){
    return(
        <div>
            <Box p={2}>
            <Field name={props.name}>
            {({
                          field,form,meta
                      }) => (
                          <React.Fragment>
                           {props.type ? <TextField  name={props.name} {...field} type={props.type} style={form.dirty && meta.touched?{backgroundColor:'#FDFBC5'}:null}
                            label={props.label} variant="outlined" value={field.value||''} fullWidth={true} size="small" />:
                            <TextField  name={props.name} {...field}
                            label={props.label} variant="outlined" value={field.value||''} style={form.dirty && meta.touched?{backgroundColor:'#FDFBC5'}:null}
                            fullWidth={true} size="small" />}
                        </React.Fragment>
                      )}
            </Field></Box>
        </div>
    )
  }

  TextInput.propTypes = {
    name: PropTypes.string,
    label:PropTypes.string,
    type: PropTypes.string,
  };
  