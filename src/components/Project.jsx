import './Project.css'
import ProjectCard from './ProjectCard'
import Blogimg from '../../IMAGES/Projects/Blog.png'
import Upcoming from "../../IMAGES/Projects/Upcoming.jpg";
import { Row,Col } from 'react-bootstrap'

export default function Project() {
  return (
    <section id="Project" className="project-section">
      <h1 className="project-head text-center">My Projects</h1>
      <div className="my-4 ">
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Blogimg}
              isblog={false}
              title="Blog Site"
              description="Explore my Blog site project, a hands-on demonstration of frontend and backend synergy. Powered by Ejs, NodeJs, and Express, it offers secure user authentication, dynamic content, and CRUD functionality. A versatile showcase of web development expertise, seamlessly connecting technologies for an engaging user experience."
              ghLink="https://gautam-blog-site.cyclic.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Upcoming}
              isBlog={false}
              title="Lorem Ipsum"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut ultrices sapien. Integer consectetur elementum sagittis. Fusce eget nisi vel velit convallis fermentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam consequat, risus id auctor rhoncus, justo lectus consectetur lectus."
              ghLink="https://github.com/Gautam-04"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Upcoming}
              isBlog={false}
              title="Lorem Ipsum"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut ultrices sapien. Integer consectetur elementum sagittis. Fusce eget nisi vel velit convallis fermentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam consequat, risus id auctor rhoncus, justo lectus consectetur lectus."
              ghLink="https://github.com/Gautam-04"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Upcoming}
              isBlog={false}
              title="Lorem Ipsum"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut ultrices sapien. Integer consectetur elementum sagittis. Fusce eget nisi vel velit convallis fermentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam consequat, risus id auctor rhoncus, justo lectus consectetur lectus."
              ghLink="https://github.com/Gautam-04"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Upcoming}
              isBlog={false}
              title="Lorem Ipsum"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut ultrices sapien. Integer consectetur elementum sagittis. Fusce eget nisi vel velit convallis fermentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam consequat, risus id auctor rhoncus, justo lectus consectetur lectus."
              ghLink="https://github.com/Gautam-04"
            />
          </Col>
        </Row>
      </div>
    </section>
  );
}
