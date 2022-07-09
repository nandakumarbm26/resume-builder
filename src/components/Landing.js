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
          <Link to="/" style={{ color: "darkblue", textDecoration: "none" }}>
            Resume Builder
          </Link>
        </Typography>
        <Box className="head">
          <Button sx={{ color: "white" }}>
            <Link to="/user" style={{ color: "white", textDecoration: "none" }}>
              Build
            </Link>
          </Button>
          <Button sx={{ color: "white" }}>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Home
            </Link>
          </Button>
          <Button sx={{ color: "white" }}>
            <a
              href="https://github.com/nandakumarbm26"
              style={{ color: "white", textDecoration: "none" }}
            >
              Contact
            </a>
          </Button>
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
            <Link to="/user" style={{ color: "white", textDecoration: "none" }}>
              Get Started
            </Link>
          </button>
        </Grid>
      </Grid>
      <div
        style={{
          height: "10vh",
          backgroundColor: "black",
          textAlign: "center",
          color: "gray",
        }}
      >
        <p> &#169; copyrights reserved</p>
        <h6>designed and developed by nanda kumar b m</h6>
      </div>
    </div>
  );
}

export default Landing;
