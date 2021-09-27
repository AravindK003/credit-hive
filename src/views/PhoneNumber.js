import React from "react";
import { CardActions } from "@material-ui/core";
import {Formik,Form} from 'formik';
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import Card from "components/Card/Card";
import TextInput from "components/CustomInput/TextInput";

export default function PhoneChange(){
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
                           <Card>
                            <CardContent>
                            <Typography variant="h4">Change Phone</Typography><br />
                           <TextInput name="phone" label="Phone" type="number" />
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