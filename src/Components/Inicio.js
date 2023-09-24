import { Typography, Container, Grid, Box } from '@mui/material'

const Inicio = () => {
    return (
        <Container>
            <Box>
                <Typography variant="h1"
                    sx={{
                        fontSize: '3rem',
                    }}>
                    Inicio
                </Typography>

                <Typography variant="h2"
                    sx={{
                        fontSize: '2rem',
                    }}>
                    Preguntas frecuentes
                </Typography>
            </Box>
            <Grid container className="cont-preguntas">
                <Grid item className="preguntas">
                    <Typography variant="h3"
                        sx={{
                            fontSize: '1.5rem'
                        }}>
                        Para que sirve?
                    </Typography>
                    <Typography variant="p"
                        sx={{
                            fontSize: '1rem',
                            color: '#fff'
                        }}>
                        RepartiTe sirve para resolverte todos los problemas que se pueden generar cuando te juntas a comer y queres dividir la plata.
                    </Typography>
                </Grid>
                <Grid item className="preguntas">`
                    <Typography variant="h3"
                        sx={{
                            fontSize: '1.5rem'
                        }}>Como se usa?</Typography>
                    <Typography variant="p"
                        sx={{
                            fontSize: '1rem',
                            color: '#fff'
                        }}>
                        En la seccion de RepartiTe, primero tenes que ingresar el Nombre de la persona o las personas que hicieron las compras y la cantidad de plata que puso cada una, luego ponemos la cantidad de personas que son.
                    </Typography>
                </Grid>
                <Grid item className="preguntas">`
                    <Typography variant="h3"
                        sx={{
                            fontSize: '1.5rem'
                        }}>
                        Que cuentas hace?
                    </Typography>
                    <Typography variant="p"
                        sx={{
                            fontSize: '1rem',
                            color: '#fff'
                        }}>
                        La aplicacion hace todas las cuentas, ya sea la plata que hay que poner cada uno, y cuanta plata hay que darle a la gente que puso plata para comprar las cosas.
                    </Typography>
                </Grid>
                <Grid item className="preguntas">`
                    <Typography variant="h3"
                        sx={{
                            fontSize: '1.5rem'
                        }}>
                        Cual es el limite de personas?`
                    </Typography>
                    <Typography variant="p"
                        sx={{
                            fontSize: '1rem',
                            color: '#fff'
                        }}>
                        No hay limite para la cantidad de personas, ya que sabemos que muchas veces podemos repartir los mandados entre varios.
                    </Typography>
                </Grid>
                <Grid item className="preguntas">
                    <Typography variant="h3"
                        sx={{
                            fontSize: '1.5rem'
                        }}>
                        Para que sirve?`
                    </Typography>
                    <Typography variant="p"
                        sx={{
                            fontSize: '1rem',
                            color: '#fff'
                        }}>
                        RepartiTe sirve para resolverte todos los problemas que se pueden generar cuando te juntas a comer y queres dividir la plata.
                    </Typography>
                </Grid>
                <Grid item className="preguntas">`
                    <Typography variant="h3"
                        sx={{
                            fontSize: '1.5rem'
                        }}>Como se usa?`
                    </Typography>
                    <Typography variant="p"
                        sx={{
                            fontSize: '1rem',
                            color: '#fff'
                        }}>
                        En la seccion de RepartiTe, primero tenes que ingresar el Nombre de la persona o las personas que hicieron las compras y la cantidad de plata que puso cada una, luego ponemos la cantidad de personas que son.
                    </Typography>
                </Grid>
                <Grid item className="preguntas">
                    <Typography variant="h3"
                        sx={{
                            fontSize: '1.5rem'
                        }}>
                        Que cuentas hace?</Typography>
                    <Typography variant="p"
                        sx={{
                            fontSize: '1rem',
                            color: '#fff'
                        }}>
                        La aplicacion hace todas las cuentas, ya sea la plata que hay que poner cada uno, y cuanta plata hay que darle a la gente que puso plata para comprar las cosas.
                    </Typography>
                </Grid>
                <Grid item className="preguntas">
                    <Typography variant="h3"
                        sx={{
                            fontSize: '1.5rem'
                        }}>
                        Cual es el limite de personas?
                    </Typography>
                    <Typography variant="p"
                        sx={{
                            fontSize: '1rem',
                            color: '#fff'
                        }}>
                        No hay limite para la cantidad de personas, ya que sabemos que muchas veces podemos repartir los mandados entre varios.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Inicio;