import "./styles/global.scss";
import Navbar from "./components/Navbar/navbar.js";
import Footer from "./components/Footer/footer.js";

export const metadata = {
  title: "Your Site Title",
  description: "Your site description",
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
