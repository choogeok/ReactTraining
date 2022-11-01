import React from 'react';
import PropTypes from 'prop-types';
import logo from "../stories/logo512.png"
import './footer.css';
import {Card,CardContent,CardMedia} from '@mui/material/';
import Typography from '@mui/material/Typography';

export const CardDisplay = ({ username,title, description, contact }) => (
   
    <div className="wrapper">
      <div>
      <h1>ReactJS Storybook Training - Card</h1>
      </div>
      <div>
      <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        width="20"
        height="250"
        image={logo}
        alt="ReactJS"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Name Card
        </Typography>
        <Typography variant="body2" color="text.secondary">
         <h5>Name: {username} </h5>
         <h5>Title: {title} </h5>
         <h5>Description: {description} </h5>
         <h5>Contact: {contact} </h5>
     </Typography>
      </CardContent>
    </Card>
      </div>
    </div>

);

CardDisplay.propTypes = {
  username: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  contact: PropTypes.string,
};


CardDisplay.defaultProps = {
  username:"Name",
  title: "title",
  description: "Description",
  contact: "contact",
};
