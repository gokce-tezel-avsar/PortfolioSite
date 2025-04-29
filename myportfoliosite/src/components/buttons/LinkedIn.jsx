import { Button } from "reactstrap";
import { FaLinkedinIn } from "react-icons/fa";


export default function LinkedIn() {
  return (
    <Button  
    style={{ color: "#433cca", backgroundColor:"white", borderColor: "#433cca" }}
      tag="a" 
      href="https://www.linkedin.com/in/g%C3%B6k%C3%A7e-tezel-av%C5%9Far-25756234a/" 
      target="_blank" 
      rel="noopener noreferrer">
      <FaLinkedinIn /> LinkedIn
    </Button>
  );
}
