import React from "react";

const Navbar = () => {
  return (
    <div className=" py-4 lg:py-6">
      <div className="container flex justify-between items-center">
        {/* logo section */}
        <div>
          <p className="text-3xl lg:text-4xl font-semibold">
            RESTAU<span className="text-primary">RANTE</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
