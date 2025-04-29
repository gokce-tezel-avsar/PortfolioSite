import {
    CardTitle,
    CardFooter,
    CardLink,
    Card,
    CardGroup
  } from "reactstrap";
export default function Footer (){ 

    return (
<CardFooter className="bg-[black] py-6 flex flex-column">
<CardGroup style={{margin:"6rem"}} >
<CardTitle tag="h1">Let's work together on your next products.</CardTitle>
</CardGroup>
<CardGroup className="flex flex-row ">
<CardLink href="mailto:gokcetezelavsar@gmail.com">gokcetezelavsar@gmail.com</CardLink>
    <CardLink  href="URL">Personal Blog</CardLink>
    <CardLink href="URL" >Github</CardLink>
    <CardLink href="URL">LinkedIn</CardLink>
  
    </CardGroup>
 </CardFooter>

)}

/* background-color:#BAB2E7  : #141414* */