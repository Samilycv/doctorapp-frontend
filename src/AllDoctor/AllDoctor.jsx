import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DocCard from '../DocCard/DocCard';
import { base_url } from '../base_url';

function AllDoctor() {
  //const baseUrl = 'http://localhost:3001'

  // create a state for holding data
  const [allDoctor, setAllDoctor] = useState([])

  const fetchData = async () => {
    const { data } = await axios.get(`${base_url}/doctors`)
    console.log(data);
    setAllDoctor(data)
  }
  console.log(allDoctor);
  useEffect(() => {
    fetchData()

  }, [])


  return (
    <>

      <Row className="m-5" >

        {

          allDoctor.map((item) => (
            <Col ms={12} md={6} lg={4} xl={3}>
              <DocCard doctors={item} />

            </Col>

          ))




        }
      </Row>
      </>
  )
}

export default AllDoctor