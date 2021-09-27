import React,{useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
// import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
// import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
// import CardFooter from "components/Card/CardFooter.js";
import avatar from "assets/img/faces/marc.jpg";
import { Button, 
  Divider } from "@material-ui/core";
import PhoneChange from "views/PhoneNumber";
import EmailChange from "views/EmailChange";
import PasswordChange from "views/PasswordChange";
import BasicDetails from "views/BasicDetails";
import ProfileEdit from "views/ProfileEdit";


const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);


export default function UserProfile() {
  const classes = useStyles();
  const [email, setEmail] =useState(false);
  const [phone , setPhone ] = useState(false);
  const [password , setPassword] =useState(false);
  const [detail, setDetail] = useState(true);
  const [edit, setEdit] = useState(false);

  const handlePhone=()=>{
    if(phone === false){
      setEmail(false);
      setPassword(false);
      setDetail(false);
      setEdit(false);
      setPhone(true);
    }
  }
  const handleDetails=()=>{
    if(detail === false){
      setPhone(false);
      setPassword(false);
      setEdit(false);
      setEmail(false);
      setDetail(true);
    }
  }
  const handleEmail=()=>{
    if(email === false){
      setPhone(false);
      setPassword(false);
      setDetail(false);
      setEdit(false);
      setEmail(true);
    }
  }
  const handlePassword=()=>{
    if(password === false){
      setDetail(false);
      setPhone(false);
      setEmail(false);
      setEdit(false);
      setPassword(true)
    }
  }

  const handleEdit=(value)=>{
    console.log('edit',value);
    if(value === false){
      setDetail(false);
      setPhone(false);
      setEmail(false);
      setPassword(false);
      setEdit(true);
    }
  }

  return (
    <div>
      <GridContainer>
      <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h3 className={classes.cardTitle}>Aravind</h3>
              <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
              <Divider />
              <Button color="primary" variant="outlined" fullWidth onClick={()=>handleDetails()}>
                Basic Details
              </Button>
              <Button color="primary" variant="outlined" fullWidth style={{marginTop:'3px'}} onClick={()=>handleEmail()}>
                Change Email
              </Button>
              <Button color="primary" variant="outlined" fullWidth style={{marginTop:'3px'}} onClick={()=>handlePhone()}>
                Change Phone
              </Button>
              <Button color="primary" variant="outlined" fullWidth style={{marginTop:'3px'}} onClick={()=>handlePassword()}>
                Change Password
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
            {phone && <PhoneChange />}
            {email && <EmailChange />}
            {password && <PasswordChange />}
            {detail && <BasicDetails handleEdit={handleEdit}/>}
            {edit && <ProfileEdit />}
        </GridItem>
       
      </GridContainer>
    </div>
  );
}
