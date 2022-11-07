import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Display({data}) {

  const postList = data.map( info => {
                return(
                  <div key={info.idPlayer}>
                  <Card sx={{ maxWidth: 400 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={info.strThumb}
                      alt="player"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Player Name
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                       {info.strDescriptionEN}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                  </div>
                      )})
  return (
    <div> 
     {postList}
      </div>
  )
}
 
export default Display;

