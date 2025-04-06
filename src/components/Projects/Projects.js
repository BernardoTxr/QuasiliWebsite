import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Áreas de Atuação </strong>
        </h1>
        <p style={{ color: "white" }}>
          Projetos realizados pela Quasili.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Análise de Dados"
              description="Projetos focados em análise de dados para identificar padrões, tendências e insights que auxiliam na tomada de decisões estratégicas."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Visualização de Dados"
              description="Criação de dashboards e gráficos interativos utilizando ferramentas como Power BI, Streamlit e bibliotecas de visualização em Python."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Agentes de IA"
              description="Desenvolvimento de agentes inteligentes utilizando técnicas de Machine Learning e Deep Learning para resolver problemas complexos."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Automação de Dados"
              description="Automatização de processos de coleta, limpeza e análise de dados para aumentar a eficiência e reduzir erros manuais."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Web Scraping"
              description="Extração de dados da web de forma automatizada utilizando bibliotecas como BeautifulSoup e Selenium para diversas aplicações."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Sites para Portfólio em React"
              description="Desenvolvimento de sites modernos e responsivos para portfólios utilizando React.js, com foco em design e funcionalidade."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
          </Row>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
