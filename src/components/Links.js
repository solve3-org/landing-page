import { HashLink as Link } from "react-router-hash-link";
import twitter from "../media/twitter.png";
import useScreenSize from "../hooks/useScreenSize";

const Links = () => {
  const { xxs, xs, md, lg, responsive } = useScreenSize();

  return (
    <>
      <Link
        to="/#home"
        style={{ textDecoration: "none" }}
        scroll={(el) =>
          el.scrollIntoView({
            behavior: "auto",
            block: "center",
            inline: "center",
          })
        }
      >
        <span
          className={`link padt-5 padb-5 ${
            xxs || xs ? "padr-15 padl-15" : "padr-30 padl-30"
          }`}
        >
          Home
        </span>
      </Link>
      <Link style={{ textDecoration: "none" }}>
        <span
          className={`link padt-5 padb-5 ${
            xxs || xs ? "padr-15 padl-15" : "padr-30 padl-30"
          }`}
          onClick={() => {
            window.open("https://docs.solve3.org", "_blank");
          }}
        >
          Docs
        </span>
      </Link>
      <Link style={{ textDecoration: "none" }}>
        <span
          className={`link padt-5 padb-5 ${
            xxs || xs ? "padr-15 padl-15" : "padr-30 padl-30"
          }`}
          onClick={() => {
            window.open("https://demo.solve3.org", "_blank");
          }}
        >
          Demo
        </span>
      </Link>
      <Link style={{ textDecoration: "none" }}>
        <span
          className={`link padt-5 padb-5 ${
            xxs || xs ? "padl-15" : "padr-30 padl-30"
          }`}
          onClick={() => {
            window.open("https://twitter.com/Solve3_org", "_blank");
          }}
        >
          <img
            src={twitter}
            alt="twitter"
            className="twitter"
            style={{ maxWidth: "20px", opacity: "0.7" }}
          />
        </span>
      </Link>
    </>
  );
};

export default Links;
