import React from "react";
import { Typography } from "@material-ui/core";
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
export default function CosForm4(){
    // const onSubmit=(e)=>{
    //   console.log(e);
    // }
    // let initialValues = {
    //   phone: '',
    // };
    return(
        <div>
         <div style={{textAlign:'center',justifyContent:'center'}} >
            <CheckCircleOutlineOutlinedIcon style={{color:'green',fontSize:'70px'}}/>
            <br />
            <Typography variant="h5">Confirm Detail</Typography>
            <Typography variant="caption">Check all the details that have been filled. if checked confirm and submit.</Typography>
         </div>
        </div>
    )
  }