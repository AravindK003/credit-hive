import React from "react";
import {Formik,Form} from 'formik';
import { Button, Typography,Box } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
// import CardHeader from "components/Card/CardHeader";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

export default function CosForm3(){
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
                                <Typography variant="subtitle1">Select Scheme</Typography>
                                <Typography variant="caption">Please select a scheme from the schemas available for you.</Typography>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <Card style={{backgroundColor:'skyblue'}}>
                                    <Box p={1}>
                                      <Typography variant="subtitle1"><PlayCircleIcon style={{fontSize:'15px'}}/>&nbsp; ABC Scheme</Typography>
                                      </Box>
                                    <CardBody>
                                        <p>OfferedBy : Codiis</p>
                                        <p>Duration : 12 Months</p>
                                        <p>RateofInterest : 12%</p>
                                     <p>Description for ABC scheme.</p>
                                    </CardBody>
                                </Card>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <Card style={{backgroundColor:'skyblue'}}>
                                    <Box p={1}>
                                      <Typography variant="subtitle1"><PlayCircleIcon style={{fontSize:'15px'}}/>&nbsp; Cde Scheme</Typography>
                                      </Box>
                                    <CardBody>
                                        <p>OfferedBy : Codiis</p>
                                        <p>Duration : 12 Months</p>
                                        <p>RateofInterest : 12%</p>
                                     <p>Description for ABC scheme.</p>
                                    </CardBody>
                                </Card>
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