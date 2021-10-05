import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik, Form, FormikProvider } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Card } from '@material-ui/core';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="primary" href="https://codiis.com/">
        Connected Digital Systems Pvt Ltd
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function PasswordReset() {

    const [showPassword, setShowPassword] = useState(false);
    const [fail, setFail] = useState();
    
      const LoginSchema = Yup.object().shape({
        newPassword: Yup.string().required('New Password is required'),
        confirmPassword : Yup.string().required('Confirm Password is required').oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
    });
    
      const formik = useFormik({
        initialValues: {
            confirmPassword: '',
            newPassword: '',
        },
        validationSchema: LoginSchema,
        onSubmit: () => {
           postData();
        }
      });
    
      const postData =async()=>{
        console.log(formik.values)
        let data;
        await axios.post(`${process.env.REACT_APP_API_END_POINT}/dicom/login`,formik.values)
            .then((res)=>data=res.data);
        console.log(data);
        if(data.response){
        window.localStorage.setItem("token",data.response.jwtToken);
        window.localStorage.setItem("fname",data.response.fName)
        window.localStorage.setItem("lname",data.response.lName)
        window.localStorage.setItem("emailId",data.response.emailId)
        }
        if(data.status === 200 ){
          navigate('/dashboard1', { replace: true });
        }else{
          setFail(data.err_msg);
        }
      }
    
      const { errors, touched, values, isSubmitting,handleSubmit, getFieldProps } = formik;
      const handleShowPassword = () => {
        setShowPassword((show) => !show);
      };


  return (
    <div style={{backgroundColor:'#a9c2db',width: '100%', height:'100vh'}}>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Card
             style={{
                marginTop: '150px',
                borderRadius:'15px',
                position:'absolute',
                flexDirection: 'column',
                width:'400px'
              }}
            >
        <Box
          p ={1}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" variant="h5">
            Change Password
          </Typography>
          <br />
          <Box sx={{ mt: 1 }}>
          <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
              <br />
            <TextField
              required
              fullWidth
              name="newPassword"
              label="New Password"
              type="password"
              autoComplete="current-password"
              {...getFieldProps('newPassword')}
                error={Boolean(touched.newPassword && errors.newPassword)}
                helperText={touched.newPassword && errors.newPassword}
            />
          &nbsp;
          &nbsp;
            <TextField
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              autoComplete="new-password"
              {...getFieldProps('confirmPassword')}
                error={Boolean(touched.confirmPassword && errors.confirmPassword)}
                helperText={touched.confirmPassword && errors.confirmPassword}
            />
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Reset
            </Button>
            </Form>
            </FormikProvider>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
        </Card>
      </Container>
    </ThemeProvider>
    </div>
  );
}