import React from "react";
import Header from "../components/home/Header";
import About from "../components/home/about";
import Footer from "../components/home/footer";
import Customer from "../components/home/Customer";
import Vendor from "../components/home/Vendor";

const Home = () => {
  return (
    <body>
      <Header />
      <main className="p-0 mt-24">
        <Customer />
        <Vendor />
        <About />
        <Footer />
      </main>
    </body>
  );
};

export default Home;
