import React from "react";

import nFound from "../../images/nfound.jpg";
import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";

const NotFound = () => {
  return (
    <div>
      <Header></Header>
      <img src={nFound} alt="" width="100%" />
      <Footer></Footer>
    </div>
  );
};

export default NotFound;
