import { StarOutline } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";


export const NothinSelectedView = () => {
  return (
    <Grid 
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{
        minHeight: 'calc(100vh - 110px)', 
        backgroundColor:'primary.main',
        borderRadius: 3
      }}
    >
        <Grid item xd={12}>
            <StarOutline 
                sx={{
                    fontSize: 100,
                    color: 'white'
                }}
            />
        </Grid>
        <Grid item xd={12}>
            <Typography color='white' variante='h5'>
                Selecciona o crea una nota
            </Typography>
        </Grid>
    </Grid>
  );
};
