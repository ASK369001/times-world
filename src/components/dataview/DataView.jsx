import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardItem from "../cardItem/CardItem";
import "./dataview.css";

export default function DataView(props) {
  const { countries, onLoadMore } = props;
  return (
    <div className="data-container">
      <Container>
        <Row>
          {countries.map((country) => (
            <Col xs={12} md={6} key={country}>
              <CardItem country={country} />
            </Col>
          ))}
        </Row>
      </Container>
      <div className="load-btn-container">
        <button className="load-button" onClick={onLoadMore}>
          Load More
        </button>
      </div>
    </div>
  );
}
