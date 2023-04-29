import React, { useEffect, useState } from "react";
import { Button, Card, Row } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Editors from "../Editors/Editors";

const News = () => {
  const news = useLoaderData();
  // const id = useParams();
  console.log(news);

  const { title, details, image_url, category_id } = news;
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="danger">
              <FaArrowLeft /> All News in This Category
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <h3 className="mt-4">Editors Insight</h3>
      <Editors></Editors>

      <h1></h1>
    </div>
  );
};

export default News;
