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

export default function SignIn() {

    const [showPassword, setShowPassword] = useState(false);
    const [fail, setFail] = useState();
    
      const LoginSchema = Yup.object().shape({
        emailIdOrMobileNo: Yup.string().required('Email or Phone is required'),
        password: Yup.string().required('Password is required')
      });
    
      const formik = useFormik({
        initialValues: {
          emailIdOrMobileNo: '',
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
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Card
             style={{
                marginTop: '100px',
                position:'absolute',
                borderRadius:'15px',
                marginRight:'15px'
              }}
            >
        <Box
          p={1}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
           
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box sx={{ mt: 1 }}>
          <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <TextField
              required
              fullWidth
              label="Email Address"
              name="emailIdOrMobileNo"
              autoComplete="email"
              autoFocus
              {...getFieldProps('emailIdOrMobileNo')}
              error={Boolean(touched.emailIdOrMobileNo && errors.emailIdOrMobileNo)}
              helperText={touched.emailIdOrMobileNo && errors.emailIdOrMobileNo}
            />
            <br />
            <br />
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              {...getFieldProps('password')}
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, borderRadius:'8px' }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/forgot-password" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
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