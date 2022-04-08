import { Container, Row, Col } from "reactstrap";
import logo from "../logo.png";

function Logo() {
  return (
    <>
      <Container>
        <Row>
          <Col md="12" className="text-center">
            <img className="w-50" src={logo} alt="Logo" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Logo;
