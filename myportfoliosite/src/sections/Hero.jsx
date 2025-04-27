import { Button, Card, CardGroup, CardImg, CardText, CardTitle } from "reactstrap";
import HireMe from "../components/Buttons/HireMe";
import LinkedIn from "../components/buttons/LinkedIn";
import Github from "../components/buttons/Github";
import hero from "../assets/hero.png"

export default function Hero (){
    return(
        <>
        <Card style={{display:"flex", flexDirection:"row", justifyContent:"space-between", border:"none"}}>
            <CardGroup style={{display:"flex", flexDirection:"column",textAlign:"left", justifyContent:"space-evenly"}} >
                <CardGroup style={{display:"flex", flexDirection:"column", margin:"0"}}>
           <CardTitle tag="h1">Creative thinker</CardTitle>
           <CardTitle tag="h1">Minimalism lover</CardTitle>
           </CardGroup>
           <CardText>Hi, I'm Gökçe. I'am a full-stack developer. If you are looking fro a Developer who to craft solid and scalable frontend products with great use ecperiences. Let's shake hands with me.</CardText>

           <CardGroup style={{gap:"1rem"}}>
           <HireMe/>
           <Github/>
           <LinkedIn/>
           </CardGroup>
           </CardGroup>
           <CardImg style={{width:"30em"}} src={hero}  />
            </Card>
        
          </>
    )
}