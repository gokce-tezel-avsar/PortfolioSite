import {Card, CardGroup, CardLink, CardText, CardTitle, ListGroup, ListGroupItem} from "reactstrap"
export default function Projects(){
    return(

<Card id="projects"
  style={{margin:"0",
    width: '22rem',
    border:"none",display:"flex", flexDirection:"column", alignItems:"flex-start"
  }}
>
<CardTitle tag="h1">
     Projects
    </CardTitle>
    <CardGroup style={{margin:"2rem 0"}}>
  <img
    alt="Card cap"
    src="https://picsum.photos/318/180"
    width="100%"
  />
  <CardGroup>
    
   <CardTitle tag="h2" style={{paddingBlock:"1rem", color:"#443cca"}} >
      Workintech
    </CardTitle>
    <CardText style={{textAlign:"start"}}>
      A simple customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.
    </CardText>
    </CardGroup>
    <ListGroup style={{display:"flex", flexDirection:"row", justifyContent:"space-between", marginBlock:"1rem"}}>
    <ListGroupItem style={{border: "solid 1px gray", color:"#443cca", borderColor:"#443cca", borderRadius:"0.5rem", padding:"0.5rem 1.5rem"}}>
   react
    </ListGroupItem>
    <ListGroupItem style={{border: "solid 1px gray",color:"#443cca",borderColor:"#443cca", borderRadius:"0.5rem", padding:"0.5rem 1.5rem"}}>
      redux
    </ListGroupItem>
    <ListGroupItem style={{border: "solid 1px gray",color:"#443cca", borderColor:"#443cca", borderRadius:"0.5rem", padding:"0.5rem 1.5rem"}}>
     axios
    </ListGroupItem>
  </ListGroup>
  <CardGroup style={{display:"flex", flexDirection:"row",justifyContent:"space-between"}}>
    <CardLink href="#" style={{ color:"#443cca"}}>
    Github
    </CardLink>
    <CardLink href="#" style={{ color:"#443cca"}}>
     View Site
    </CardLink>
    </CardGroup>
   </CardGroup>
    </Card>
  

    )}