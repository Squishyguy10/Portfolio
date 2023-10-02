import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from '../assets/img/color-sharp2.png';
import cplusplus from '../assets/img/c++.png';
import reactcss from '../assets/img/react-css.jpg';

export const Projects = () => {
    const projects = [
        {
            title: "Competitive Programming",
            description: "Competitive coding is a large hobby of mine, which I have been doing for 3 years. I type most of my code in C++.",
            imgUrl: cplusplus,
        },
        {
            title: "Tag",
            description: "Here is a party game a friend and I created in Python, using the CMU Graphics Library.",
            imgUrl: cplusplus,
        },
        {
            title: "Goock Games",
            description: "A 1v1 gaming platform where you code algorithms to play a game for you against other real players.",
            imgUrl: cplusplus,
        },
        {
            title: "The 3 Rs",
            description: "An app that aims to improve environmental sustainability through various methods.",
            imgUrl: cplusplus,
        },
        {
            title: "Table Tablet",
            description: "Turn any flat surface into a drawing tablet with just a webcam.",
            imgUrl: cplusplus,
        },
        {
            title: "This Website",
            description: "And of course, this website, made by React JS and CSS.",
            imgUrl: reactcss,
        },
    ]

    return (
        <section className='project' id='project'>
            <Container>
                <Row>
                    <Col>
                        <h2> Projects </h2>
                        <p> Here are some of my projects that I am most proud of. </p>
                        
                        <Tab.Container id="project-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content>
                                <Tab.Pane eventkey='first'>
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...projects}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventkey='second'>Test</Tab.Pane>
                                <Tab.Pane eventkey='third'>Test</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2} />    
        </section>
    )
}