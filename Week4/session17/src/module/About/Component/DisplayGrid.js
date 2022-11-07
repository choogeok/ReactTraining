import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Display({data}) {
    return (
      <div>
       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {data.map( info => {
          return(
            <Grid xs={2} sm={4} md={4} key={info.idPlayer}>
            <Item>
              {info.strDescriptionEN}
              <img src={info.strThumb} alt="player" width="40%"/>
            </Item>
          </Grid>
          )})}
      </Grid>
      </div>
        )
  };
 
export default Display;

