import React from "react";
import Header from "../components/home/Header";
import About from "../components/home/about";
import Footer from "../components/home/footer";
import Customer from "../components/home/Customer";
import Vendor from "../components/home/Vendor";
import "../assets/css/home/Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <main className="p-0 mt-24 main-section">
        <Customer />
        <Vendor />
        <About />
        <Footer />
      </main>
    </>
  );
};

export default Home;
