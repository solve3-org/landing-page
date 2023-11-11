import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import useScreenSize from "../hooks/useScreenSize";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useState } from "react";
import bgOverlay from "../media/hero-bg.png";

const bgOverlayStyle = {
  //   backgroundImage: `linear-gradient(180deg, #ad33cc 0%, #ad33cc 100%)`,
  //   // position: "relative",
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   // opacity: 0.9, // Adjust the opacity as needed
  //   // no repeat
  //   backgroundRepeat: "no-repeat",
  //   color: "#ffffffbb",
};

const Contact = (props) => {
  const { xxs, xs, md, lg, responsive } = useScreenSize();

  const [state, handleSubmit] = useForm("mvojywya");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setSuccess(true);
    }
  }, [state.succeeded]);

  return (
    <>
      <Modal
        size={lg ? "lg" : "md"}
        show={props.open}
        onHide={() => props.setOpen(false)}
        style={{ zIndex: "10000" }}
      >
        <Modal.Body>
          <Row className="content-center w-100 pad-30">
            <div className="mart-20 content-center">
              <h1>Get in touch</h1>
            </div>
            <Row className="content-center w-100">
              <p
                className="text-center"
                style={{ maxWidth: xxs || xs ? "350px" : "650px" }}
              >
                Feel free to reach out with any questions or inquiries.{" "}
              </p>
            </Row>
            {success && (
              <Row className="content-center w-100 mart-60">
                Thank you for contacting us.
              </Row>
            )}
            {!success && (
              <Row
                className="content-center mart-20"
                style={{ width: "540px", maxWidth: "80vw" }}
              >
                <form onSubmit={handleSubmit}>
                  <Row className="content-center">
                    <label
                      className="fat mart-20 content-center"
                      htmlFor="email"
                    >
                      Your Name
                    </label>
                    <input
                      className="rounded mart-5"
                      style={{ width: "80%" }}
                      id="name"
                      type="string"
                      name="name"
                    />
                    <ValidationError
                      prefix="Name"
                      field="string"
                      errors={state.errors}
                    />
                  </Row>
                  <Row className="content-center">
                    <label
                      className="fat mart-20 content-center"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <input
                      className="rounded mart-5"
                      style={{ width: "80%" }}
                      id="email"
                      type="email"
                      name="email"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </Row>
                  <Row className="content-center pad-0">
                    <label
                      className="fat mart-20 content-center"
                      htmlFor="email"
                    >
                      Message
                    </label>
                    <textarea
                      className="rounded mart-5 content-center"
                      id="message"
                      name="message"
                      style={{ height: "200px" }}
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </Row>
                  <Row className="content-center between">
                    <Button
                      variant="primary"
                      className="mart-20 padl-40 padr-40 padt-10 padb-10"
                      type="submit"
                      disabled={state.submitting}
                      style={{ width: "150px" }}
                    >
                      Submit
                    </Button>
                    <Button
                      className="mart-20 padl-40 padr-40 padt-10 padb-10"
                      variant="secondary"
                      onClick={() => props.setOpen(false)}
                      style={{ width: "150px" }}
                    >
                      Close
                    </Button>
                  </Row>
                </form>
              </Row>
            )}
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Contact;
