import React from "react";
import chef from "../../assets/images/chef.jpg";

function Vendor() {
  return (
    <section className="md:h-96 items-center mx-auto md:px-8 lg:w-5/6 py-10 pt-4 md:flex md:justify-around md:mb-10 md:pb-0">
      <div className="mb-4 md:order-last md:w-1/2">
        <img
          src={chef}
          alt="Chef with dish"
          className="w-full h-60 md:h-72 m-0 md:rounded"
        />
      </div>
      <div className="md:max-w-md text-center md:w-1/2 md:px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-green-700">
          Are you a food vendor?
        </h2>
        <p className="mb-4">
          You can showcase your dishes here at everyFood for good meal lovers to
          quickly place orders and you make your money fast.
        </p>
        <button className="btn-custom">Get On Board</button>
      </div>
    </section>
  );
}

export default Vendor;
