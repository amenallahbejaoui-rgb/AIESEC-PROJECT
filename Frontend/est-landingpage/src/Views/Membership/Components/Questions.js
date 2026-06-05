import { Accordion, Button, Col, Row } from "react-bootstrap";
import "../../../Assets/Scss/Membership/Questions.scss";
function Questions() {
  const questions = [
    {
      header: "Why AIESEC?",
      response:
        "AIESEC, or the International Association of Students in Economic and Commercial Sciences (Association Internationale des Étudiants en Sciences Économiques et Commerciales), stands out as a global youth-led organization offering unparalleled opportunities for leadership development and cross-cultural experiences. Founded in 1948, AIESEC operates in over 120 countries, fostering a global network that promotes personal and professional growth. By joining AIESEC, individuals gain access to unique international exchanges, contribute to social impact initiatives, and become part of a supportive community dedicated to positive global change. AIESEC's emphasis on personal development, global perspective, and making a meaningful impact makes it an ideal platform for those seeking transformative experiences and a commitment to building a more interconnected and socially responsible world.",
    },
    {
      header: "What are the benefits of an AIESEC internship?",
      response:
        "Participating in an AIESEC internship offers a multitude of benefits. Firstly, it provides a unique opportunity for personal and professional growth, allowing individuals to develop crucial leadership and adaptability skills in a global context. The cross-cultural nature of AIESEC internships fosters a deep understanding of diverse perspectives, enhancing one's cultural intelligence. These experiences often lead to the formation of a global network, opening doors to international collaborations and friendships. Additionally, AIESEC internships contribute to participants' resumes, showcasing their ability to navigate diverse environments and make a positive impact on real-world challenges. Overall, AIESEC internships offer a transformative journey, equipping individuals with skills and perspectives essential for success in an interconnected world.",
    },
    {
      header: "What is Global Volunteer?",
      response:
        "AIESEC Global Volunteer is a transformative program that empowers young individuals to make a positive impact on communities worldwide. As a part of AIESEC, the world's largest youth-led organization, Global Volunteer provides a platform for young people to engage in cross-cultural experiences while contributing to meaningful projects. Participants have the opportunity to immerse themselves in diverse environments, fostering personal and professional growth as they work on projects ranging from education and environmental sustainability to social entrepreneurship. AIESEC Global Volunteer transcends borders, connecting passionate individuals with communities in need, fostering a sense of global citizenship and creating lasting impressions on both volunteers and the communities they serve. Through this program, AIESEC aims to cultivate leaders who understand the importance of global cooperation and are committed to creating positive change in the world.",
    },
    {
      header: "What is Global Teaching?",
      response:
        "Global Teaching is a distinctive initiative by AIESEC that focuses on providing young educators with the opportunity to teach and contribute to educational projects around the world. This program allows participants to share their knowledge and skills, fostering cross-cultural understanding and making a meaningful impact on local communities. AIESEC believes in the power of education to shape the future, and Global Teaching is designed to empower individuals to become catalysts for positive change through teaching experiences in diverse global settings.",
    },
    {
      header: "What is Global Talent?",
      response:
        "Global Talent is an AIESEC program that connects young professionals with international work opportunities, enabling them to gain valuable work experience in diverse environments. Participants have the chance to contribute their skills to projects related to their field of expertise, fostering professional growth and cultural exchange. Through Global Talent, AIESEC aims to bridge the gap between talented individuals and organizations worldwide, promoting a global perspective and creating a network of young professionals who understand the importance of collaboration and adaptability in the modern workplace.",
    },
  ];

  return (
    <div className="questions">
      <Row>
        <Col md={{ offset: 3, span: 6 }}>
          <h1 className="title">We answer your questions</h1>
          <p className="text">
            Here are some frequently asked questions that could help you
            understand better what it is we do as AIESECers.
          </p>
          {questions.map((ele, index) => {
            return (
              <Accordion key={index}>
                <Accordion.Item eventKey={index}>
                  <Accordion.Header>{ele.header}</Accordion.Header>
                  <Accordion.Body>{ele.response}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            );
          })}
          <div className="contact">
            <h1 className="contact-question">Still have a question?</h1>
            <p>Contact us and ask away!</p>
            <Button
              style={{ height: "fit-content", marginTop: "3px" }}
              className="rounded-pill contact btn-primary"
              href="/contact"
            >
              Contact us
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default Questions;
