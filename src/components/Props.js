import { Col, Container, Row } from "react-bootstrap";
import logo from "../media/logo-small-boxed.png";
import bgOverlay from "../media/circle-bg.png";
import useScreenSize from "../hooks/useScreenSize";

const Props = () => {
  const { xs, md, lg, responsive } = useScreenSize();

  const bgOverlayStyle = {
    backgroundImage: `url(${bgOverlay}), linear-gradient(180deg, #2a0936 0%, #441953 100%)`,
    // position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.9, // Adjust the opacity as needed
    // no repeat
    backgroundRepeat: "no-repeat",
  };

  const item = [
    {
      title: "Protect",
      text: "Securing Contracts from Bots",
      description:
        "We safeguard smart contracts against bots through a straightforward solution that users are already familiar with.",
    },
    {
      title: "Integrate",
      text: "Simple Integration",
      description:
        "Implementing our bot protection requires only a few lines of code, ensuring a seamless experience for developers.",
    },
    {
      title: "Advertise",
      text: "Unlocking Advertising Potential",
      description:
        "Businesses and individuals will be able to rent captcha images, similar to billboards, to promote their services.",
      soon: true,
    },
    {
      title: "Earn Revenue",
      text: "Sharing Revenue with Users",
      description:
        "A portion of the advertising revenue will be shared with users, making captchas a less bothersome experience.",
      soon: true,
    },
  ];

  const bigCircle = (data) => {
    return (
      <div className="big-circle">
        <div className="big-inner-circle">
          <div className=" pad-20">
            <div className="content-center">
              <p className="fat" style={{ fontSize: "2rem" }}>
                {data.title}
              </p>
            </div>
            <div className="content-center">
              <p style={{ maxWidth: "250px", textAlign: "center" }}>
                {data.description}
              </p>
            </div>
            {data.soon ? (
              <div className=" xsmalltext">coming soon..</div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    );
  };

  const smallCircle = () => {
    return (
      <div className="small-circle">
        <div className="small-inner-circle">
          {/* <div className=" pad-20">
            <h2>Test</h2>
            <p> bla</p>
          </div> */}
        </div>
      </div>
    );
  };

  return (
    <>
      <Container
        fluid
        className="hero w-100 bg-darkish pad-50"
        style={bgOverlayStyle}
      >
        <Row className="fullheight content-center w-100">
          <Row className="w-100 content-center mart-50">
            <Col className="content-center">
              {!xs && (
                <div className="pad-50 mart-100" style={{ opacity: "0.75" }}>
                  {smallCircle()}
                </div>
              )}
              {bigCircle(item[0])}
            </Col>
            {!xs && (
              <Col
                className="pad-0"
                style={{ maxWidth: "200px", opacity: "0.5" }}
              >
                {smallCircle()}
              </Col>
            )}
            <Col className={`${xs || md ? "marb-30 marr-100 mart-30" : ""}`}>
              {bigCircle(item[1])}
            </Col>
          </Row>
          <Row className="w-100 content-center">
            {!xs && (
              <Col
                className="content-center padr-50 padt-50 marr-50"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  opacity: "0.9",
                }}
              >
                {smallCircle()}
              </Col>
            )}
            <Col
              className="pad-0 marr-50"
              style={{ height: "200px", maxWidth: "200px" }}
            >
              <div className="outer-circle bg-darkish">
                <div className="inner-circle">
                  <div className="circle-image-wrapper pad-20">
                    <img src={logo} alt="logo" className="circle-image" />
                  </div>
                </div>
              </div>
            </Col>
            {!xs && (
              <Col
                className="content-center padr-50 padt-50"
                style={{ opacity: "0.75" }}
              >
                {smallCircle()}
              </Col>
            )}
          </Row>
          <Row className="w-100 content-center">
            <Col className="content-center pad-50">
              {/* <div className="w-100 content-center">{smallCircle()}</div> */}
              {bigCircle(item[2])}
              {/* <div className="">{smallCircle()}</div> */}
            </Col>
            {!xs && (
              <Col
                className="pad-0"
                style={{ maxWidth: "200px", opacity: "0.3" }}
              >
                {smallCircle()}
              </Col>
            )}
            <Col
              className={`content-center ${xs ? "mart-0" : "mart-80"} marr-50`}
            >
              {bigCircle(item[3])}
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default Props;
