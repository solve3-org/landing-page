import { Col, Container, Row } from "react-bootstrap";
import Branding from "./Branding";
import Links from "./Links";
import useScreenSize from "../hooks/useScreenSize";

const Footer = () => {
    const { xs, md, lg, responsive } = useScreenSize();

  return (
    <Container className="fullwidth footer bg-darkish">
      {!xs && (
        <Row className="w-100">
          <Col className="brandname">
            <Branding />
          </Col>
          <Col className="menu marr-30">
            <Links />
          </Col>
        </Row>
      )}
      {xs && (
        <>
          <Col>
            <Row className="w-100 content-center">
              <Col className="brandname w-100 content-center">
                <Branding />
              </Col>
            </Row>
            <Row className="w-100 content-center mart-20">
              <Col className="menu w-100 content-center">
                <Links />
              </Col>
            </Row>
          </Col>
        </>
      )}
    </Container>
  );
};

export default Footer;
