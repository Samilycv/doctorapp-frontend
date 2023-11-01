import React from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

function DocOp({ op }) {
    console.log(op)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <p variant="primary" onClick={handleShow}>
                Available Date & Time
            </p>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Operating Hours</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {/* List */}
                    <MDBListGroup style={{ minWidthL: '22rem' }} light>
                        <MDBListGroupItem>Available Days : {op.available_days}</MDBListGroupItem>
                        <MDBListGroupItem>Available Time : {op.available_hours}</MDBListGroupItem>


                    </MDBListGroup>

                </Modal.Body>

            </Modal>
        </>
    )
}

export default DocOp