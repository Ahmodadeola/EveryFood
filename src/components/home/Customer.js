import React from "react";
import spag from "../../assets/images/spag.jpg";

function Customer() {
  return (
    <div className="bg-green-100 ">
      <section className="md:h-96 mx-auto items-center md:px-8 lg:w-5/6 py-10 pt-0 md:flex md:justify-around md:mb-8 md:pb-0">
        <div className="mb-4 md:w-1/2">
          <img
            src={spag}
            className="w-full h-60 md:h-72 m-0 object-cover  md:rounded-lg"
            alt="spaghetti"
          />
        </div>

        <div className="md:max-w-md text-center md:w-1/2 md:px-4">
          <h2 className="text-xl font-bold mb-4 text-green-500">
            Want something tasty?
          </h2>
          <p className="mb-4">
            EveryFood offers you a plethora of tasty dishes from different food
            vendors across different locations delivered to you in a jiff(We
            can't teleport though)
          </p>
          <button className="btn-custom">Get Started</button>
        </div>
      </section>
    </div>
  );
}

export default Customer;
