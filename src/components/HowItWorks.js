import { Button, Col, Container, Row } from "react-bootstrap";
import useScreenSize from "../hooks/useScreenSize";
import components from "../media/components.png";
import raute from "../media/raute2.png";

const bgOverlayStyle = {
  backgroundImage: `url(${raute}), linear-gradient(180deg, #441953 0%, #ad33cc 100%)`,
  // position: "relative",
  backgroundSize: "cover",
  backgroundPosition: "center",
  opacity: 0.9, // Adjust the opacity as needed
  // no repeat
  backgroundRepeat: "no-repeat",
};

const HowItWorks = () => {
  const { xxs, xs, md, lg, responsive } = useScreenSize();

  const how = (c) => {
    switch (c) {
      case "a":
        return {
          c: "Ⓐ",
          t: "Instead of interacting with  the smart contract directly, users have to solve a captcha on the dApp before transacting.",
        };

      case "b":
        return {
          c: "Ⓑ",
          t: "The user has to sign a message which is then utilized to generate a unique captcha challenge.",
        };
      case "c":
        return {
          c: "Ⓒ",
          t: "After  the captcha is solved, the backend generates a proof which enable the user to execute smart contract function.",
        };
      case "d":
        return {
          c: "Ⓓ",
          t: "To proof authenticity, on-chain verification is used to confirm validity within the blockchain context.",
        };
      default:
        break;
    }
  };

  return (
    <Container
      className={`grad1 hero w-100 ${responsive(
        "pad-50",
        "pad-50",
        "pad-50",
        "pad-100",
      )}`}
      style={bgOverlayStyle}
    >
      <Col>
        <div className="mart-20 marb-20 marr-20">
          <h1>How it works</h1>
        </div>
        <Row className="content-center w-100">
          <h3 className="text-center chubby" style={{ opacity: "0.7" }}>
            {how("a").c}
          </h3>
          <Col className="w-100 content-center marb-30">
            <p
              className="text-center"
              style={{ maxWidth: xs || md ? "350px" : "450px" }}
            >
              {how("a").t}
            </p>
          </Col>
        </Row>
        <Row xs={1} md={3} lg={3}>
          <Col
            className="content-center marb-20"
            style={{ justifyContent: xxs || xs || md ? "center" : "flex-end" }}
          >
            <div>
              <h3 className="text-center chubby" style={{ opacity: "0.7" }}>
                {xs || xxs ? how("b").c : how("c").c}
              </h3>
              <p
                className=""
                style={{
                  maxWidth: "300px",
                  textAlign: xxs || xs || md ? "center" : "right",
                  marginBottom: xxs || xs || md ? "20px" : "",
                }}
              >
                {xxs || xs ? how("b").t : how("c").t}
              </p>
            </div>
          </Col>
          <Col className="content-center">
            <img
              src={components}
              alt="components"
              className=""
              style={{ width: "400px" }}
            />
          </Col>
          <Col
            className="content-center  marb-20"
            style={{
              justifyContent: xxs || xs || md ? "center" : "flex-start",
            }}
          >
            <div>
              <h3 className="chubby" style={{ opacity: "0.7" }}>
                {xxs || xs ? how("c").c : how("b").c}
              </h3>
              <p
                className=""
                style={{
                  maxWidth: "300px",
                  textAlign: xxs || xs || md ? "center" : "left",
                  marginTop: xxs || xs || md ? "20px" : "",
                }}
              >
                {xxs || xs ? how("c").t : how("b").t}
              </p>
            </div>
          </Col>
        </Row>
        <Row className="content-center w-100">
          <h3 className="text-center mart-30 chubby" style={{ opacity: "0.7" }}>
            {how("d").c}
          </h3>
          <Col className="content-center w-100">
            <p
              className="text-center"
              style={{ maxWidth: xxs || xs || md ? "350px" : "450px" }}
            >
              {how("d").t}
            </p>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default HowItWorks;
