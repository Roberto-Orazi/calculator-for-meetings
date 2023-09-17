import { Container, Row, Col } from "react-bootstrap"
import React, { useState } from 'react'

import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

const Repartir = () =>{

    return(
        <>
        <Container>
            <Row>
                <Col><br/>
                <h1>Reparti<span>Te</span></h1>
                </Col><br/>
            </Row>
            <Row>
            <i class="fa-solid fa-user"></i>
            <Col>
                <input placeholder="Nombre persona 1"/>
            </Col>
            <Col>
           
            <Form.Control
              type="number"
              placeholder="$ Gasto 1"
              aria-describedby="inputGroupPrepend"
              required
            />
            </Col>
            <Col>
            <button><a>+ Añadir Gasto</a></button>
            </Col>
            <br/>
            <Col>
           <h4>La persona 1 gasto en total $1111,11</h4>
            
            </Col>
            <br/>
            <i class="fa-solid fa-user"></i>
            <Col>
                <input placeholder="Persona 2"/>  
            </Col>
            
            <Col>
           
            <Form.Control
              type="number"
              placeholder="$ Gasto 1"
              aria-describedby="inputGroupPrepend"
              required
            />
            </Col>
            <Col>
            <button><a>+ Añadir Gasto</a></button>
            </Col>
            <br/>
            <Col>
            
            <h4>La persona 2 gasto en total $1111,11</h4>
            </Col>
            
            <Col>
            <button><a>+ Añadir Persona</a></button>
            </Col>
            <br/>
            <h5>El Gasto total fue de $1111,11</h5>
            <Col>  
                <input type="number" placeholder="Cantidad de personas"/>
            </Col>
            </Row>
            
            <Row>
                <Col>
                <button><a>Reparti Te</a>  </button>
                <button><a>Calculo Nuevo</a></button>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                
                
                <h5>Cada uno tiene que poner $ 1111,11</h5>
                
                <h5>A la Persona 1 hay que darle / tiene que poner $ 1111,11</h5>
                
                <h5>A la Persona 2 hay que darle / tiene que poner $ 1111,11</h5>

                </Col>
            </Row>
   
        
        </Container>
        
        
        </>
    )
}

export default Repartir;