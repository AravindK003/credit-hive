/*eslint-disable*/
import React, { useState } from "react";
// @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
// import Hidden from "@material-ui/core/Hidden";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { Typography,Button } from "@material-ui/core";
import SchemaEdit from "views/Schemas/schemaEdit";
import SchemaList from "views/Schemas/schemaList";
// import styles from "assets/jss/material-dashboard-react/views/iconsStyle.js";

// const useStyles = makeStyles(styles);

export default function Icons() {
  // const classes = useStyles();
  const[open, setOpen] =useState(false);
  const[id, setId] = useState();
  const [list, setList] =useState(false);
  const handleEdit=(value)=>{
      setList(false);
      setOpen(true);
      setId(value);
  }
  const handleList=()=>{
      setOpen(false);
      setList(true);
  }

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={3}>
        <Card>
          <CardHeader >
            <Typography variant="h5">Schemas</Typography>
          </CardHeader>
          <CardBody>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
              <Button variant="outlined" color="primary" onClick={()=>{handleEdit()}}>Add Schema</Button>
              </GridItem>
              <GridItem xs={12} sm={6} md={6}>
              <Button variant="outlined" color="primary" onClick={()=>{handleList()}}>Edit Schema</Button>
              </GridItem>
            </GridContainer>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={9}>
      <Card>
          <CardBody>
            {open && <SchemaEdit id={id}/>}
            {list &&<SchemaList handleEdit={handleEdit}/>}
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
