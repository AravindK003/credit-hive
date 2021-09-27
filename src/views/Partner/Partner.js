/*eslint-disable*/
import React, { useState } from "react";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { Typography,Button } from "@material-ui/core";
import EquPartnerList from "./EqupartnerList";
import EquPartnerEdit from "./EquPartnerEdit";
import FinPartnerEdit from "./FinPartnerEdit";
import FinPartnerList from "./FinPartnerList";

export default function Partner() {
  const[open, setOpen] =useState(false);
  const[id, setId] = useState();
  const [list, setList] =useState(true);
  const [finList,setFinList] = useState(false);
  const [finEdit,setFinEdit] = useState(false);

  const handleEdit=(value)=>{
      setList(false);
      setOpen(true);
      setFinEdit(false);
      setFinList(false);
      setId(value);
  }
  const handleEquList=()=>{
      setOpen(false);
      setFinEdit(false);
      setFinEdit(false);
      setList(true);
  }

  const handleFinancialList=()=>{
    setList(false);
    setOpen(false);
    setFinEdit(false);
    setFinList(true);
  }

  const userFinEdit=(value)=>{
    setList(false);
    setOpen(false);
    setFinList(false);
    setFinEdit(true);
    setId(value);
  }

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={3}>
        <Card>
          <CardHeader >
            <Typography variant="h5">Partner</Typography>
          </CardHeader>
          <CardBody>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}><br />
                 <Button variant="outlined" color="primary" onClick={()=>{handleEquList()}}>Equpartner Data</Button>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}><br />
              <Button variant="outlined" color="primary" onClick={()=>{handleFinancialList()}}>FinPartner</Button>
              </GridItem>
            </GridContainer>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={9}>
      <Card>
        <CardHeader>
      
      </CardHeader>
          <CardBody>
            {list &&<EquPartnerList handleEdit={handleEdit}/> }
            {open && <EquPartnerEdit handleEdit={handleEdit} id={id}/>}
            {finList && <FinPartnerList handleEdit={userFinEdit} />}
            {finEdit && <FinPartnerEdit handleEdit={userFinEdit} id={id} />}
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
