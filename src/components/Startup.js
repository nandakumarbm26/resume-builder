import { Card, Grid, TextField } from "@mui/material";
import React from "react";
import Personal from "./Personal";
function Startup() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{ height: "95vh", width: "95vw", marginTop: "2.5vh" }}
        className="bg"
      >
        <Personal />
      </Card>
    </div>
  );
}

export default Startup;
