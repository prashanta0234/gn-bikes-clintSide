import { Alert, Button, TextField } from "@mui/material";
import { Box } from "@mui/system";

import React, { useState } from "react";
const axios = require("axios");

const AddBikes = () => {
  const [addbike, setAddBike] = useState({});
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    const feild = e.target.name;
    const value = e.target.value;
    const bikeinfo = { ...addbike };
    bikeinfo[feild] = value;
    setAddBike(bikeinfo);
  };
  const handleBike = (e) => {
    const procced = window.confirm("Sure to delate Orders");
    if (procced) {
      axios
        .post("http://localhost:5000/bikes", {
          ...addbike,
        })
        .then(function (response) {
          if (response.data.insertedId) {
            setSuccess(true);
            alert("delated SuccessFully");
          }

          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    e.preventDefault();
    console.log(addbike);
  };
  return (
    <div>
      {success && (
        <Alert>Proceed SuccessFull Please Goto Deshbord And pay Bill.</Alert>
      )}
      <Box sx={{ mt: 2 }} component="form" onSubmit={handleBike}>
        <TextField
          id="outlined-required"
          label="Bike Name"
          sx={{ m: 1, px: 1 }}
          onBlur={handleOnBlur}
          name="bikeName"
          required
        />
        <TextField
          id="outlined-required"
          label="Bike Price"
          type="number"
          sx={{ m: 1, px: 1 }}
          onBlur={handleOnBlur}
          name="price"
          required
        />{" "}
        <br />
        <TextField
          id="outlined-required"
          label="Image Url"
          sx={{ m: 1, px: 1 }}
          onBlur={handleOnBlur}
          name="img"
          required
        />
        <TextField
          id="outlined-required"
          label="Add Reting"
          type="number"
          inputProps={{ step: "0.1", lang: "en-US" }}
          helperText="You have to must Add 1 to 5"
          sx={{ m: 1, px: 1 }}
          onBlur={handleOnBlur}
          name="reating"
          required
        />
        <br />
        <Button
          type="submit"
          variant="contained"
          sx={{
            py: 1,
            px: 10,
            bgcolor: "#DF453E",
            color: "white",
            m: 1,
          }}
        >
          ADD{" "}
        </Button>
      </Box>
    </div>
  );
};

export default AddBikes;
