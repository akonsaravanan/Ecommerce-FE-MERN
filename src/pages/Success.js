import React from "react";
import { useLocation, Link } from "react-router-dom";

const Success = ({ data }) => {
  /*  const location = useLocation();
  console.log(location); */
  return (
    <>
      <div>
        <p className="successPage"> Thanks for your Shopping ❤ 😍!</p>
        <Link className="continueShopping" to="/">
          Back to 🏡
        </Link>
      </div>
    </>
  );
};

export default Success;
