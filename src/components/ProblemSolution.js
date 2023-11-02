import { Button, Col, Container, Row } from "react-bootstrap";
import bot from "../media/bot.png";
import useScreenSize from "../hooks/useScreenSize";

const ProblemSolution = () => {
  const { xxs, xs, md, lg, responsive } = useScreenSize();

  function column(heading, description, button) {
    return (
      <Col
        id="problem"
        className="content-center"
        style={{ maxWidth: "600px" }}
      >
        <div
          className={`transparent-box ${
            heading.toLowerCase() == "problem" ? "redish" : ""
          }
        ${xxs || xs || md ? "pad-5 mart-30" : ""}
        `}
        >
          <h2>
            <div className="thin pad-15 marl-20">{heading} </div>
          </h2>
          <div className="flex-centered mart-8 marl-20">
            <div className="white-line"></div>
          </div>
          <ul className="mart-30">
            {description.map((d, index) => (
              <>
                <div
                  key={Math.floor(Math.random() * 10000) + 1}
                  className="mart-30 marr-15"
                >
                  <div className="content-center">
                    <h4>{d.short}</h4>
                  </div>
                  <p style={{ opacity: "0.6" }}>{d.description}</p>
                </div>
                {index !== description.length - 1 && (
                  <div className="flex-centered mart-8">
                    <div className="white-line-short"></div>
                  </div>
                )}
              </>
            ))}
          </ul>
          {/* <div className="flex-centered mart-8 marl-20">
            <div className="white-line"></div>
          </div>
          <Button
            variant="outline-light"
            className="mart-30 fat padl-20 padr-20 marl-20"
            style={{ width: "150px" }}
          >
            {button.title}
          </Button> */}
        </div>
      </Col>
    );
  }

  return (
    <Container
      className={`hero pad-10 bi-colored w-100 ${responsive(
        "pad-20",
        "pad-20",
        "pad-30",
        "pad-50",
      )}`}
    >
      <Row xs={1} md={1} lg={1} xl={3} className="content-center">
        {(xxs || xs || md) && (
          <Col className="content-center">
            <img
              style={{ opacity: "0.6", maxWidth: xs ? "200px" : "250px" }}
              src={bot}
              alt="bot"
              className="mart-30"
            />
          </Col>
        )}

        {column(
          "Problem",
          [
            {
              short: "Issue",
              description:
                "The widespread presence of bots across various web3 activities, including games, NFT sales, and ticket sales, is generating significant problems.",
            },
            {
              short: "Challenge",
              description:
                "The utilization of bots grants certain individuals advantages, creating a situation where those who engage fairly are placed at a distinct disadvantage.",
            },
            {
              short: "Imapct",
              description:
                "The consequences of these bot-driven activities are felt acutely by honest users who face monetary losses and missed opportunities.",
            },
          ],
          {
            title: "Learn more",
            url: "https://google.de",
          },
        )}
        {!xxs && !xs && !md && (
          <Col className="content-center">
            <img
              style={{ opacity: "0.6", maxWidth: "250px" }}
              src={bot}
              alt="bot"
              className="mart-30"
            />
          </Col>
        )}
        {column(
          "Solution",
          [
            {
              short: "Approach",
              description:
                "Users solve front-end captchas, generating backend proofs for smart contract execution through signed messages and on-chain verification.",
            },
            {
              short: "Validation",
              description:
                "Captchas have consistently demonstrated their effectiveness by successfully blocking automated bot interference in various web2 activities.",
            },
            {
              short: "Benefits",
              description:
                "Implementing captchas ensures improved security, fair participation, and reduced disruptions by effectively countering bot interference.",
            },
          ],
          {
            title: "Demo",
            url: "https://google.de",
          },
        )}
      </Row>
    </Container>
  );
};

export default ProblemSolution;
