import { Button, Col, Container, Row } from "react-bootstrap";
import useScreenSize from "../hooks/useScreenSize";
import components from "../media/components.png";

const bgOverlayStyle = {
  // backgroundImage: `url(${raute}), linear-gradient(180deg, #441953 0%, #ad33cc 100%)`,
  // position: "relative",
  backgroundSize: "cover",
  backgroundPosition: "center",
  opacity: 0.9, // Adjust the opacity as needed
  // no repeat
  backgroundRepeat: "no-repeat",
};

const ValueProps = () => {
  const { xs, md, lg, responsive } = useScreenSize();

  const valuePropItems = [
    {
      colorcode: "greenish",
      title: "Protect",
      text: "Securing Contracts from Bots",
      description:
        "We safeguard smart contracts against bots through a straightforward solution that users are already familiar with.",
    },
    {
      colorcode: "pinkish",
      title: "Promote",
      text: "Unlocking Advertising Potential",
      description:
        "Businesses and individuals will be able to rent captcha images, similar to billboards across town, to promote their services.",
    },
    {
      colorcode: "blueish",
      title: "Earn",
      text: "Sharing Revenue with Users",
      description:
        "A portion of the advertising revenue will be shared with users, making captchas a less bothersome experience.",
    },
    {
      colorcode: "orangish",
      title: "Ease of Use",
      text: "Simple Integration",
      description:
        "Implementing our bot protection requires only a few lines of code, ensuring a seamless experience for developers.",
    },
  ];
  return (
    <Container
      className={`bg-darkish hero w-100 ${responsive(
        "pad-50",
        "pad-50",
        "pad-100",
      )}`}
      style={bgOverlayStyle}
    >
      <Col>
        <Row>
          <h1 className="marb-50">Value Propositions</h1>
        </Row>
        <Row
          className="content-center w-100 mart-50"
          xs={4}
          style={{ gap: "50px" }}
        >
          {valuePropItems.map((item, index) => (
            <Row
              key={index}
              className="content-center"
              xs={1}
              style={{ maxWidth: "400px" }}
            >
              <div
                className={`transparent-box ${item.colorcode}`}
                style={{ minHeight: "300px" }}
              >
                <div className="thin pad-15">
                  <h2>{item.title}</h2>
                </div>

                <div className="flex-centered mart-8">
                  <div className="white-line-short"></div>
                </div>

                <div className="mart-30 content-center fat">
                  <p>{item.text}</p>
                </div>

                <div className="flex-centered mart-8">
                  <div className="white-line-short"></div>
                </div>

                <div className="content-center mart-30">
                  <div className="" style={{ maxWidth: "80%" }}>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </Row>
          ))}
        </Row>
      </Col>
    </Container>
  );
};

export default ValueProps;
