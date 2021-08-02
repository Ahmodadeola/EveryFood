import React from "react";
import ChickenBurger from "../../assets/images/chicken-burger.jpg";

function Customer() {
  return (
    <div className="bg-green-100 ">
      <section className="md:h-96 mx-auto items-center md:px-8 lg:w-5/6 py-10 pt-0 md:flex md:justify-around md:mb-8 md:pb-0">
        <div
          style={{
            height: "20em",
          }}
          className="mb-4 md:w-1/2"
        >
          <img
            style={{
              height: "100%",
              width: "100%",
            }}
            src={ChickenBurger}
            className="w-full m-0 object-cover md:rounded-lg"
            alt="spaghetti"
          />
        </div>

        <div className="md:max-w-md text-center md:w-1/2 md:px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-green-700">
            Want something tasty?
          </h2>
          <p className="mb-4 text-sm">
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
