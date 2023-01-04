const Footer = () => {
  return (
    <div>
      <h2 className=" footer bg-violet-700 text-violet-100 py-10 font-medium flex justify-center items-center">
        <p>&copy; {new Date().getFullYear()} Tech Alpha. All rights reserved</p>
      </h2>
    </div>
  );
};

export default Footer;
