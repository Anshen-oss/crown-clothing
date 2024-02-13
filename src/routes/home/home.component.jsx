import { Outlet } from "react-router-dom";

import Directory from "../../directory/directory.component";
const Home = ({ categories }) => {
  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
};

export default Home;
