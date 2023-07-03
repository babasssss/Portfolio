import React from "react";
import { Container, Row, Col } from "react-bootstrap";




function Experience() {

  const Detail = ({position,company,companyLink,time,address,work})=>{
    return <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"> 
      <div>
        <h3 className="capitalize font-bold text-2xl">{position}&nbsp;
          <a href={companyLink}
          target="_blank"
          className="text-primary capitalize">@{company}</a>
        </h3>
        <span className="capitalize font-medium text-dark/75">{time}|{address}</span>
      </div>
      <p className="font-medium w-full">{work}</p>
    </li>
  }

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
        <div className="my-64">
          <h2 className="font-bold text-8xl mb-32 w-full text-center">
            Mon expérience
          </h2>
          <div className="w-[75%] mx-auto relative">
            <ul>
              <Detail
              position="Software Engineer" company="Google"
              companyLink="www.google.com"
              time="2022-Present" address="Mountain View, CA"
              work="Le lorem ipsum (également appelé faux-texte, lipsum, ou bolo bolo ) est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire"/>
            </ul>

          </div>
        </div>
        </Container>
      </Container>

    </section>
  );
}

export default Experience;
