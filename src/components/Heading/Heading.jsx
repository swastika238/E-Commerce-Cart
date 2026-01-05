import React from "react";

const Heading = (props) => {
  return (
    <div className="w-fit mx-auto justify-center">
      <h2 className="md:text-3xl text-[2.5rem] font-bold">
        <span className="text-orange-500 underline decoration-orange-500 underline-offset-2">
          {props.highlight}
        </span>{" "}
        {props.heading}
      </h2>
    </div>
  );
};

export default Heading;
