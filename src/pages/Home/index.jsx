import React from "react";
import { Outlet, Link, useParams } from "react-router-dom";
import { Button } from "@douyinfe/semi-ui";
// import { go } from "history";

const Home = () => {
  const params = useParams();
  const handleClick = () => {
    location.hash = "/login";
  };
  return (
    <>
      <div>Home</div>
      <Link to="/user/2021" onClick={() => console.log(params)}>
        to next page
      </Link>
      <Link to="/">Home</Link>
      <Button variant="text" onClick={handleClick}>
        login
      </Button>
      <Outlet />
    </>
  );
};

export default Home;
