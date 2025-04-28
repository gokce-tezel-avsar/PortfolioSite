import {
  Card,
  CardGroup,
  CardImg,
  CardLink,
  CardText,
  CardTitle,
  ListGroupItem,
  ListGroup,
  CardSubtitle,
  CardBody
} from "reactstrap";
import projects1 from "../assets/projects/projects1.png"
import projects2 from "../assets/projects/projects2.png"
import projects3 from "../assets/projects/projects3.png"



export default function Projects() {
  return (
  
<Card className="justify-center" style={{display:"flex", flexDirection:"column", border:"none",paddingLeft:"0"}}> 
  <CardGroup><CardTitle  tag="h1">Projects</CardTitle> 
  </CardGroup>
  <CardGroup>
    <Card style={{width:"30rem", border:"none", paddingLeft:"0"}} className="" >
   <CardGroup className="flex">
          <CardImg className="my-8"
          alt="Card cap"
          src={projects1}
         />
          <CardSubtitle
            tag="h2"
            className="text-2xl font-semibold"
            style={{ paddingBlock: "1rem", color: "#443cca"}}>
            Workintech
          </CardSubtitle>
        <CardBody style={{paddingInline:"0"}} className="flex flex-col justify-start ">
          <CardText className="text-sm text-gray-700 text-justify">
            A simple customizable, minimal setup cookie plugin that allows your
            users to select which cookies to accept or decline. This was created
            with vanilla JS, SCSS and Parcel Bundler and is available as a NPM
            package and the git repository makes any type of customization to code
            and themes possible.
          </CardText>
      
            <ListGroup
          className="flex flex-row gap-2"
          style={{ marginBlock: "1rem"}}
            >    
             <ListGroupItem className="text-sm"
              style={{
                border: "solid 1px",
                color: "#443cca",
                borderColor: "#443cca",
                borderRadius: "5px",
                padding: "0.5rem 1.5rem"
                }}> react
                </ListGroupItem>
                <ListGroupItem  className="text-sm"
              style={{
                border: "solid 1px",
                color: "#443cca",
                borderColor: "#443cca",
                borderRadius: "5px",
                padding: "0.5rem 1.5rem"
                }}>redux
                </ListGroupItem>
                <ListGroupItem  className="text-sm"
              style={{
                border: "solid 1px",
                color: "#443cca",
                borderColor: "#443cca",
                borderRadius: "5px",
                padding: "0.5rem 1.5rem"
                }}> axios
                </ListGroupItem>
                 </ListGroup>
                 </CardBody>

         <CardBody className="flex flex-row  " style={{paddingInline:"0" }}>
              <CardLink href="#" style={{ color: "#443cca"}}>
            Github
            </CardLink>

          <CardLink href="#" style={{ color: "#443cca"}}>
            View Site
          </CardLink>
          </CardBody>
              
      </CardGroup>
      </Card>
      <Card style={{width:"30rem", border:"none"}}  >
  <CardGroup className="flex ">
          <CardImg className="my-8"
          alt="Card cap"
       src={projects2}
         />
          <CardSubtitle
            tag="h2"
            className="text-2xl font-semibold"
            style={{ paddingBlock: "1rem", color: "#443cca"}}>
          Random Jokes
          </CardSubtitle>
        <CardBody style={{paddingInline:"0"}} className="flex flex-col justify-start ">
          <CardText className="text-sm text-gray-700 text-justify">
            A simple customizable, minimal setup cookie plugin that allows your
            users to select which cookies to accept or decline. This was created
            with vanilla JS, SCSS and Parcel Bundler and is available as a NPM
            package and the git repository makes any type of customization to code
            and themes possible.
          </CardText>
      
            <ListGroup
          className="flex flex-row gap-2"
          style={{ marginBlock: "1rem"}}
            >    
             <ListGroupItem className="text-sm"
              style={{
                border: "solid 1px",
                color: "#443cca",
                borderColor: "#443cca",
                borderRadius: "5px",
                padding: "0.5rem 1.5rem"
                }}> react
                </ListGroupItem>
                <ListGroupItem  className="text-sm"
              style={{
                border: "solid 1px",
                color: "#443cca",
                borderColor: "#443cca",
                borderRadius: "5px",
                padding: "0.5rem 1.5rem"
                }}>redux
                </ListGroupItem>
                <ListGroupItem  className="text-sm"
              style={{
                border: "solid 1px",
                color: "#443cca",
                borderColor: "#443cca",
                borderRadius: "5px",
                padding: "0.5rem 1.5rem"
                }}> axios
                </ListGroupItem>
                 </ListGroup>
                 </CardBody>

         <CardBody className="flex flex-row  " style={{paddingInline:"0" }}>
              <CardLink href="#" style={{ color: "#443cca"}}>
            Github
            </CardLink>

          <CardLink href="#" style={{ color: "#443cca"}}>
            View Site
          </CardLink>
          </CardBody>
              
      </CardGroup>
      </Card>
      <Card style={{width:"30rem", border:"none"}}  >
<CardGroup className="flex">
          <CardImg className="my-8"
          alt="Card cap"
         src={projects3}
         />
          <CardSubtitle
            tag="h2"
            className="text-2xl font-semibold"
            style={{ paddingBlock: "1rem", color: "#443cca"}}>
       Journey
          </CardSubtitle>
        <CardBody style={{paddingInline:"0"}} className="flex flex-col justify-start ">
          <CardText className="text-sm text-gray-700 text-justify">
            A simple customizable, minimal setup cookie plugin that allows your
            users to select which cookies to accept or decline. This was created
            with vanilla JS, SCSS and Parcel Bundler and is available as a NPM
            package and the git repository makes any type of customization to code
            and themes possible.
          </CardText>
      
            <ListGroup
          className="flex flex-row gap-2"
          style={{ marginBlock: "1rem"}}
            >    
             <ListGroupItem className="text-sm"
              style={{
                border: "solid 1px",
                color: "#443cca",
                borderColor: "#443cca",
                borderRadius: "5px",
                padding: "0.5rem 1.5rem"
                }}> react
                </ListGroupItem>
                <ListGroupItem  className="text-sm"
              style={{
                border: "solid 1px",
                color: "#443cca",
                borderColor: "#443cca",
                borderRadius: "5px",
                padding: "0.5rem 1.5rem"
                }}>redux
                </ListGroupItem>
                <ListGroupItem  className="text-sm"
              style={{
                border: "solid 1px",
                color: "#443cca",
                borderColor: "#443cca",
                borderRadius: "5px",
                padding: "0.5rem 1.5rem"
                }}> axios
                </ListGroupItem>
                 </ListGroup>
                 </CardBody>

         <CardBody className="flex flex-row  " style={{paddingInline:"0" }}>
              <CardLink href="#" style={{ color: "#443cca"}}>
            Github
            </CardLink>

          <CardLink href="#" style={{ color: "#443cca"}}>
            View Site
          </CardLink>
          </CardBody>    
      </CardGroup>
      </Card>
      </CardGroup>
      </Card>
  );
}
