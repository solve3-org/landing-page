import { Button, Col, Container, Row } from "react-bootstrap";
import heroMedia from "../media/hero-media.png";
import bgOverlay from "../media/hero-bg.png";
import useScreenSize from "../hooks/useScreenSize";
import { HashLink as Link } from "react-router-hash-link";

const bgOverlayStyle = {
  backgroundImage: `url(${bgOverlay}), linear-gradient(180deg, #441953 0%, #ad33cc 100%)`,
  // position: "relative",
  // backgroundSize: "cover",
  backgroundPosition: "bottom right",
  opacity: 0.9, // Adjust the opacity as needed
  // no repeat
  backgroundRepeat: "no-repeat",
};

const WelcomeHero = () => {
  const { xxs, xs, md, lg, responsive } = useScreenSize();

  return (
    <Container
      id="home"
      className={`grad1 hero w-100 ${responsive(
        "pad-20",
        "pad-20",
        "pad-80",
        "pad-100",
      )} ${xxs || xs ? "mart-100" : ""}`}
      style={bgOverlayStyle}
    >
      {/* <div className="bg-overlay" style={bgOverlayStyle}></div> */}

      {/* Heading */}

      <Row className="content-center">
        <Col className="">
          <h1
            className={`${
              xxs || xs || md ? "content-center" : "text-left marb-0"
            }`}
            style={{ fontSize: xxs || xs ? "2rem" : "" }}
          >
            <span className="text-white marl-2 fat">Hi, this is</span>
            <span className="thin">&nbsp;SOLVE</span>
            <span className="text-white marl-5">3</span>
          </h1>
          {!lg && (
            <Col className="content-center">
              {/* IMAGE */}
              <img
                src={heroMedia}
                alt="hero"
                className="hero-img mart-30"
                style={{ maxWidth: "50%" }}
              />
            </Col>
          )}
          {/* TEXT */}
          <h2 className="mart-30 text-left">
            <span
              className="text-white"
              style={{ fontSize: xxs || xs ? "1.3rem" : "" }}
            >
              A Smart Contract Bot Protection
            </span>
          </h2>
          {/* Description */}
          <p>
            .. by using captchas. Solving captchas has become an intuitive part
            of the web2 ecosystem, that is very effective in the fight against
            bots. Currently in the beta phase, Solve3 remodels this native web2
            tool into one that can easily and elegantly be utilized in web3
            space.
          </p>
          {/* <p>
          My goal is to enhance security and fairness in web3 projects.
          Currently in the beta phase, Solve3 is developing a bot protection
          service for smart contracts. Join us on this journey of building
          something cool and contributing to a fair web3 environment.
        </p> */}
          <p>Your feedback in this phase is invaluable to us.</p>

          {/* BUTTON */}

          <div
            className={`${
              xxs || xs ? "between content-center" : "between marl-5"
            }`}
          >
            <Link
              scroll={(el) =>
                el.scrollIntoView({
                  behavior: "auto",
                  block: "center",
                  inline: "center",
                })
              }
              to="/#problem"
            >
              <Button
                variant="outline-light"
                className="mart-30 fat padl-20 padr-20"
              >
                Learn more
              </Button>
            </Link>
            <Button
              onClick={() => {
                window.open("https://demo.solve3.org", "_blank");
              }}
              variant="light"
              className="mart-30 fat  padl-20 padr-20"
            >
              Try the Demo
            </Button>
            {/* <Button
              onClick={() => {
                window.open("https://docs.solve3.org", "_blank");
              }}
              variant="outline-light"
              className="mart-30 fat  padl-20 padr-20"
            >
              Read the docs
            </Button> */}
          </div>
        </Col>
        {lg && (
          <Col className="content-center">
            {/* IMAGE */}
            <img src={heroMedia} alt="hero" className="hero-img mart-30" />
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default WelcomeHero;
