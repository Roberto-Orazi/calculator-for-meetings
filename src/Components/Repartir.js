import { Container, Row, Col, Button } from "react-bootstrap";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import DeleteIcon from '@mui/icons-material/Delete';
import {
    IconButton,

} from '@mui/material'
import Box from '@mui/material/Box';

const Repartir = () => {
    const [personas, setPersonas] = useState([{ nombre: "Persona 1", gastos: [0], mostrar: true }]);
    const [cantidadPersonas, setCantidadPersonas] = useState(1);

    const handleAddPersona = () => {
        const nuevaPersona = { nombre: `Persona ${personas.length + 1}`, gastos: [0], mostrar: true };
        setPersonas([...personas, nuevaPersona]);
    };

    const handleNombreChange = (e, index) => {
        const updatedPersonas = [...personas];
        updatedPersonas[index].nombre = e.target.value;
        setPersonas(updatedPersonas);
    };

    const handleCantidadChange = (e, index, gastoIndex) => {
        const updatedPersonas = [...personas];
        const nuevoGasto = e.target.value.trim() !== "" ? parseFloat(e.target.value) : 0;
        updatedPersonas[index].gastos[gastoIndex] = isNaN(nuevoGasto) ? 0 : nuevoGasto;
        setPersonas(updatedPersonas);
    };

    const handleEliminarGasto = (index, gastoIndex) => {
        const updatedPersonas = [...personas];
        updatedPersonas[index].gastos.splice(gastoIndex, 1);
        setPersonas(updatedPersonas);
    };

    const handleAgregarGasto = (index) => {
        const updatedPersonas = [...personas];
        updatedPersonas[index].gastos.push(0);
        setPersonas(updatedPersonas);
    };

    const handleEliminarPersona = (index) => {
        const updatedPersonas = [...personas];
        updatedPersonas.splice(index, 1);
        setPersonas(updatedPersonas);
    };

    const totalGastos = personas.reduce((total, persona) => {
        const gastoTotalPersona = persona.gastos.reduce((gastoTotal, gasto) => gastoTotal + gasto, 0);
        return total + gastoTotalPersona;
    }, 0);

    const cantidadARepartirPorPersona = totalGastos / cantidadPersonas;

    const cantidadQueDebePonerCadaPersona = personas
        .filter((persona) => persona.mostrar)
        .map((persona) => {
            const gastoTotalPersona = persona.gastos.reduce((gastoTotal, gasto) => gastoTotal + gasto, 0);
            return gastoTotalPersona - cantidadARepartirPorPersona;
        });

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <br />
                        <h1>
                            Reparti<span>Te</span>
                        </h1>
                    </Col>
                    <br />
                </Row>
                {personas.map((persona, index) =>
                    persona.mostrar ? (
                        <div key={index}>
                            <Row>
                                <i className="fa-solid fa-user"></i>
                                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                    <Col>
                                        <input
                                            placeholder={`Persona ${index + 1}`}
                                            value={persona.nombre === `Persona ${index + 1}` ? '' : persona.nombre}
                                            onChange={(e) => handleNombreChange(e, index)}
                                        />
                                    </Col>
                                    <Col>
                                        <IconButton onClick={() => handleEliminarPersona(index)}><DeleteIcon sx={{
                                            color: '#fff',
                                            '&:hover': {
                                                color: 'red'
                                            }
                                        }} /></IconButton>
                                    </Col>
                                </Box>
                                {persona.gastos.map((gasto, gastoIndex) => (
                                    <Box key={gastoIndex} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                        <Col>
                                            <Form.Control
                                                className="numero-input"
                                                type="number"
                                                placeholder={`$ Gasto ${gastoIndex + 1}`}
                                                aria-describedby="inputGroupPrepend"
                                                required
                                                value={gasto === 0 ? "" : gasto}
                                                onChange={(e) => handleCantidadChange(e, index, gastoIndex)}
                                            />

                                        </Col>
                                        <Col>
                                            <IconButton onClick={() => handleEliminarGasto(index, gastoIndex)}><DeleteIcon sx={{
                                                color: '#fff',
                                                '&:hover': {
                                                    color: 'red'
                                                }
                                            }} /></IconButton>
                                        </Col>
                                    </Box>
                                ))}
                            </Row>
                            <Row>
                                <Col>
                                    <button onClick={() => handleAgregarGasto(index)}>Agregar Gasto</button>
                                </Col>
                            </Row>
                            <br />
                            <Col>
                                <h4>{`${persona.nombre} gastó en total $${persona.gastos.reduce((total, gasto) => total + gasto, 0).toFixed(2)}`}</h4>
                            </Col>
                            <br />
                        </div>
                    ) : null
                )}
                <Row>
                    <Col>
                        <Button onClick={handleAddPersona}>Agregar Persona</Button>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <h5>{`El Gasto total fue de $${totalGastos.toFixed(2)}`}</h5>
                        <input
                            type="number"
                            placeholder="Cantidad de personas"
                            value={cantidadPersonas}
                            onChange={(e) => setCantidadPersonas(parseInt(e.target.value, 10))}
                        />
                    </Col>
                </Row>
            </Container>

            <br />
            <Row>
                <Col>
                    <h5>{`Cada uno tiene que poner $${cantidadARepartirPorPersona.toFixed(2)}`}</h5>

                    {cantidadQueDebePonerCadaPersona.map((cantidad, index) => (
                        <Col key={index}>
                            {cantidad > 0 ? (
                                <h5>{`A ${personas[index].nombre} le deben dar $${Math.abs(cantidad).toFixed(2)}`}</h5>
                            ) : (
                                <h5>{`${personas[index].nombre} tiene que poner $${Math.abs(cantidad).toFixed(2)}`}</h5>
                            )}
                        </Col>
                    ))}
                </Col>
            </Row>
        </>
    );
};

export default Repartir;