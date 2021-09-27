import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import CosForm1 from 'views/Cos-Form/cos-form1';
import CardHeader from 'components/Card/CardHeader';
import { Paper } from '@material-ui/core';
import CosForm2 from 'views/Cos-Form/cos-form2';
import CosForm3 from 'views/Cos-Form/cos-form3';
import CosForm4 from 'views/Cos-Form/cos-form4';
const steps = ['User Details', 'Parent/Working Professional', 'Select Scheme','Confirm Details'];


export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? 
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  
  return (
      <React.Fragment>
        <Card>
          <CardHeader>
              <Typography variant="h5" style={{color:'rgb(255, 165, 0)'}}>CREDIT HIVE</Typography>
              <Typography variant="caption">CUSTOMER ONBOARDING FORM</Typography>
            </CardHeader>
       <CardBody>
        <GridContainer>
          <GridItem xs={12} sm={12} md={3}>
            <Paper elevation={0} style={{backgroundColor:'aliceblue'}}>
          <Stepper nonLinear activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <StepButton color="inherit" onClick={handleStep(index)}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
          </Paper>
          </GridItem>
          <GridItem xs={12} sm={12} md={9}>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
               {activeStep === 0 && <CosForm1 />}
               {activeStep === 1 && <CosForm2 />}
               {activeStep === 2 && <CosForm3 />}
               {activeStep === 3 && <CosForm4 />}
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2,justifyContent:'right' }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Button onClick={handleComplete}>
                  {completedSteps() === totalSteps() - 1
                    ? 'Finish'
                    : 'Next'}
                </Button>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Next'}
                  </Button>
                ))} 
            </Box>
          </React.Fragment>
        )}
      </div>
      </GridItem>
      </GridContainer>
      </CardBody>
      </Card>
      </React.Fragment>
  );
}
