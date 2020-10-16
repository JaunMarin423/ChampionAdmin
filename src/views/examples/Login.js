import React from "react";

// reactstrap components
import { Button, Card, CardHeader, CardBody, FormGroup, Form, Input, InputGroupAddon, InputGroupText, InputGroup, Container, Row, Col } from "reactstrap";
import { BrowserRouter, Route, Redirect, NavigationContainer } from "react-router-dom";
// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
// import SimpleFooter from "components/Footers/SimpleFooter.js";
class Login extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        email: "",
        password: "",
      };
};

  valueToState = ({ name, value, checked, type }) => {
    this.setState(() => {
      return { [name]: type === "checkbox" ? checked : value };
    });
  };

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  login() {
    // let token = ''
      fetch('http://localhost:5000/v1/login/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state),
      })
      .then((response) => sessionStorage.setItem('myToken', response.headers.get('Authorization')))
      .then((response) => (response === true) )
      .then(() => window.location.href = "/user-page")
      .catch((error) => {
        console.error(error);
      })
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="pt-lg-7">
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-5">
                      <div className="text-muted text-center mb-3">
                        <small>Sign in with</small>
                      </div>
                      <div className="btn-wrapper text-center">
                      </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                      <div className="text-center text-muted mb-4">
                        <small>Inicio de seción</small>
                      </div>
                      <Form role="form">
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input name="email"
                              type="email"
                              placeholder="ejemplo@gmail.com"
                              onChange={event => this.valueToState(event.target)}/>
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              name="password"
                              placeholder="Password"
                              type="password"
                              autoComplete="off"
                              onChange={event => this.valueToState(event.target)}
                            />
                          </InputGroup>
                          {/* <pre>{JSON.stringify(this.state)}</pre> */}
                        </FormGroup>
                        <div className="custom-control custom-control-alternative custom-checkbox">
                          <input
                            className="custom-control-input"
                            id=" customCheckLogin"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor=" customCheckLogin"
                          >
                            <span>Remember me</span>
                          </label>
                        </div>
                        <div className="text-center">
                          <Button
                            className="my-4"
                            color="primary"
                            type="button"
                            onClick={() => this.login()}
                          >
                            Sign in
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                  <Row className="mt-3">
                    <Col xs="6">
                      <a
                        className="text-light"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <small>Forgot password?</small>
                      </a>
                    </Col>
                    <Col className="text-right" xs="6">
                      <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                          href = "/register-page"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-code" />
                          </span>
                          <span className="btn-inner--text">Registro</span>
                        </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        {/* <SimpleFooter /> */}
      </>
    );
  }
}


export default Login;
