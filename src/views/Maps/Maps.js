/*eslint-disable*/
import React, { useState } from "react";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { Typography,Button, Divider,Box } from "@material-ui/core";
import UserEdit from "views/Users/UserEdit";
import UserList from "views/Users/Userlist";
import EducationPartnerList from "views/Education Partner/educationPartnerList";
import FinancialPartnerList from "views/Financial Partner/FinancialPartnerList";
import NoAdminList from "views/No-Admin/noAdminList";
import AdminList from "views/Admin/AdminList";

export default function Icons() {
  const[open, setOpen] =useState(false);
  const[id, setId] = useState();
  const [list, setList] =useState(true);
  const [educationList,setEducationList] = useState(false);
  const [financialList,setFinancialList] = useState(false);
  const [noAdmin, setNoAdmin] = useState(false);
  const [Admin, setAdmin] = useState(false);


  const handleEdit=(value)=>{
      setList(false);
      setOpen(true);
      setEducationList(false);
      setNoAdmin(false);
      setAdmin(false);
      setFinancialList(false);
      setId(value);
  }
  const handleList=()=>{
      setOpen(false);
      setEducationList(false);
      setNoAdmin(false);
      setAdmin(false);
      setFinancialList(false);
      setList(true);
  }

  const handleEducationList=()=>{
    setList(false);
    setOpen(false);
    setNoAdmin(false);
    setAdmin(false);
    setEducationList(true);
    setFinancialList(false);
  }

  const handleFinancialList=()=>{
    setList(false);
    setOpen(false);
    setEducationList(false);
    setNoAdmin(false);
    setAdmin(false);
    setFinancialList(true);
  }

  const handleNoadmin=()=>{
    setList(false);
    setOpen(false);
    setEducationList(false);
    setFinancialList(false);
    setAdmin(false);
    setNoAdmin(true);
  }

  const handleAdmin=()=>{
    setList(false);
    setOpen(false);
    setEducationList(false);
    setFinancialList(false);
    setNoAdmin(false);
    setAdmin(true);
  }

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={3}>
        <Card>
          <CardHeader >
            <Typography variant="h5">Users</Typography>
          </CardHeader>
          <CardBody>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
              <Typography variant="subtitles1" style={{marginLeft:'20px'}}>By UserType</Typography>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}><br />
                 <Button variant="outlined" color="primary" onClick={()=>{handleList()}}>User</Button>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}><br />
              <Button variant="outlined" color="primary" onClick={()=>{handleEducationList()}}>Education Partner</Button>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}><br />
              <Button variant="outlined" color="primary" onClick={()=>{handleFinancialList()}}>Financial Partner</Button>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}><br />
              <Typography variant="subtitles1" style={{marginLeft:'20px'}}>By AdminType</Typography>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}><br />
              <Button variant="outlined" color="primary" onClick={()=>{handleNoadmin()}}>Non Admin</Button>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}><br />
              <Button variant="outlined" color="primary" onClick={()=>{handleAdmin()}}>Admin</Button>
              </GridItem>
            </GridContainer>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={9}>
      <Card>
        <CardHeader>
        <Box p={1} style={{justifyContent:'flex-end',textAlign:'right'}}>
      <Button variant="outlined" color="primary" onClick={()=>{handleEdit()}}>Add User</Button></Box>
      </CardHeader>
          <CardBody>
            {open && <UserEdit id={id}/>}
            {list && <UserList handleEdit={handleEdit}/>}
            {educationList && <EducationPartnerList handleEdit={handleEdit}/>}
            {financialList && <FinancialPartnerList handleEdit={handleEdit}/>}
            {noAdmin && <NoAdminList handleEdit={handleEdit}/>}
            {Admin && <AdminList handleEdit={handleEdit} />}
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
