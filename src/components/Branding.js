import logo from "../media/logo-small.png";

const Branding = () => {
  return (
    <>
      <img className="padl-30 logo" src={logo} height="30px" alt="logo" />
      <div className="mart-2">
        <span className="marl-10">SOLVE</span>
        <span className="text-white marl-2 fat">3</span>
        <span className="xsmalltext monofont fat"> Beta</span>
      </div>
    </>
  );
};

export default Branding;
