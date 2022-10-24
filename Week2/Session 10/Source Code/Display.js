import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./src/App.css";

const Display = (props) => {

    const {details} = props;
    const dataList = details.map( (ele) => {
        return(
            <div className='card' key={ele.contact}>
            <h4> Name: {ele.name} </h4>
            <h4> Date of Birth: {ele.dob} </h4>
            <h4> Email Address: {ele.email} </h4>
            <h4> Contact No.: {ele.contact} </h4>
            <h4> About Me: {ele.description} </h4>
            </div>
        )
    });

    return (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
              <CardContent>
              <Typography gutterBottom variant="h5" component="div">
               <h4> Business Card </h4> 
               <p> {dataList} </p> 
              </Typography>
          </CardContent>
          </CardActionArea>
        </Card>
      );
    };
        
      export default Display;      