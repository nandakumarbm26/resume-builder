import React from "react";
import { Grid, TextField, TextareaAutosize } from "@mui/material";
function Personal() {
  return (
    <Grid container sx={{ margin: "5px" }} rowSpacing={1}>
      <Grid item sm={6} sx={{ boxSizing: "content-box" }}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          sx={{ backgroundColor: "white", width: "90%" }}
        />
      </Grid>
      <Grid item sm={6} sx={{ boxSizing: "content-box" }}>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          fullWidth
          sx={{ backgroundColor: "white", width: "90%" }}
        />
      </Grid>
      <Grid item sm={4} sx={{ boxSizing: "content-box" }}>
        <TextField
          id="outlined-basic"
          label="Contact number"
          variant="outlined"
          sx={{ backgroundColor: "white", width: "90%" }}
        />
      </Grid>
      <Grid item sm={4} sx={{ boxSizing: "content-box" }}>
        <TextField
          id="outlined-basic"
          label="Alternative Number"
          variant="outlined"
          fullWidth
          sx={{ backgroundColor: "white", width: "90%" }}
        />
      </Grid>
      <Grid item sm={4} sx={{ boxSizing: "content-box" }}>
        <TextField
          id="outlined-basic"
          label="Position"
          variant="outlined"
          fullWidth
          sx={{ backgroundColor: "white", width: "90%" }}
        />
      </Grid>
      <Grid item sm={8} sx={{ boxSizing: "content-box" }}>
        <TextareaAutosize
          id="outlined-basic"
          label="Summary"
          variant="outlined"
          fullWidth
          placeholder="tell about yourself"
          minRows={3}
          maxRows={3}
          maxLength={300}
          sx={{ backgroundColor: "white", width: "90%" }}
        />
      </Grid>
    </Grid>
  );
}

export default Personal;
