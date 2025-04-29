import { NavLink, Nav } from "reactstrap"
import HireMe from "../components/Buttons/HireMe"



export default function Header () {
  
    return (
        <>
        <Nav style={{display:"flex", flexDirection:"row", marginInline: "6rem", paddingBlock:"3rem", gap:"2rem", justifyContent:"flex-end"}}>
         <NavLink href="#skills">Skills</NavLink>
         <NavLink href="#projects">Projects</NavLink>
         <HireMe/>
         </Nav>
        
        </>
    )
}