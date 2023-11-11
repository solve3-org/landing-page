import { Button, Col, Container, Row } from "react-bootstrap";
import heroMedia from "../media/logo-big.png";
import bgOverlay from "../media/hero-bg.png";
import useScreenSize from "../hooks/useScreenSize";

const bgOverlayStyle = {
  backgroundImage: `url(${bgOverlay}), linear-gradient(180deg, #441953 0%, #ad33cc 100%)`,
  // position: "relative",
  // backgroundSize: "cover",
  backgroundPosition: "bottom right",
  // no repeat
  backgroundRepeat: "no-repeat",
};

const WelcomeHero2 = () => {
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
        <Col
          className=""
          style={{
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          {
            <Col className="content-center">
              {/* IMAGE */}
              <img
                src={heroMedia}
                alt="hero"
                className="mart-30"
                style={{ width: "150px" }}
              />
            </Col>
          }
          <Col className="content-center">
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
          </Col>
          <Col className="content-center">
            <h2 className="mart-30 text-left">
              <span
                className="text-white w-100"
                style={{
                  fontSize: xxs || xs ? "1.3rem" : "",
                }}
              >
                A Smart Contract Bot Protection
              </span>
            </h2>
          </Col>
          <Col className="content-center">
            <div className={"between content-center fat"}>
              <span>solve3.org</span>
              <span> - </span>
              <span>demo.solve3.org</span>
              <span> - </span>
              <span>docs.solve3.org</span>
            </div>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default WelcomeHero2;
