import { Footer } from "flowbite-react";
const Foot = () => {
  return (
    <Footer
      container={true}
      className="bg-gradient-to-br from-violet-800 to-violet-400 "
    >
      <div className="justify-center flex">
        <Footer.Copyright
          href="#"
          by="Yhonimard™"
          year={2022}
          className="text-gray-50"
        />
      </div>
      <Footer.LinkGroup className="justify-evenly box-border  mt-3 md:mt-0 text-gray-50">
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
};

export default Foot;
