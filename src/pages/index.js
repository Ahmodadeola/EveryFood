import React from "react";
import Header from "../components/home/Header";
import About from "../components/home/about";
import Footer from "../components/home/footer";
import Customer from "../components/home/Customer";
import Vendor from "../components/home/Vendor";

const Home = () => {
  return (
    <main>
      <Header />
      <Customer />
      <Vendor />
      <About />
      <Footer />
    </main>
  );
};

export default Home;
