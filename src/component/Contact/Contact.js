import React, { useRef } from "react";
import { Box } from "@mui/system";
import { Button, Grid, TextField, Typography } from "@mui/material";

import img from "../../images/contact.png";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6jx37qe",
        "template_pflyq9q",
        form.current,
        "user_kOifPw4vGKBXLR6Skivyt"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Send SuccessFully!");
          form.current = "";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <Header></Header>
      <Box sx={{ bgcolor: "#c3bec5b3", minHeight: "100vh" }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "60%",
                bgcolor: "white",
                p: 5,
                borderRadius: 2,
                textAlign: "center",
              }}
              component="form"
              onSubmit={sendEmail}
              ref={form}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: 800, py: 2, color: "#007DFF" }}
              >
                {" "}
                Concat Us
              </Typography>
              <TextField
                id="outlined-basic"
                label="Your Name"
                variant="outlined"
                name="name"
                fullWidth
                sx={{ m: 1 }}
              />
              <TextField
                id="outlined-basic"
                label="Your Email"
                variant="outlined"
                name="user_email"
                type="email"
                fullWidth
                sx={{ m: 1 }}
              />
              <TextField
                id="outlined-basic"
                label="Write message"
                variant="outlined"
                name="message"
                type="text"
                fullWidth
                multiline
                rows={4}
                sx={{ m: 1 }}
              />
              <Button
                variant="contained"
                sx={{ bgcolor: "tomato", width: "100%", m: 1 }}
                type="submit"
              >
                {" "}
                SEND
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={img} alt="" width="100%"></img>
          </Grid>
        </Grid>
      </Box>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
