import React from "react";
import "./landing.css";
import { Link } from "react-router-dom";
import { Button, Typography, Box, Grid } from "@mui/material";
function Landing() {
  return (
    <div>
      <div className="head">
        <Typography
          variant="h4"
          sx={{
            fontFamily: "fantasy",
            color: "darkblue",
            textAlign: "inline-start",
            marginTop: "2vh",
          }}
        >
          Resume Builder
        </Typography>
        <Box className="head">
          <Button sx={{ color: "white" }}>Build</Button>
          <Button sx={{ color: "white" }}>Build</Button>
          <Button sx={{ color: "white" }}>Build</Button>
        </Box>
      </div>
      <Grid container sx={{ height: "80vh", width: "100vw" }}>
        <Grid item sm={6} sx={{ position: "relative" }}>
          <img src="./images/resume2.jpg" height="100%" width="100%" />
        </Grid>
        <Grid item sm={6} className="gri">
          <div class="gradient-border">
            Get
            <br />
            <br />
            Your
            <br />
            <br />
            Resume <br />
            <br />
          </div>
          <button
            class="glow-on-hover"
            type="button"
            style={{ fontSize: "25px", color: "teal" }}
          >
            <Link to="/user">Get Started</Link>
          </button>
        </Grid>
      </Grid>
      <div style={{ height: "10vh", backgroundColor: "black" }}></div>
    </div>
  );
}

export default Landing;
