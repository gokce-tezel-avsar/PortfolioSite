import {
    Card,
    CardText,
    CardTitle,
    CardSubtitle,
    CardGroup
  } from "reactstrap";
  
export default function Skills() {
    return (
<CardGroup id="skills"  className="justify-center" >
  <Card className="border-none pl-[0]">
    <CardTitle tag="h1"  >
    Skills
    </CardTitle>
    <Card className="flex flex-row border-none gap-4 pl-[0]">
    <CardGroup style={{width:"30rem"}} >
    <CardSubtitle style={{ paddingBlock: "1rem", color: "#443cca"}}
      tag="h2"
    >Java Script
    </CardSubtitle>
    <CardText>Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit animid est laborum. </CardText>
    </CardGroup >
    <CardGroup style={{width:"30rem"}}>
    <CardSubtitle
     
      tag="h2" style={{ paddingBlock: "1rem", color: "#443cca"}}
    >
     React.Js
    </CardSubtitle>
    <CardText>Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit animid est laborum.</CardText>
    </CardGroup>
    <CardGroup style={{width:"30rem"}}>
    <CardSubtitle
     
      tag="h2" style={{ paddingBlock: "1rem", color: "#443cca"}}
    >
    Node.Js
    </CardSubtitle>
    <CardText>Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit animid est laborum.</CardText>
    </CardGroup>
    </Card>
  </Card>
</CardGroup>

    )
}


