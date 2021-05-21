import React from "react";
import chef from "../../assets/images/chef.jpg";

function Vendor() {
  return (
    <section className="py-10 pt-4 md:flex md:justify-around md:mb-10 md:pb-0">
      <div className="mb-4 md:order-last">
        <img
          src={chef}
          alt="Chef with dish"
          className="w-full h-60 m-0 md:max-w-lg"
        />
      </div>
      <div className="md:max-w-md text-center mb-6">
        <h2 className="text-xl font-bold mb-4 text-green-500">
          Are you a food vendor?
        </h2>
        <p>
          You can showcase your dishes here at everyFood for good meal lovers to
          quickly place orders and you make your money fast.
        </p>
        <button className="btn-custom">Get On Board</button>
      </div>
    </section>
  );
}

export default Vendor;
