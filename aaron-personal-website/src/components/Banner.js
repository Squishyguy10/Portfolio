import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"
import coder from "../assets/img/coder.png"


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Hello", "I am Aaron", "I am a coder",  "This is my website"];
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(160);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => {clearInterval(ticker)};
    })

    const tick = () => {
        let updatedText = isDeleting ? toRotate[loopNum%toRotate.length].substring(0, text.length-1) : toRotate[loopNum%toRotate.length].substring(0, text.length+1);

        setText(updatedText);
        
        if(isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(600);
        }
        else if(isDeleting) {
            setDelta(70);
        }
        else if(!isDeleting && updatedText === toRotate[loopNum%toRotate.length]) {
            setIsDeleting(true);
            setDelta(2300);
        }
        else if(!isDeleting){
            setDelta(140);
        }
    }


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-centre">
                    <Col cs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{"< "}<span className="wrap">{text}</span>{" />"}</h1>
                        <p>Hi! I'm Aaron, and I go to Longfields Davidson Heights in Ottawa, Ontario, and I am currently in grade 12. 
                            I'm fond of going out of my way to learn more about math and technology, and dive deeper into these subjects,
                            whether through watching educational videos or doing practice myself by solving competitive math and coding problems. 
                            I'm also very passionate about leaving a positive mark in my community through community service or helping those in need. 
                            Anyway, feel free to look around my website! </p>
                    </Col>
                    <Col cs={12} md={6} xl={5}>
                        <img src={coder} alt="Programmer Image" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}