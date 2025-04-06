import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Quem é a <span className="purple"> JB Solutions </span> ?
            </h1>
            <p className="home-about-body">
              A JB Solutions é uma empresa de consultoria de dados e
              desenvolvimento de software. Nós ajudamos empresas a
              transformar seus dados em insights valiosos, e a desenvolver
              soluções de software personalizadas para atender às suas
              necessidades específicas.
              <br />
              <br /> Trabalhamos com uma variedade de tecnologias e ferramentas como
              <i>
                <b className="purple"> Power BI e Python. </b>
              </i>
              <br />
              <br />
              Trabalhamos em áreas de pesquisa como &nbsp;
              <i>
                <b className="purple">Visualização de Dados </b> e
                inteligência artificial {" "}
                <b className="purple">
                  !
                </b>
              </i>
              <br />
              <br />
              Nossos serviços incluem:
              <i>
                <b className="purple"> Análise de Dados, Desenvolvimento de Software, </b>
                e
                <b className="purple"> Consultoria em TI.</b>
              </i>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Nos Contate!</h1>
            <p>
              Nossas Redes
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
