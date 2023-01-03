import Foot from "./Footer";
import NavBars from "./NavBars";

const Layout = ({ children }) => {
  return (
    <>
      <NavBars />
      <div className="py-4 bg-gray-100">
        <div className="container mx-auto">{children}</div>
      </div>
      <Foot />
    </>
  );
};

export default Layout;
