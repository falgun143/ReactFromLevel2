import { useLocation } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import { Data } from "./JobFormValidataion";

const JobFormSummary = () => {
  const location = useLocation();
  const formData = location.state as Data;

  return (
    <Box
      sx={{
        maxWidth: {
          xs: 380,
          sm: 450,
          md: 550,
          lg: 650,
          xl: 750,
        },
        minHeight: {
          xs: 530,
          sm: 470,
          md: 490,
          lg: 400,
          xl: 420,
        },
        boxSizing: "border-box",
        padding: 2,
        backgroundColor: "#3ad695",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        border: "1px solid #ddd",
        color: "white",
        borderRadius: 3,
        lineHeight: 1.5,
      }}
    >
      <Typography variant="h4" fontWeight="bold" marginTop={2} align="center">
        Job Application Summary
      </Typography>

      <Typography variant="body1" margin={2} align="left">
        Dear {formData.fullname},
      </Typography>
      <Typography variant="body1">
        Thank you for submitting your job application. Below is a summary of the
        details you provided:
      </Typography>
      <Typography variant="subtitle1" fontWeight="bold">
        - Email: {formData.email}
        <br />- Phone Number: {formData.phonenumber}
        <br />- Applying for Position: {formData.position}
        {formData.experience && (
          <Typography variant="subtitle1" fontWeight="bold">
            - Relevant Experience: {formData.experience} years
          </Typography>
        )}
        {formData.portfoliolink && (
          <Typography variant="subtitle1" fontWeight="bold">- Portfolio URL: {formData.portfoliolink}</Typography>
        )}
        {formData.managementexperience && (
          <Typography variant="subtitle1" fontWeight="bold">
            - Management Experience: {formData.managementexperience} years
          </Typography>
        )}
        <Typography variant="subtitle1" fontWeight="bold">
          - Additional Skills:{" "}
          {formData.additionalskills?.join(", ") || "None specified"}
        </Typography>
        <Typography variant="subtitle1" fontWeight="bold">
          - Preferred Interview Date: {formData.preferredinterviewdate}
        </Typography>
        <Typography variant="subtitle1" fontWeight="bold">
          - Preferred Interview Time: {formData.preferredinterviewtime}
        </Typography>
      </Typography>

      <Typography variant="body1" gutterBottom>
        We will review your application and contact you if your qualifications
        match our requirements. If you have any questions or need further
        assistance, please feel free to contact us.
      </Typography>

      <Typography variant="body1" gutterBottom>
        Best regards,
        <br />
        Your Company Name
      </Typography>
    </Box>
  );
};

export default JobFormSummary;
