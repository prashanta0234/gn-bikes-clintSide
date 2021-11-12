import { Alert, Button, TextField } from "@mui/material";
import { Box } from "@mui/system";

import React, { useState } from "react";
const axios = require("axios");

const AddReview = ({ user }) => {
  const [addReview, setAddReview] = useState({});
  const [success, setSuccess] = useState(false);
  const { displayName, photoURL } = user;

  const handleOnBlur = (e) => {
    const feild = e.target.name;
    const value = e.target.value;
    const reviewInfo = { ...addReview };
    reviewInfo[feild] = value;
    setAddReview(reviewInfo);
  };
  const handleBike = (e) => {
    const procced = window.confirm("Sure to Submit Review");
    if (procced) {
      axios
        .post("http://localhost:5000/reviews", {
          ...addReview,
          name: displayName,
          img: photoURL,
        })
        .then(function (response) {
          if (response.data.insertedId) {
            setSuccess(true);
            alert("Added SuccessFully");
          }

          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    e.preventDefault();
    console.log(addReview);
  };
  console.log(user);
  return (
    <div>
      {success && (
        <Alert>Proceed SuccessFull Please Goto Deshbord And pay Bill.</Alert>
      )}
      <Box sx={{ mt: 2 }} component="form" onSubmit={handleBike}>
        <TextField
          id="outlined-required"
          label="Review"
          helperText="Write Your review Here"
          sx={{ m: 1, px: 1 }}
          onBlur={handleOnBlur}
          name="des"
          multiline
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
          name="rating"
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

export default AddReview;
