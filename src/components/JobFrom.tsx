import {
  Box,
  Button,
  TextField,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useFormValidation, { Data } from "../components/JobFormValidataion";
import jobimage from "../../public/jobapplication.png";
import "./JobForm.css";

const JobForm = () => {
  const { register, handleSubmit, errors, watch } = useFormValidation();
  const navigate = useNavigate();

  const position = watch("position");
  const skills = ["Java", "JavaScript", "C++", "Python"];

  const onSubmit = (data: Data) => {
    toast.success("Registration successful! Redirecting...");
    setTimeout(() => navigate("/summary", { state: data }), 4000);
  };



  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            lg: "row",
          },
          gap: 5,
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)} style={{ padding: 0 }}>
          <ToastContainer autoClose={4000} position="top-center" newestOnTop />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: {
                xs: "100%",
                lg: "70%",
              },
              border: 0.1,
              borderColor: "grey.400",
              borderRadius: 2,
              gap: 2,
              padding: 2,
              color: "black",
              backgroundColor: "#83bdff",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography variant={"h3"} fontWeight="bold" align="center">
              Job Registration Form
            </Typography>
            <Typography variant={"subtitle1"} style={{ color: "#31363F" }}>
              Take the first step towards your dream job. Register now and complete the form with
              your details and qualifications to apply today.
            </Typography>

            <TextField
              fullWidth
              required
              label="Full Name"
              {...register("fullname")}
              error={!!errors.fullname}
              helperText={errors.fullname?.message}            
            />

            <TextField
              fullWidth
              required
              label="Email"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}             
            />

            <TextField
              fullWidth
              required
              label="Phone Number"
              {...register("phonenumber" ,{valueAsNumber:true})}
              error={!!errors.phonenumber}
              helperText={errors.phonenumber?.message}       
            />

            <FormControl fullWidth>
              <InputLabel id="position-label">Applying for position</InputLabel>
              <Select
                labelId="position-label"
                {...register("position")}
                label="Applying for position"
                defaultValue=""
                required
              >
                <MenuItem value="Developer">Developer</MenuItem>
                <MenuItem value="Designer">Designer</MenuItem>
                <MenuItem value="Manager">Manager</MenuItem>
              </Select>
            </FormControl>

            <div className="transition-box">
              {(position === "Developer" || position === "Designer") && (
                <TextField
                  fullWidth
                  label="Relevant Experience(In Years)"
                  {...register("experience", { valueAsNumber: true })}
                  error={!!errors.experience}
                  helperText={errors.experience?.message}                
                />
              )}
              {position === "Designer" && (
                <TextField
                  fullWidth
                  label="Portfolio URL"
                  {...register("portfoliolink")}
                  error={!!errors.portfoliolink}
                  helperText={errors.portfoliolink?.message}           
                />
              )}
              {position === "Manager" && (
                <TextField
                  fullWidth
                  label="Management Experience(In Years)"
                  {...register("managementexperience", { valueAsNumber: true })}
                  error={!!errors.managementexperience}
                  helperText={errors.managementexperience?.message}
                />
              )}
            </div>

            <Box>
              <Typography variant="h6">Additional Skills</Typography>
              <FormGroup row>
                {skills.map((skill) => (
                  <FormControlLabel
                    key={skill}
                    control={<Checkbox {...register("additionalskills")} value={skill} />}
                    label={skill}
                  />
                ))}
              </FormGroup>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Typography variant="h6">Preferred Interview Time</Typography>
              <TextField
                fullWidth
                label="Preferred Interview Date"
                type="date"
                required
                {...register("preferredinterviewdate")}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                fullWidth
                label="Preferred Interview Time"
                type="time"
                required
                {...register("preferredinterviewtime")}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box>

            <Button variant="contained" type="submit" fullWidth>
              Submit
            </Button>
          </Box>
        </form>

        <img
          src={jobimage}
          alt="Job Application"
          style={{
            maxWidth: "50%", // Initially 50% width
            height: "auto", // Maintain aspect ratio
            alignSelf: "center", // Center align vertically within the box
            objectFit: "cover", // Ensure the image covers the container while maintaining aspect ratio
            width: "100%", // Adjusts to 100% width on mobile screens
            marginBottom: "10px" // Added to adjust space between image and form
          }}
        />
      </Box>
    </>
  );
};

export default JobForm;
