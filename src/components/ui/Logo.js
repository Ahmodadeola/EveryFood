import React from "react";
import LogoImg from "../../assets/images/bell.png";

const Logo = () => {
  return (
    <div className="flex items-center max-w-max h-8">
      <div className="h-8 w-8">
        <img
          style={{ width: "100%", height: "100%" }}
          src={LogoImg}
          alt="everyfood logo"
        />
      </div>

      <h2 className="text-lg ml-2 text-green-600 font-bold">EveryFood</h2>
    </div>
  );
};

export default Logo;
