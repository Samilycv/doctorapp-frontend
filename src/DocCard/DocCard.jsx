import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function DocCard({ doctors }) {
  console.log(doctors);
  return (
    <div>

      <Link to={`view/${doctors.id}`} style={{ textDecoration: 'none' }}>
        <MDBCard style={{ marginbottom: '40px' }}>
          <MDBCardImage src={doctors.image_url} position='top' alt='...' style={{ height: '400px', width: '240px', padding: '20px', border: '2px solid white', marginLeft: '30px', }} />
          <MDBCardBody>
            <MDBCardTitle className='text-black'>{doctors.name}</MDBCardTitle>
            <MDBCardText className='text'>
              Specialty:{doctors.specialty}<br />
              Hospital:{doctors.hospital}<br />
              Address:{doctors.address}<br />
              Email:{doctors.email}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </Link>
    </div>
  )
}

export default DocCard