import React from "react";
import Spag from "../../assets/images/spag2.jpg";

function About() {
  return (
    <div className="bg-green-100 ">
      <section className="items-center md:h-96 mx-auto h-1/2 md:px-8 lg:w-5/6 py-10 pt-4 md:flex md:justify-around md:pb-0">
        <div className="mb-4 md:w-1/2">
          <img
            src={Spag}
            className="w-full h-60 md:h-72 m-0 md:rounded"
            alt=""
          />
        </div>
        <div className="md:w-1/2 text-center px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-green-700">
            What do we do?
          </h2>
          <p className="mb-4">
            We provide a smooth and interactable web platform where food vendors
            at different locations can put up varieties of dishes for sale and
            consumers can navigate through multiple dishes to place order.
          </p>
          <button className="btn-custom">Learn More</button>
        </div>
      </section>
    </div>
  );
}

export default About;
