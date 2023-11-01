import React from 'react'
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

function DocReview({ reviews, name, ...props }) {
  console.log(reviews);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <p variant="primary" onClick={handleShow} className="me-2">
        {name} Reviews
      </p>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Reviews</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {
            reviews?.map(item => (
              <div>
                <p>Patient Name : {item.patient_name}</p>
                <p>Date : {item.date}</p>
                <p>Rating : {item.rating}</p>
                <p>Comments : {item.comments}</p>
              </div>
            ))
          }
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default DocReview