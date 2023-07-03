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
import { differenceInYears } from 'date-fns';
import { CgCPlusPlus } from "react-icons/cg";


function Home2() {
  const dateDeNaissance = new Date(2002, 5, 12); // Le mois est indexé à partir de 0, donc 5 correspond à juin
  const age = differenceInYears(new Date(), dateDeNaissance);

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              QUELQUES <span className="purple"> INFORMATIONS </span> 
            </h1>
            <p className="home-about-body">
              J'ai <i><b className="purple"> { age } ans </b></i> et j'habite dans le Maine-et-Loire. 
              Je suis étudiant en informatique avec pour objectif d'explorer le dévelopement Web | Applicatif. 
              <br />
              <br />
              Je suis actuellement 3ème années <i><b className="purple">Bachelor Développeur Web </b></i> et je souhaite obtenir mon master FullStack.
            </p>
          </Col>
          <Col md={4}  className="myAvtar ">
            <Col xs={8} className="tech-icons">
              <Tilt>
                <img src="/images/soreau-bastien.jpg" className="img-fluid" alt="SOREAU Bastien Portfolio" />
              </Tilt>
            </Col>
          </Col>

        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/babasssss"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/bastien-soreau/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/bastiensoreau/"
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
