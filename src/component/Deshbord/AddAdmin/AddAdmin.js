import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const AddAdmin = () => {
  const axios = require("axios");
  const [email, setAdminEmail] = useState("");

  const handleOnBlur = (e) => {
    setAdminEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(email);
    const user = { email };
    axios
      .put("http://localhost:5000/users/admin", user, {
        headers: { "Content-Type": "application/json" },
      })
      .then(function (response) {
        alert("Adding Succesfull");
      })
      .catch(function (error) {
        console.log(error);
      });
    e.preventDefault();
  };
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h5" sx={{ fontWeight: 800 }}>
        Add A Admin
      </Typography>
      <Box
        sx={{ width: "50%", mx: "auto", my: 2 }}
        component="form"
        onSubmit={handleSubmit}
      >
        <TextField
          fullWidth
          label="Admin Email"
          id="fullWidth"
          type="email"
          onBlur={handleOnBlur}
        />
        <Button variant="outlined" sx={{ py: 1, px: 5, my: 2 }} type="submit">
          ADD
        </Button>
      </Box>
    </Box>
  );
};

export default AddAdmin;
