import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";
import HireMe from "../components/Buttons/HireMe";
import LinkedIn from "../components/buttons/LinkedIn";
import Github from "../components/buttons/Github";
import hero from "../assets/hero.png";

export default function Hero() {
  return (
    <Card id="hero" style={{ display:"flex", flexDirection:"row", marginInline:"6rem", paddingLeft:"0"}}>
          <CardBody className="">
            <CardTitle tag="h1" className="fw-bold display-5">
              Creative thinker
            </CardTitle>
            <CardTitle tag="h1" className="fw-bold display-5">
              Minimalism lover
            </CardTitle>
            <CardText className="text-muted">
              Hi, I'm Gökçe. I'm a full-stack developer. If you are looking for a
              developer who can craft solid and scalable frontend products with great
              user experiences, let's shake hands with me.
            </CardText>
            <div className="d-flex gap-3 mt-4">
              <HireMe />
              <Github />
              <LinkedIn />
            </div>
</CardBody>

<CardBody className="w-[50em]">

            <CardImg
            src={hero}
            alt="Hero"
            className="img-fluid"
           
          />
          </CardBody>
    </Card>
  );
}
