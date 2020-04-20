import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';

function ProjectRows(props) {
  return (
    <Row className='justify-content-center' id={props.rowID}>
      <Container className='d-flex flex-column flex-md-row'>
        {props.projects.map((data, index) => (
          <Col key={`project-column-${index}`}>
            <a href={data.link}>
              <div className='project-container'>
                <img
                  className='img-fluid'
                  src={data.image}
                  alt={data.alt}
                ></img>
                <div className='project-titles text-center'>{data.title}</div>
              </div>
            </a>
          </Col>
        ))}
      </Container>
    </Row>
  );
}

export default ProjectRows;

ProjectRows.propTypes = {
  link: PropTypes.string,
  rowID: PropTypes.number,
  projects: PropTypes.array.isRequired,
  image: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string
};