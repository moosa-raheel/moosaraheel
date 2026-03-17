const Header = ({ children }) => {
  return (
    <>
      <header className="w-full h-screen  bg-black flex">
        <div className="left lg:w-1/2 w-full h-full flex items-center lg:pl-15 pl-10 absolute lg:static z-3 ">
          {children}
        </div>
        <div className="right lg:w-1/2 h-full lg:relative absolute top-0 left-0 w-full "></div>
      </header>
    </>
  );
};

export default Header;
