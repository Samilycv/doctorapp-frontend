import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
        <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>
            <img
              src='https://media.istockphoto.com/id/471629610/vector/caduceus-medical-symbol.jpg?s=612x612&w=0&k=20&c=jLnfdQQphRwsmm6wo0O80sEo-5PhbEY4PHmQgBiRkq0='
              height='30'
              alt=''
              loading='lazy' className='text-center me-3'
            />
            <span style={{marginRight:'10px',fontSize:'28px'}}>DOCTORS</span> <span style={{color:'#2B76BF',fontSize:'28px'}}>LIST</span>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header