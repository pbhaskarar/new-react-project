import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Grid} from '@mui/material';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
    <Box sx={{ width: '100%' }}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid xs={6}>
       <h1>hello</h1>
      </Grid>
      <Grid xs={6}>
      <h1>hello</h1>
      </Grid>
      <Grid xs={6}>
      <h1>hello</h1>
      </Grid>
      <Grid xs={6}>
      <h1>hello</h1>
      </Grid>
    </Grid>
  </Box>
      </Container>
    </React.Fragment>
  );
}
