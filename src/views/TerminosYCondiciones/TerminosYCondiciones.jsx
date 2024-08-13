import { Box, Typography, List, ListItem } from '@mui/material';

export const TerminosYCondiciones = () => {
    return (
        <div className='fontSource'>
            <Box 
                id="terms-and-conditions"
                sx={{ textAlign: 'center', padding: 3, maxWidth: 1000, margin: 'auto'}}
            >

                <Typography variant="h4" component="h2" gutterBottom>
                    Términos y Condiciones
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    Esta política de condiciones de uso es válida a partir de Marzo 2024.
                </Typography>

                <Typography variant="h6" component="h3" gutterBottom>
                    Mateardi
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    Mateardi, persona jurídica de derecho privado, describe, a través de este documento, las normas de uso del sitio web mateardi.vercel.app y de cualquier otro sitio web, tienda o aplicación operada por el titular.
                </Typography>

                <List>
                    <ListItem>
                        <Typography variant="body1">
                            <strong>Sección 1 - Usuario:</strong> El uso de este sitio web le otorga automáticamente la condición de Usuario e implica su plena aceptación de todas las directrices y condiciones incluidas en estas Condiciones.
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="body1">
                            <strong>Sección 2 - Adhesión junto con la política de privacidad:</strong> El uso de este sitio web implica la adhesión a estas Condiciones de Uso y a la versión más actualizada de la Política de Privacidad de Mateardi.
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="body1">
                            <strong>Sección 3 - Condiciones de acceso:</strong> En general, el acceso al sitio web de Mateardi es gratuito y no requiere registro previo...
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="body1">
                            <strong>Sección 4 - Cookies:</strong> La información sobre el uso que usted hace de este sitio web puede recogerse a través de las cookies...
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="body1">
                            <strong>Sección 5 - Propiedad intelectual:</strong> Todos los elementos de Mateardi son propiedad intelectual de la misma o de sus licenciantes...
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="body1">
                            <strong>Sección 6 - Enlaces a sitios web de terceros:</strong> Este sitio web puede contener, de vez en cuando, enlaces de hipertexto...
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="body1">
                            <strong>Sección 7 - Plazos y modificaciones:</strong> El funcionamiento de este sitio web es por tiempo indefinido...
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="body1">
                            <strong>Sección 8 - Datos personales:</strong> Durante el uso de este sitio web, ciertos datos personales serán recogidos y procesados por Mateardi...
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="body1">
                            <strong>Sección 9 - Contacto:</strong> Si tiene alguna pregunta sobre las condiciones de uso, por favor póngase en contacto con nosotros por correo electrónico mateardi.wf@gmail.com o comuníquese a nuestro WhatsApp...
                        </Typography>
                    </ListItem>
                </List>
            </Box>
        </div>
    );
}
