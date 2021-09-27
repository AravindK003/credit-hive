/*eslint-disable*/
import React, { useState } from "react";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { Typography,Button,Box } from "@material-ui/core";
import CustomerList from "views/Customer/customerList";
import CustomerEdit from "views/Customer/customerEdit";
import UserProfileEdit from "./UserProfile/userProfileEdit";
import UserProfileList from "./UserProfile/userProfileList";

export default function Customer() {
  const[open, setOpen] =useState(false);
  const[id, setId] = useState();
  const [list, setList] =useState(true);
  const [userList,setUserList] = useState(false);
  const [userEdit,setUserEdit] = useState(false);

  const handleEdit=(value)=>{
      setList(false);
      setOpen(true);
      setUserEdit(false);
      setUserList(false);
      setId(value);
  }
  const handleList=()=>{
      setOpen(false);
      setUserList(false);
      setUserEdit(false);
      setList(true);
  }

  const handleUserList=()=>{
    setList(false);
    setOpen(false);
    setUserEdit(false);
    setUserList(true);
  }

  const userProfileEdit=(value)=>{
    setList(false);
    setOpen(false);
    setUserList(false);
    setUserEdit(true);
    setId(value);
  }

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={3}>
        <Card>
          <CardHeader >
            <Typography variant="h5">Customer</Typography>
          </CardHeader>
          <CardBody>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}><br />
                 <Button variant="outlined" color="primary" onClick={()=>{handleList()}}>Customer Data</Button>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}><br />
              <Button variant="outlined" color="primary" onClick={()=>{handleUserList()}}>UserProfile</Button>
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
            {open && <CustomerEdit handleEdit={handleEdit} id={id}/>}
            {list && <CustomerList handleEdit={handleEdit}/>}
            {userList && <UserProfileList handleEdit={userProfileEdit}/>}
            {userEdit && <UserProfileEdit id={id} handleEdit={userProfileEdit}/>}
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
