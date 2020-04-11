import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, emailButton, telButton, email, tel } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">{cta}</p>
            <p className="contact-wrapper__text">2835 Dumaurier Ave, Ottawa, ON, Canada</p>
            <p className="contact-wrapper__text">K2B 7W3</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={`mailto:${email}`}
            >
              {emailButton}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={`tel:${tel}`}
            >
              {telButton}
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
