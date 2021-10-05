import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useHistory } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Card } from '@material-ui/core';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://codiis.com">
        Connected Digital Systems Pvt Ltd
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
    const history = useHistory();

    const LoginSchema = Yup.object().shape({
        firstName: Yup.string().required('Firstname is required'),
        lastName: Yup.string().required('LastName is required'),
        phone: Yup.string().required('Phone Number is required'),
        email: Yup.string().required('Email or Phone is required'),
        password: Yup.string().required('Password is required')
      });
    
      const formik = useFormik({
        initialValues: {
          firstName:'',
          lastName: '',
          phone:'',
          email: '',
          password: '',
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
          history.push('/login')
        }else{
          setFail(data.err_msg);
        }
      }
    
      const { errors, touched, values, isSubmitting,handleSubmit, getFieldProps } = formik;

  return (
    <div style={{backgroundColor:'#a9c2db',width: '100%', height:'100vh'}}>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Card
             style={{
                marginTop: '50px',
                borderRadius:'15px',
                position:'absolute',
                flexDirection: 'column',
                width: '400px',
              }}
            >
        <Box
          p = {1}
          sx={{
            // marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box sx={{ mt: 3 }}>
          <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  {...getFieldProps('firstName')}
                  error={Boolean(touched.firstName && errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  {...getFieldProps('lastName')}
                  error={Boolean(touched.lastName && errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  {...getFieldProps('email')}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  autoComplete="phone"
                  {...getFieldProps('phone')}
                  error={Boolean(touched.phone && errors.phone)}
                  helperText={touched.phone && errors.phone}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  {...getFieldProps('password')}
                  error={Boolean(touched.password && errors.password)}
                  helperText={touched.password && errors.password}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
            </Form>
            </FormikProvider>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
        </Card>
      </Container>
    </ThemeProvider>
    </div>
  );
}