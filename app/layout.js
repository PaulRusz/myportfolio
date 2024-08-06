import "./styles/global.scss";
import React from "react";
import Navbar from "./components/Navbar/navbar.js";
import Footer from "./components/Footer/footer.js";

const Layout = ({ children }) => {
  return (
    <>
      <html>
        <body>
          <div>
            <Navbar />
            {children}
            <Footer />
          </div>
        </body>
      </html>
    </>
  );
};

export default Layout;
