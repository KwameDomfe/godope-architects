// import logo from "../../images/_partials/logos/kda_design_technologies_logo.jpg";

const Logo = (props) => {
  // Props
  const { toggleMenu } = props;

  // Return
  return (
    <figure
      id="m__logo"
      className="flex items-center justify-center ttu"
      title="Godope Architects Logo"
      onClick={toggleMenu}
    >
      {/* <img
        src={logo}
        alt="KDA Design Technologies Company Logo"
        className="w3-00 h3-00 br5-00"
      /> */}

      <figcaption className="h-100 f1-25 tc black-60">
        <span className="mv0-00 mr0-50 b">godope</span>
        <span className="mv0-00 ">architects</span>
      </figcaption>
    </figure>
  );
};

export default Logo;
