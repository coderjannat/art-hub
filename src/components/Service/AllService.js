import React, { useEffect, useState } from "react";
import "./AllService.css";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const AllService = () => {

  const [service, setService] = useState([]);


  useEffect(() => {

    fetch('/servicedata.json')
      .then((res) => res.json())

      .then((data) => setService(data));
  }, []);
  return (
    <div className="container all-teams">
      <div className="all-team pb-3">
        <h1>Our Services</h1>
      </div>

      <div className="teams">
        <div className="row me-3 ">
          {service?.map((serve) => (
            <div className="col-md-3">
              <div className="shadow  bg-body rounded">
                <Card style={{ width: '15rem', border:'none',
              padding:'5px',overflow:'hidden'}}>
                  <Card.Img variant="top" src={serve.image} />
                  <Card.Body>
                    <Card.Title>{serve.name}</Card.Title>
                    <Card.Text>
                      {serve.designation}
                    </Card.Text>
                    <Link to={`/details/${serve.id}`}>
                      <Button variant="danger">Detail</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllService;
