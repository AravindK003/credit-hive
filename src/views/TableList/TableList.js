import React from "react";
// @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
// import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
// import CardHeader from "components/Card/CardHeader";
import { Divider } from "@material-ui/core";
import { Typography,Box } from "@material-ui/core";

// const styles = {
//   cardCategoryWhite: {
//     "&,& a,& a:hover,& a:focus": {
//       color: "rgba(255,255,255,.62)",
//       margin: "0",
//       fontSize: "14px",
//       marginTop: "0",
//       marginBottom: "0",
//     },
//     "& a,& a:hover,& a:focus": {
//       color: "#FFFFFF",
//     },
//   },
//   cardTitleWhite: {
//     color: "#FFFFFF",
//     marginTop: "0px",
//     minHeight: "auto",
//     fontWeight: "300",
//     fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
//     marginBottom: "3px",
//     textDecoration: "none",
//     "& small": {
//       color: "#777",
//       fontSize: "65%",
//       fontWeight: "400",
//       lineHeight: "1",
//     },
//   },
// };

// const useStyles = makeStyles(styles);

export default function TableList() {
  // const classes = useStyles();
  return (
    <React.Fragment>
          <Card>
            <Box p={2}>
            <Typography variant="h5">Details of Your Credit Hive Scheme</Typography></Box>
            <CardBody>
             <GridContainer>
                     <GridItem xs={12} sm={12} md={5}>
                     <Typography variant="subtitles1">Active Scheme </Typography>
                     </GridItem>
                     <GridItem xs={12} sm={12} md={2}>
                     <Typography variant="subtitles1">-</Typography>
                     </GridItem>
                     <GridItem xs={12} sm={12} md={5}>
                     <Typography variant="subtitles1">Cde Scheme</Typography>
                     </GridItem>
                     </GridContainer><br />
                    <Divider /><br />
                    <GridContainer>
                     <GridItem xs={12} sm={12} md={5}>
                     <Typography variant="subtitles1">Offered By </Typography>
                     </GridItem>
                     <GridItem xs={12} sm={12} md={2}>
                     <Typography variant="subtitles1">-</Typography>
                     </GridItem>
                     <GridItem xs={12} sm={12} md={5}>
                     <Typography variant="subtitles1">IIT Madras</Typography>
                     </GridItem>
                     </GridContainer><br />
                    <Divider /><br />
                    <GridContainer>
                     <GridItem xs={12} sm={12} md={5}>
                     <Typography variant="subtitles1">Duration</Typography>
                     </GridItem>
                     <GridItem xs={12} sm={12} md={2}>
                     <Typography variant="subtitles1">-</Typography>
                     </GridItem>
                     <GridItem xs={12} sm={12} md={5}>
                     <Typography variant="subtitles1">10 Months</Typography>
                     </GridItem>
                     </GridContainer><br />
                    <Divider /><br />
                    <GridContainer>
                     <GridItem xs={12} sm={12} md={5}>
                     <Typography variant="subtitles1">Rate Of Interests </Typography>
                     </GridItem>
                     <GridItem xs={12} sm={12} md={2}>
                     <Typography variant="subtitles1">-</Typography>
                     </GridItem>
                     <GridItem xs={12} sm={12} md={5}>
                     <Typography variant="subtitles1">10%</Typography>
                     </GridItem>
                     </GridContainer><br />
                    <Divider /><br />
                    <GridContainer>
                     <GridItem xs={12} sm={12} md={5}>
                     <Typography variant="subtitles1">Scheme Details</Typography>
                     </GridItem>
                     <GridItem xs={12} sm={12} md={2}>
                     <Typography variant="subtitles1">-</Typography>
                     </GridItem>
                     <GridItem xs={12} sm={12} md={5}>
                     <Typography variant="subtitles1">Description for the Scheme Cde</Typography>
                     </GridItem>
                     </GridContainer><br />
                </CardBody>
            </Card>
    </React.Fragment>
    
  );
}
