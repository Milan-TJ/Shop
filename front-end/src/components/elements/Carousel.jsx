import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const images = [
  {
    label: "Best offers just for you",
    imgPath:
      "https://i.pinimg.com/236x/97/83/a2/9783a28438815952d6134afcf02650ea.jpg",
  },
  {
    label: "Order now",
    imgPath:
      "https://i.pinimg.com/474x/0d/86/b1/0d86b14bb6503907498ebff62062ae12.jpg",
  },
  {
    label: "Sale is live",
    imgPath:
      "https://i.pinimg.com/236x/1f/32/95/1f3295518bdf44f527cbd985e8b68786.jpg",
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep(
      (prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps
    );
  };

  return (
    <Box sx={{ maxWidth: "100%", flexGrow: 1, height: "100%" }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: "12%",
          justifyContent: "center",
          pl: 2,
          bgcolor: "#c8cfff",
        }}
      >
        <Typography
          sx={{ fontSize: "1.5rem", fontWeight: "600", color: "black" }}
        >
          {images[activeStep].label}
        </Typography>
      </Paper>
      <Box
        component="img"
        sx={{
          height: "75%",
          display: "block",
          width: "40%",
          overflow: "hidden",
          margin: "auto",
          bgcolor: "#e6e8ef",
        }}
        src={images[activeStep].imgPath}
        alt={images[activeStep].label}
      />
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext}>
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
        sx={{
          height: "10%",
          bgcolor: "#c8cfff",
        }}
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;
