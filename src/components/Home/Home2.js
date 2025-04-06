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
              Quem é a <span className="purple"> Quasili </span> ?
            </h1>
            <p className="home-about-body">
              A <b className="purple">Quasili</b> é uma empresa de <b className="purple">tecnologia</b> e <b className="purple">inovação</b> focada em transformar <b className="purple">dados</b>, <b className="purple">matemática</b> e <b className="purple">inteligência artificial</b> em <b className="purple">soluções práticas</b> e <b className="purple">impactantes</b>.
              <br />
              <br />
              Ajudamos empresas a <b className="purple">extrair valor real</b> de seus <b className="purple">dados</b>, <b className="purple">automatizar processos</b> e criar <b className="purple">produtos digitais inteligentes</b>, usando abordagens baseadas em <b className="purple">estatística</b>, <b className="purple">machine learning</b> e <b className="purple">visualização de dados</b>.
              <br />
              <br />
              Trabalhamos com uma ampla variedade de ferramentas e linguagens como <b className="purple">Power BI</b>, <b className="purple">Python</b>, <b className="purple">Streamlit</b>, <b className="purple">React</b> e <b className="purple">algoritmos de IA</b>, com uma forte base matemática que nos permite explorar conceitos avançados como <b className="purple">modelos preditivos</b>, <b className="purple">automação de dados</b> e <b className="purple">agentes inteligentes</b>.
              <br />
              <br />
              Também atuamos em áreas de <b className="purple">pesquisa aplicada</b>, como <b className="purple">visualização de dados interativos</b>, <b className="purple">aprendizado de máquina</b> e <b className="purple">agentes autônomos</b>, conectando inovação com resultados mensuráveis.
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
