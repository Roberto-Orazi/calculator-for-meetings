import { Typography, Container, Grid, Box } from '@mui/material'

export const Faq = () => {
    return (
        <Container>
            <Box>
                <Typography variant="h1" sx={{ fontSize: '3rem' }}>
                Preguntas frecuentes
                </Typography>
            </Box>
            <Grid container spacing={2}
            sx={{
                 display: 'grid',
                 gridTemplateColumns: 'repeat(auto-fit, 350px)',
                 gridAutoColumns: 'minmax(100px, 200px)',
                 padding: '50px',
                 gap: '30px',
                 justifyContent: 'center',
                 alignContent: 'center',
            }}>
                <Question
                    titulo="Para que sirve?"
                    descripcion="RepartiTe sirve para resolverte todos los problemas que se pueden generar cuando te juntas a comer y queres dividir la plata."
                />
                <Question
                    titulo="Como se usa?"
                    descripcion="En la seccion de RepartiTe, primero tenes que ingresar el Nombre de la persona o las personas que hicieron las compras y la cantidad de plata que puso cada una, luego ponemos la cantidad de personas que son."
                />
                <Question
                    titulo="Que cuentas hace?"
                    descripcion="La aplicacion hace todas las cuentas, ya sea la plata que hay que poner cada uno, y cuanta plata hay que darle a la gente que puso plata para comprar las cosas."
                />
                <Question
                    titulo="Cual es el limite de personas?"
                    descripcion="No hay limite para la cantidad de personas, ya que sabemos que muchas veces podemos repartir los mandados entre varios."
                />
            </Grid>
        </Container>
    );
};

const Question = ({ titulo, descripcion }) => {
    return (
        <Grid item sx={{
            textAlign: 'start',
            backgroundColor: 'rgba(66, 65, 65, 0.413)',
            padding: '20px',
        }}>
            <Typography variant="h3" sx={{ fontSize: '1.2rem', color: '#fff' }}>
                {titulo}
            </Typography>
            <Typography variant="p" sx={{ fontSize: '1rem', color: '#fff', display: 'inline-block', marginTop: '1rem'}}>
                {descripcion}
            </Typography>
        </Grid>
    );
};