import { Container, Row, Col } from "react-bootstrap";

const Contacto = () => {
    return (
        <Container>
            <Row>
                <Col><br /><h1>Contacto</h1></Col>
            </Row>
            <Row className="contactoform">


                <Row xl={4} md={6} class="col-12 mb-1 columnas">
                    <div class="form-group">
                        <Col className="labeltext">
                            <label for="basicInput">Nombre</label></Col>
                        <Col><input type="text" class="form-control" placeholder="Nombre" /></Col>
                    </div>
                    <span id="basic_cust_name_val" class="validation_msg"></span>
                </Row>

                <Row xl={4} md={6} class="col-12 mb-1 columnas">
                    <div class="form-group">
                        <Col className="labeltext"><label for="Last_Name">Apellido</label></Col>

                        <Col><input type="text" class="form-control" id="basic_id_cust_last_name" name="basic_cust_last_name" placeholder="Apellido" />
                        </Col></div>
                    <span id="basic_cust_lastname_val" class="validation_msg"></span>
                </Row>
                <Row xl={4} md={6} class="col-12 mb-1 columnas">
                    <div class="form-group">
                        <Col className="labeltext"><label for="basic_edit_email">Email</label></Col>
                        <Col><input type="email" class="form-control" placeholder="Email" name="basic_email" id="basic_email" /></Col>
                        <span id="basic_email_val" class="validation_msg"></span>
                    </div>

                </Row>
                <Row xl={4} md={6} class="col-12 mb-1 columnas">
                    <div class="form-group">
                        <Col className="labeltext"><label for="basic_edit_email">Consulta</label></Col>
                        <Col><textarea type="email" class="form-control" placeholder="Consulta" name="basic_email" id="basic_email" /></Col>
                        <Col><button className="" type="submit">Enviar</button></Col>
                        <span id="basic_email_val" class="validation_msg"></span>
                    </div>

                </Row>
            </Row>
        </Container>
    )
}

export default Contacto;