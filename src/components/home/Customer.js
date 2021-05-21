import React from "react";
import spag from "../../assets/images/spag.jpg";

function Customer() {
  return (
    <section className="py-10 pt-0 md:flex md:justify-around md:mb-8 md:pb-0">
      <div className="mb-4">
        <img
          src={spag}
          className="w-full h-60 m-0 md:max-w-lg md:rounded-lg"
          alt=""
        />
      </div>

      <div className="md:max-w-md text-center">
        <h2 className="text-xl font-bold mb-4 text-green-500">
          Want something tasty?
        </h2>
        <p className="mb-4">
          EveryFood offers you a plethora of tasty dishes from different food
          vendors from different locations delivered to you in a jiff(We can't
          teleport though)
        </p>
        <button className="btn-custom">Get Started</button>
      </div>
    </section>
  );
}

export default Customer;
