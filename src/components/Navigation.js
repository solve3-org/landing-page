import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Branding from "./Branding";
import Links from "./Links";
import useScreenSize from "../hooks/useScreenSize";

function Navigation() {
  const { xxs, xs, md, lg, responsive } = useScreenSize();

  return (
    <>
      <Container className="navigation bg-purple fullwidth padt-10 ">
        {(md || lg) && (
          <Row className="w-100 padr-30 padl-30">
            <Col className="brandname h-100 padl-30 marl-0">
              <Branding />
            </Col>
            <Col className="menu marr-0 mart-3">
              <Links />
            </Col>
          </Row>
        )}
        {(xxs || xs) && (
          <>
            <Row className="w-100 content-center">
              <Col className="content-center brandname h-100 marl-0 marr-10">
                <Branding />
              </Col>
            </Row>

            <Row className="w-100 mart-10">
              <Col className="content-center menu marr-0 mart-3">
                <Links />
              </Col>
            </Row>
          </>
        )}
        <div className="flex-centered mart-8 marr-8">
          <div className="white-line"></div>
        </div>
      </Container>
    </>
  );
}

export default Navigation;
