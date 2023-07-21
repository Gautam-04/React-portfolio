import { Card, Button } from "react-bootstrap";
import './Project.css'
/* eslint-disable react/prop-types */
function ProjectCard(props) {
  return (
    <Card className="project-card-view flex flex-col overflow-hidden">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body className="flex flex-col">
        <Card.Title className="text-center">{props.title}</Card.Title>
        <Card.Text className="text-justify flex-grow">
          {props.description}
        </Card.Text>
        <div>
          <Button
            className="viewbtn w-full"
            variant="primary"
            href={props.ghLink}
            target="_blank"
          >
            View
          </Button>

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              className="w-full mt-2"
            >
              Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCard;