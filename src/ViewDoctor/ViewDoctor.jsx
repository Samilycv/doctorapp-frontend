import React from 'react'
import { useParams } from 'react-router-dom'
import { base_url } from '../base_url';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/esm/Image'
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import DocOp from '../DocOp/DocOp';
import DocReview from '../DocReview/DocReview';

function ViewDoctor() {

  const{id}=useParams()
  console.log(id);

  const [docDetails, setDocDetails] = useState([])
  const fetchData = async () => {
    //http://localhost:3001/doctors/5
    const { data } = await axios.get(`${base_url}/doctors/${id}`)
    console.log(data)//particular details
    setDocDetails(data)
  }
  console.log(docDetails);//particular details

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
     {
        docDetails ?
          <Row>

            <Col>
              {/* Image */}
              <Image src={`${docDetails.image_url}`} fluid style={{ height: '500px', width: '400px', padding: '20px', border: '2px solid white', marginLeft: '50px' }} />
            </Col>
            <Col style={{ padding: '50px' }}>
              <h1 className='text-center m-2'>{docDetails.name}</h1>

              <MDBListGroup style={{ minWidth: '22rem' }} light>
                <MDBListGroupItem tag='button' action noBorders active aria-current='true' type='button' className='px-3'>
                  Speciality : {docDetails.specialty}
                </MDBListGroupItem>
                <MDBListGroupItem tag='button' action noBorders type='button' className='px-3'>
                  Hospital : {docDetails.hospital}
                </MDBListGroupItem>
                <MDBListGroupItem tag='button' action noBorders type='button' className='px-3'>
                  Address  : {docDetails.address}
                </MDBListGroupItem>
                <MDBListGroupItem tag='button' action noBorders type='button' className='px-3'>
                  Email  : {docDetails.email}
                </MDBListGroupItem>
                <MDBListGroupItem tag='button' action noBorders type='button' className='px-3'>
                  Phone  : {docDetails.phone}
                </MDBListGroupItem>
                <MDBListGroupItem tag='button' action noBorders type='button' className='px-3'>
                  <DocOp op={docDetails}/>
                </MDBListGroupItem>
                <MDBListGroupItem tag='button' action noBorders type='button' className='px-3'>
                <DocReview reviews={docDetails.reviews}/>
                </MDBListGroupItem>
              </MDBListGroup>
            </Col>

          </Row> : <p>No Data</p>
      }
    </>
  )
}

export default ViewDoctor