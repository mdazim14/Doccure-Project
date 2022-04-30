import React from "react";
import styled from "styled-components";
import { Row, Col, Image } from "react-bootstrap";
import LoginForm from "./LoginForm";
export const Login = () => {
  return (
    <Wrapper className="my-3">
      <Row>
        <Col md={6} className="">
          <Image src="/images/loginBg.png" width={600} />
        </Col>
        <Col>
          <LoginForm />
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
