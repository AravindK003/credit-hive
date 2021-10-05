import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ScoreOutlinedIcon from '@mui/icons-material/ScoreOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import VolumeDownOutlinedIcon from '@mui/icons-material/VolumeDownOutlined';
import widget from 'assets/img/widget-img.png';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { Button, CardContent, Link, Typography } from "@material-ui/core";
import CircleIcon from '@mui/icons-material/Circle';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';

const useStyles = makeStyles(styles);
 
export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={7} md={7}>
            <Card>
               <CardHeader>
                 <GridContainer>
                   <GridItem xs={12} sm={6} md={7}>
                   <Typography variant="h5" >Welcome to Credit Hive</Typography><br />
                   <CircleIcon style={{fontSize:'12px'}}/>&nbsp;<Typography variant="subtitles1">Avail Your Education Loans without the hassles of Bank paperwork!</Typography><br />
                   <CircleIcon style={{fontSize:'12px'}}/>&nbsp;<Typography variant="subtitles1">Fill out the  <span style={{backgroundColor:'green',borderRadius:'1px'}}>
                                                                                                    <a style={{color:'white'}}
                                                                                                href="/admin/cos-form"
                                                                                              >Customer Onboarding Form</a></span> Now!</Typography>
                   </GridItem>
                   <GridItem xs={12} sm={6} md={5}>
                       <img  src={widget} style={{marginLeft:'10px',width:'200px',height:'150px'}}/>
                  </GridItem>
                 </GridContainer>
              </CardHeader>
            </Card>
        </GridItem>
        <GridItem xs={12} sm={5} md={5}>
          <Card>
          <CardHeader stats icon>
                 <VolumeDownOutlinedIcon  style={{float:'left',fontSize:'40px'}} color="primary"/>
                 </CardHeader>
              <CardContent>
                <Typography variant="subtitle1">New Here ? Need Help ?</Typography>
                <Button variant="contained" color="primary">Visit Help <ArrowRightAltIcon /></Button><br />
                   <p className={classes.cardCategory}>or Contact  <Link href="https://codiis.com">Codiis</Link>
                   </p> 
              </CardContent>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <p className={classes.cardCategory}>ORGANISATION NAME</p>
            </CardHeader>
            <CardContent>
                 <MapsHomeWorkOutlinedIcon  style={{float:'right',fontSize:'50px'}} color="success"/>
            </CardContent>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
        <Card>
            <CardHeader color="warning" stats icon>
              <p className={classes.cardCategory}>ACTIVE SCHEME</p>
            </CardHeader>
            <CardContent>
                {/* <Avatar style={{float:'right',width:'60px',height:'60px'}}> */}
                 <AssignmentOutlinedIcon  style={{float:'right',fontSize:'50px'}} color="primary"/>
                 {/* </Avatar> */}
            </CardContent>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <p className={classes.cardCategory}>KYC STATUS</p>
            </CardHeader>
            <CardContent>
              {/* <Avatar style={{float:'right',width:'60px',height:'60px'}}> */}
                 <HelpOutlineOutlinedIcon  style={{float:'right',fontSize:'50px'}} color="success"/>
               {/* </Avatar> */}
            </CardContent>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <p className={classes.cardCategory}>CREDIT SCORE</p>
            </CardHeader>
            <CardContent>
               {/* <Avatar style={{float:'right',width:'60px',height:'60px'}}> */}
                 <ScoreOutlinedIcon  style={{float:'right',fontSize:'50px'}} color="primary"/>
                 {/* </Avatar> */}
            </CardContent>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <p className={classes.cardCategory}>CREDIT HIVE USERS</p>
            </CardHeader>
            <CardContent>
              <GridContainer>
                <GridItem xs={6}>
                   <Typography variant="h5">371</Typography>
                </GridItem>
                <GridItem xs={6}>
                  {/* <Avatar style={{float:'right',width:'60px',height:'60px'}}> */}
                     <PeopleOutlineOutlinedIcon style={{float:'right',fontSize:'40px'}} color="primary" />
                  {/* </Avatar> */}
                </GridItem>
              </GridContainer>
            </CardContent>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <p className={classes.cardCategory}>CREDIT HIVE CUSTOMERS</p>
            </CardHeader>
            <CardContent>
              <GridContainer>
                <GridItem xs={6}>
                   <Typography variant="h5">258</Typography>
                </GridItem>
                <GridItem xs={6}>
                  {/* <Avatar style={{float:'right',width:'60px',height:'60px'}}> */}
                     <PeopleOutlineOutlinedIcon style={{float:'right',fontSize:'40px'}} color="success" />
                  {/* </Avatar> */}
                </GridItem>
              </GridContainer>
            </CardContent>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <p className={classes.cardCategory}>CREDIT HIVE EDUCATION PARTNERS</p>
            </CardHeader>
            <CardContent>
              <GridContainer>
                <GridItem xs={6}>
                   <Typography variant="h5">87</Typography>
                </GridItem>
                <GridItem xs={6}>
                  {/* <Avatar style={{float:'right',width:'60px',height:'60px'}}> */}
                     <MapsHomeWorkOutlinedIcon style={{float:'right',fontSize:'40px'}} color="primary" />
                  {/* </Avatar> */}
                </GridItem>
              </GridContainer>
            </CardContent>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <p className={classes.cardCategory}>CREDIT HIVE FINANCIAL PARTNERS</p>
            </CardHeader>
            <CardContent>
              <GridContainer>
                <GridItem xs={6}>
                   <Typography variant="h5">26</Typography>
                </GridItem>
                <GridItem xs={6}>
                  {/* <Avatar style={{float:'right',width:'60px',height:'60px'}}> */}
                     <MapsHomeWorkOutlinedIcon style={{float:'right',fontSize:'40px'}} color="success" />
                  {/* </Avatar> */}
                </GridItem>
              </GridContainer>
            </CardContent>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
