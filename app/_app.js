import "./styles/global.css";
import Navbar from "./components/Navbar/navbar.js";
import Footer from "./components/Footer/footer.js";
// import Layout from "./Layout.js";

export default function App({ Component, pageProps }) {
  // Define the routes array with route objects for each section
  const routes = [
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Resume", path: "/resume" },
    { name: "Portfolio", path: "/portfolio" },
  ];
  return (
    // <Layout>
    <div>
      <Navbar routes={routes} />
      <Component {...pageProps} />
      <Footer />
    </div>
    // </Layout>
  );
}
