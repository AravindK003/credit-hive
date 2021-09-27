import React, { useState } from "react";
import { Button, Divider, Typography } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import Card from "components/Card/Card";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import PropTypes from "prop-types";

export default function BasicDetails(props){
    const [edit] = useState(false);
    const editMethod =() =>{
        if(edit === false){
            props.handleEdit(edit);
        }
    }
    // const onSubmit=(e)=>{
    //   console.log(e);
    // }
    // let initialValues = {
    //   phone: '',
    // };
    return(
        <React.Fragment>
            <Card>
                <CardContent>
                    <GridContainer>
                     <GridItem xs={12} sm={12} md={9}>
                     <Typography variant="h4">Basic Details</Typography><br />
                     </GridItem>
                     <GridItem xs={12} sm={12} md={3}>
                         <Button variant="contained" color="primary" onClick={()=>editMethod()}>Edit</Button> 
                     </GridItem>
                     </GridContainer>
                    <Divider /><br />
                    <GridContainer>
                     <GridItem xs={12} sm={12} md={5}>
                     <Typography variant="subtitles1">First Name </Typography>
                     </GridItem>
                     <GridItem xs={12} sm={12} md={2}>
                     <Typography variant="subtitles1">-</Typography>
                     </GridItem>
                     <GridItem xs={12} sm={12} md={5}>
                     <Typography variant="subtitles1">Aravind</Typography>
                     </GridItem>
                     </GridContainer><br />
                    <Divider /><br />
                    <GridContainer>
                     <GridItem xs={12} sm={12} md={5}>
                     <Typography variant="subtitles1">Middle Name </Typography>
                     </GridItem>
                     <GridItem xs={12} sm={12} md={2}>
                     <Typography variant="subtitles1">-</Typography>
                     </GridItem>
                     <GridItem xs={12} sm={12} md={5}>
                     <Typography variant="subtitles1">Aravind</Typography>
                     </GridItem>
                     </GridContainer><br />
                    <Divider /><br />

                    <GridContainer>
                     <GridItem xs={12} sm={12} md={5}>
                     <Typography variant="subtitles1">Last Name </Typography>
                     </GridItem>
                     <GridItem xs={12} sm={12} md={2}>
                     <Typography variant="subtitles1">-</Typography>
                     </GridItem>
                     <GridItem xs={12} sm={12} md={5}>
                     <Typography variant="subtitles1">Aravind</Typography>
                     </GridItem>
                     </GridContainer><br />
                    <Divider /><br />

                    <GridContainer>
                     <GridItem xs={12} sm={12} md={5}>
                     <Typography variant="subtitles1"> Email</Typography>
                     </GridItem>
                     <GridItem xs={12} sm={12} md={2}>
                     <Typography variant="subtitles1">-</Typography>
                     </GridItem>
                     <GridItem xs={12} sm={12} md={5}>
                     <Typography variant="subtitles1">aravind.k@codiis.com</Typography>
                     </GridItem>
                     </GridContainer><br />
                    <Divider /><br />

                    <GridContainer>
                     <GridItem xs={12} sm={12} md={5}>
                     <Typography variant="subtitles1">Phone </Typography>
                     </GridItem>
                     <GridItem xs={12} sm={12} md={2}>
                     <Typography variant="subtitles1">-</Typography>
                     </GridItem>
                     <GridItem xs={12} sm={12} md={5}>
                     <Typography variant="subtitles1">9159362177</Typography>
                     </GridItem>
                     </GridContainer><br />
                    <Divider /><br />

                    <GridContainer>
                     <GridItem xs={12} sm={12} md={5}>
                     <Typography variant="subtitles1">Credit Score </Typography>
                     </GridItem>
                     <GridItem xs={12} sm={12} md={2}>
                     <Typography variant="subtitles1">-</Typography>
                     </GridItem>
                     <GridItem xs={12} sm={12} md={5}>
                     <Typography variant="subtitles1">400</Typography>
                     </GridItem>
                     </GridContainer>
                </CardContent>
            </Card>
        </React.Fragment>
    )
  }

BasicDetails.propTypes = {
    handleEdit : PropTypes.object
}