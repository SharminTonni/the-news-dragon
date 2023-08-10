import React, { useEffect, useState } from "react";
import { Button, Card, Row } from "react-bootstrap";
import { FaArrowLeft, FaBookmark, FaRegBookmark } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Editors from "../Editors/Editors";
import { addtoDB } from "../../../../FakeDB/Fakedb";

const News = () => {
  const news = useLoaderData();
  const id = useParams();
  console.log(id.id);
  const [booked, setBooked] = useState(false);
  const { title, details, image_url, category_id } = news;
  const handleBookMark = (id) => {
    setBooked(true);
    addtoDB(id);
  };
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
          <Button
            onClick={() => handleBookMark(id.id)}
            className="ms-3 fs-4"
            variant=""
          >
            {booked ? (
              <FaBookmark></FaBookmark>
            ) : (
              <FaRegBookmark></FaRegBookmark>
            )}
          </Button>
        </Card.Body>
      </Card>
      <h3 className="mt-4">Editors Insight</h3>
      <Editors></Editors>

      <h1></h1>
    </div>
  );
};

export default News;
