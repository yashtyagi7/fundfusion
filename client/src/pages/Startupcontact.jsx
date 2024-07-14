import React, { useState } from "react";
import { InputAdornment, IconButton } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import ReCAPTCHA from "react-google-recaptcha";
import { Radio, RadioGroup, FormControlLabel } from "@material-ui/core";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  Grid,
  Paper,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";

const ColorStepConnector = withStyles((theme) => ({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 20px)",
    right: "calc(50% + 20px)",
  },
  active: {
    "& $line": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  completed: {
    "& $line": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
}))(StepConnector);

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  button: {
    marginRight: theme.spacing(1),
    color: "#FFF",
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  backButton: {
    marginRight: theme.spacing(1),
    color: "#000",
    backgroundColor: "#FFF",
    "&:hover": {
      backgroundColor: "#EEE",
    },
  },
  paper: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return [
    "Basic information",
    "Contact Information",
    "Startup Details",
    "Additional Information",
  ];
}

const BasicForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <Typography variant="h7" gutterBottom>
          <b>Your First Name</b>
        </Typography>
        <Controller
          control={control}
          name="firstName"
          render={({ field }) => (
            <TextField
              id="first-name"
              variant="outlined"
              placeholder="Enter Your First Name"
              fullWidth
              margin="normal"
              required
              {...field}
            />
          )}
          rules={{ required: 'First Name is required' }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <Typography variant="h7" gutterBottom>
          <b>Your Last Name</b>
        </Typography>
        <Controller
          control={control}
          name="lastName"
          render={({ field }) => (
            <TextField
              id="last-name"
              variant="outlined"
              placeholder="Enter Your Last Name"
              fullWidth
              margin="normal"
              required
              {...field}
            />
          )}
          rules={{ required: 'Last Name is required' }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <Typography variant="h7" gutterBottom>
          <b>Select Gender</b>
        </Typography>
        <Controller
          control={control}
          name="gender"
          render={({ field }) => (
            <RadioGroup
              aria-label="gender"
              name="gender"
              value={field.value}
              onChange={field.onChange}
              row
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          )}
        />
      </div>
    </>
  );
};

const ContactForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <Typography variant="h7" gutterBottom>
          <b>Email</b>
        </Typography>
        <Controller
          control={control}
          name="emailAddress"
          render={({ field }) => (
            <TextField
              id="email"
              variant="outlined"
              placeholder="Enter Your E-mail Address"
              fullWidth
              margin="normal"
              required
              {...field}
            />
          )}
          rules={{ required: 'Email Address is required' }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <Typography variant="h7" gutterBottom>
          <b>Phone Number</b>
        </Typography>
        <Controller
          control={control}
          name="phoneNumber"
          render={({ field }) => (
            <TextField
              id="phone-number"
              // label="Phone Number"
              variant="outlined"
              placeholder="Enter Your Phone Number"
              fullWidth
              margin="normal"
              required
              {...field}
            />
          )}
          rules={{ required: 'Phone Number is required' }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <Typography variant="h7" gutterBottom>
          <b>Linkedin Profile URL</b>
        </Typography>
        <Controller
          control={control}
          name="linkedin"
          render={({ field }) => (
            <TextField
              id="linkedin"
              variant="outlined"
              placeholder="Enter Linkedin URL"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
      </div>
    </>
  );
};

const Startup = () => {
  const { control } = useFormContext();
  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <Typography variant="h7" gutterBottom>
          <b>Name of Startup</b>
        </Typography>
        <Controller
          control={control}
          name="startup"
          render={({ field }) => (
            <TextField
              id="startup"
              variant="outlined"
              placeholder="Enter the name of your Startup"
              fullWidth
              margin="normal"
              required
              {...field}
            />
          )}
          rules={{ required: 'Name of Startup is required' }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <Typography variant="h7" gutterBottom>
          <b>Are you a single founder?</b>
        </Typography>
        <Controller
          control={control}
          name="founder"
          render={({ field }) => (
            <RadioGroup
              aria-label="founder"
              name="founder"
              value={field.value}
              onChange={field.onChange}
              row
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          )}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <Typography variant="h7" gutterBottom>
          <b>Website URL</b>
        </Typography>
        <Controller
          control={control}
          name="wurl"
          render={({ field }) => (
            <TextField
              id="wurl"
              variant="outlined"
              placeholder="Enter website URL"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <Typography variant="h7" gutterBottom>
          <b>Month and Year of Incorporation</b>
        </Typography>
        <div>
          <Controller
            control={control}
            name="incorporationDate"
            render={({ field }) => (
              <input
                type="date"
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                style={{ width: "290px", height: "50px" }}
              />
            )}
          />
        </div>
      </div>

      <div>
        <Typography variant="h7" gutterBottom>
          <b>Category</b>
        </Typography>
        <Controller
          control={control}
          name="category"
          render={({ field }) => (
            <TextField
              id="category"
              variant="outlined"
              placeholder="Enter the category of your Startup"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
      </div>
    </>
  );
};

const Additional = () => {
  const { control } = useFormContext();
  const [isRobotVerified, setRobotVerified] = useState(false);

  const handleVerification = (value) => {
    setRobotVerified(!!value);
  };
  return (
    <>
      <Typography variant="h7" gutterBottom>
        <b>Please share your Pitch Deck</b>
      </Typography>
      <div style={{ marginBottom: "20px", position: "relative" }}>
        <div
          style={{
            border: "1px dotted #888",
            padding: "20px",
            height: "200px",
            width: "500px",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
          onClick={() => document.getElementById("pitch-deck-file").click()}
        >
          <Typography
            variant="subtitle2"
            gutterBottom
            style={{
              position: "absolute",
              bottom: "40px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: "1",
              backgroundColor: "white",
              padding: "5px",
              whiteSpace: "nowrap",
            }}
          >
            You can upload a PDF file only [max size 20MB].
          </Typography>
          <b>Drop your pitch deck here</b>
          <IconButton
            component="span"
            aria-label="upload pitch deck"
            color="primary"
          >
            <CloudUploadIcon />
          </IconButton>
        </div>
        <input
          id="pitch-deck-file"
          type="file"
          accept=".pdf"
          style={{ display: "none" }}
          onChange={(e) => console.log(e.target.files[0])}
        />
      </div>

      <Typography variant="h7" gutterBottom>
        <b>100 Characters to tell us what you are building</b>
      </Typography>
      <Controller
        control={control}
        name="description"
        render={({ field }) => (
          <TextField
            id="description"
            variant="outlined"
            placeholder="Enter details here"
            fullWidth
            margin="normal"
            inputProps={{ maxLength: 100 }}
            multiline
            rows={4}
            style={{ maxWidth: "74%", width: "100%" }}
            {...field}
          />
        )}
        rules={{ required: 'Description is required' }}
      />
      <ReCAPTCHA
        sitekey="6LdNGokpAAAAAIhIc-kdetXBogyDfTJfKVrNRLpX"
        onChange={handleVerification}
        style={{ margin: "20px auto", display: "block" }}
      />
    </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicForm />;

    case 1:
      return <ContactForm />;
    case 2:
      return <Startup />;
    case 3:
      return <Additional />;
    default:
      return "unknown step";
  }
}

const Startupcontact = () => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      nickName: "",
      emailAddress: "",
      phoneNumber: "",
      alternatePhone: "",
      address1: "",
      address2: "",
      country: "",
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = async (data) => {
    console.log(data);
    if (activeStep === steps.length - 1) {
      try {
        // Perform any necessary form data processing before submission
  
        // Submit the form data to Formspree programmatically
        const response = await fetch('https://formspree.io/f/xknllwgl', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data), // Serialize the form data as JSON
        });
  
        // Check if the form submission was successful
        if (response.ok) {
          // Move to the next step if the submission was successful
          setActiveStep(activeStep + 1);
        } else {
          // Handle error if form submission failed
          console.error('Form submission failed:', response.statusText);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    } else {
      // Move to the next step if it's not the last step
      setActiveStep(activeStep + 1);
    }
  };
  
  

  const getNextButtonLabel = () => {
    if (activeStep === steps.length - 1) {
      return "Finish";
    } else {
      return "Next";
    }
  };

  return (
    <div className={classes.root}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorStepConnector />}
      >
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleNext)} method="POST">
            <Grid container spacing={3}>
              <Grid item xs={12}>
              {/* <Paper
                className={classes.paper}
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "10px",
                  padding: "20px",
                  marginBottom: "20px",
                }}
              >
                {getStepContent(activeStep)}
              </Paper> */}
              <Paper className={classes.paper}>
                  {getStepContent(activeStep)}
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Grid container justify="flex-end">
                  <Button
                    className={
                      activeStep === 0 ? classes.backButton : classes.button
                    }
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    Back
                  </Button>
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    {getNextButtonLabel()}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </FormProvider>
      )}
    </div>
  );
};

export default Startupcontact;
