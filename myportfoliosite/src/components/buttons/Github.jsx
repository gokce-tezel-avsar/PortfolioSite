import { Button } from "reactstrap";
import { FaGithub } from "react-icons/fa";


export default function Github() {
  return (
    <Button 
    style={{ color: "#433cca", backgroundColor:"white", borderColor: "#433cca" }}
      tag="a" 
      href="https://github.com/gokce-tezel-avsar" 
      target="_blank" 
      rel="noopener noreferrer"
    >
<FaGithub/> Github
    </Button>
  );
}
