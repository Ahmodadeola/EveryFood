import React from "react";
import Spag from "../../assets/images/spag2.jpg";

function About() {
  return (
    <section className="py-10 pt-4 md:flex md:justify-around md:mb-10 md:pb-0">
      <div className="mb-4">
        <img src={Spag} className="w-full h-60 m-0 md:max-w-lg" alt="" />
      </div>
      <div className="md:max-w-md text-center">
        <h2 className="text-xl font-bold mb-4 text-green-500">What we do</h2>
        <p className="mb-4">
          We provide a smooth and interactable web platform where food vendors
          at different locations can put up varieties of dishes for sale and
          consumers can navigate through multiple dishes to place order.
        </p>
        <button className="btn-custom">Learn More</button>
      </div>
    </section>
  );
}

export default About;
