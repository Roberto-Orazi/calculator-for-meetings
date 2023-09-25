import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import {
    IconButton, Typography, Container, Grid, Box, Button
} from '@mui/material'

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
                <Typography variant="h1" sx={{ fontSize: '3rem' }}>
                    RepartiTe
                </Typography>
                {personas.map((persona, index) =>
                    persona.mostrar ? (
                        <Grid container
                            key={index}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                marginTop: '1rem'
                            }}>
                            <Grid item>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',

                                }}><PersonIcon sx={{
                                    color: '#fff',
                                    fontSize: '2rem'
                                }} />
                                <Typography variant="h5">{persona.nombre}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                    <input
                                        placeholder={`Persona ${index + 1}`}
                                        value={persona.nombre === `Persona ${index + 1}` ? '' : persona.nombre}
                                        onChange={(e) => handleNombreChange(e, index)}
                                    />
                                    <IconButton onClick={() => handleEliminarPersona(index)}><DeleteIcon sx={{
                                        color: '#fff',
                                        '&:hover': {
                                            color: 'red'
                                        }
                                    }} /></IconButton>
                                </Box>
                                {persona.gastos.map((gasto, gastoIndex) => (
                                    <Box key={gastoIndex} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                        <Form.Control
                                            className="numero-input"
                                            type="number"
                                            placeholder={`$ Gasto ${gastoIndex + 1}`}
                                            aria-describedby="inputGroupPrepend"
                                            required
                                            value={gasto === 0 ? "" : gasto}
                                            onChange={(e) => handleCantidadChange(e, index, gastoIndex)}
                                        />

                                        <IconButton onClick={() => handleEliminarGasto(index, gastoIndex)}><DeleteIcon sx={{
                                            color: '#fff',
                                            '&:hover': {
                                                color: 'red'
                                            }
                                        }} /></IconButton>
                                    </Box>
                                ))}
                            </Grid>

                            <Button
                                variant="contained"
                                sx={{ backgroundColor: '#fff', color: '#000', width: '11rem', '&:hover': {
                                    backgroundColor: '#333',
                                    color: '#fff',
                                  }}}
                                onClick={() => handleAgregarGasto(index)}>
                                <Typography variant="h6" sx={{
                                    fontSize: '.8rem',
                                }}>
                                    Agregar Gasto
                                </Typography></Button>

                            <Typography variant="h4" sx={{
                                fontSize: '1rem',
                                marginTop: '.5rem'
                            }}>{`${persona.nombre} gastó en total $${persona.gastos.reduce((total, gasto) => total + gasto, 0).toFixed(2)}`}</Typography>


                        </Grid>
                    ) : null
                )}

                <Button variant="contained" onClick={handleAddPersona} sx={{ backgroundColor: '#fff', color: '#000', width: '11rem', marginTop: '1rem','&:hover': {
                                    backgroundColor: '#333',
                                    color: '#fff',
                                  }}}>
                    <Typography variant="h6" sx={{
                        fontSize: '.8rem',
                    }}>
                        Agregar Persona
                    </Typography>
                </Button>


                <Typography variant="h5" sx={{
                    fontSize: '1rem',
                    marginTop: '1rem'
                }}>{`El Gasto total fue de $${totalGastos.toFixed(2)}`}</Typography>
                <input
                    type="number"
                    placeholder="Cantidad de personas"
                    value={cantidadPersonas}
                    onChange={(e) => setCantidadPersonas(parseInt(e.target.value, 10))}
                />
            </Container >

            <Typography variant="h5" sx={{
                fontSize: '1rem'
            }}>{`Cada uno tiene que poner $${cantidadARepartirPorPersona.toFixed(2)}`}</Typography>

            {cantidadQueDebePonerCadaPersona.map((cantidad, index) => (
                <Box key={index} >
                    {cantidad > 0 ? (
                        <Typography variant="h5" sx={{
                            fontSize: '1rem'
                        }}>{`A ${personas[index].nombre} le deben dar $${Math.abs(cantidad).toFixed(2)}`}</Typography>
                    ) : (
                        <Typography variant="h5" sx={{
                            fontSize: '1rem'
                        }}>{`${personas[index].nombre} tiene que poner $${Math.abs(cantidad).toFixed(2)}`}</Typography>
                    )}
                </Box>
            ))}
        </>
    );
};

export default Repartir;