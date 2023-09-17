import { Container, Row, Col } from "react-bootstrap";
 
const Inicio = () => {
    return(
 <Container>
    <Row>
        <Col><br/><h1>Inicio</h1></Col>
        <Col><br/>
        <h2>Preguntas frecuentes</h2> </Col>
        </Row>
        <Row className="cont-preguntas">
            <Col className="preguntas">
        <h3>Para que sirve?</h3>
        <p>RepartiTe sirve para resolverte todos los problemas que se pueden generar cuando te juntas a comer y queres dividir la plata.</p> 
        </Col>
        <Col className="preguntas"><h3>Como se usa?</h3>
        <p>En la seccion de RepartiTe, primero tenes que ingresar el Nombre de la persona o las personas que hicieron las compras y la cantidad de plata que puso cada una, luego ponemos la cantidad de personas que son.</p> 
        </Col>
        <Col className="preguntas"><h3>Que cuentas hace?</h3>
        <p>La aplicacion hace todas las cuentas, ya sea la plata que hay que poner cada uno, y cuanta plata hay que darle a la gente que puso plata para comprar las cosas.</p> 
        </Col>
        <Col className="preguntas"><h3>Cual es el limite de personas?</h3>
        <p>No hay limite para la cantidad de personas, ya que sabemos que muchas veces podemos repartir los mandados entre varios.</p> 
        </Col>
        <Col className="preguntas">
        <h3>Para que sirve?</h3>
        <p>RepartiTe sirve para resolverte todos los problemas que se pueden generar cuando te juntas a comer y queres dividir la plata.</p> 
        </Col>
        <Col className="preguntas"><h3>Como se usa?</h3>
        <p>En la seccion de RepartiTe, primero tenes que ingresar el Nombre de la persona o las personas que hicieron las compras y la cantidad de plata que puso cada una, luego ponemos la cantidad de personas que son.</p> 
        </Col>
        <Col className="preguntas"><h3>Que cuentas hace?</h3>
        <p>La aplicacion hace todas las cuentas, ya sea la plata que hay que poner cada uno, y cuanta plata hay que darle a la gente que puso plata para comprar las cosas.</p> 
        </Col>
        <Col className="preguntas"><h3>Cual es el limite de personas?</h3>
        <p>No hay limite para la cantidad de personas, ya que sabemos que muchas veces podemos repartir los mandados entre varios.</p> 
        </Col>
        </Row>
 </Container>      
    )
}

export default Inicio;