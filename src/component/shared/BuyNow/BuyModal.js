import React, { useState } from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import useAuth from "../../hooks/useAuth";
import { Button, MenuItem, TextField } from "@mui/material";
const axios = require("axios");

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  overflow: "scroll",
  maxHeight: "100%",

  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  //   overflow: "scroll",
  p: 4,
};

const BuyModal = ({ open, handleClose, bike, setSuccess }) => {
  const { user } = useAuth();
  const [color, setColor] = React.useState("Tomato");
  const [pement, setPement] = React.useState("Bkash");

  const colors = [
    {
      value: "Tomato",
      label: "Tomato",
    },
    {
      value: "Blue",
      label: "Blue",
    },
    {
      value: "Astronaut",
      label: "Astronaut",
    },
    {
      value: "Screamin' Green",
      label: "Screamin' Green",
    },
  ];
  const pements = [
    {
      value: "Cash On Delivery",
      label: "Cash On Delivery",
    },
    {
      value: "Online Payment",
      label: "Online Payment",
    },
  ];

  const initialize = {
    name: user?.displayName,
    email: user?.email,
  };

  const [buyinfo, setBuyinfo] = useState(initialize);

  const handleChangeColor = (e) => {
    setColor(e.target.value);
  };

  const handleChangePayment = (e) => {
    setPement(e.target.value);
  };

  const handleOnBlur = (e) => {
    const feild = e.target.name;
    const value = e.target.value;
    const bookinginfo = { ...buyinfo };
    bookinginfo[feild] = value;
    setBuyinfo(bookinginfo);
  };

  const handleInfo = (e) => {
    // const orderData = {
    //   ...buyinfo,
    //   productName: bike?.bikeName,
    //   productId: bike?._id,
    //   productimg: bike?.img,
    //   price: bike?.price,
    // };
    axios
      .post("http://localhost:5000/orders", {
        ...buyinfo,
        productName: bike?.bikeName,
        productId: bike?._id,
        productimg: bike?.img,
        price: bike?.price,
      })
      .then(function (response) {
        if (response.data.insertedId) {
          setSuccess(true);
          handleClose(true);
        }

        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(buyinfo);
    e.preventDefault();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            sx={{ textAlign: "center" }}
            variant="h6"
            component="h2"
          >
            Information
          </Typography>
          <Box sx={{ mt: 2 }} component="form" onSubmit={handleInfo}>
            <TextField
              id="outlined-required"
              label="Your Name"
              sx={{ m: 1, px: 1 }}
              value={user?.displayName}
              //   onChange={handleChange}
            />
            <TextField
              id="outlined-required"
              label="Product Name"
              value={bike?.bikeName}
              sx={{ m: 1, px: 1 }}
              //   name="productName"
              //   onBlur={handleOnBlur}
            />{" "}
            <br />
            <TextField
              id="outlined-required"
              label="Your Email"
              sx={{ m: 1, px: 1 }}
              value={user?.email}
              onBlur={handleOnBlur}
              name="userEmail"
            />
            <TextField
              id="outlined-required"
              label="Product Price"
              placeholder="Placeholder"
              value={bike?.price}
              sx={{ m: 1, px: 1 }}
            />{" "}
            <br />
            <TextField
              id="outlined-required"
              label="Your Address"
              sx={{ m: 1, px: 1 }}
              onBlur={handleOnBlur}
              name="userAdress"
              //   value={user?.email}
              //   onChange={handleChange}
            />
            <TextField
              id="outlined-select-currency"
              select
              label="Select Color"
              value={color}
              sx={{ m: 1 }}
              onBlur={handleOnBlur}
              onChange={handleChangeColor}
              name="color"
              //   onChange={handleChange}
            >
              {colors.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>{" "}
            <br />
            <TextField
              id="outlined-required"
              label="Post Code"
              sx={{ m: 1, px: 1 }}
              onBlur={handleOnBlur}
              name="postCode"
              //   value={user?.email}
              //   onChange={handleChange}
            />
            <TextField
              id="outlined-select-currency"
              select
              label="Select Pement"
              value={pement}
              sx={{ m: 1 }}
              onBlur={handleOnBlur}
              name="payment"
              onChange={handleChangePayment}
            >
              {pements.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>{" "}
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
              Confirm{" "}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default BuyModal;
