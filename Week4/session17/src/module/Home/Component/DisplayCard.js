import React from 'react';
import { Card, CardActions, CardContent, Button, Typography, CardMedia } from '@mui/material';
import { useDispatch } from 'react-redux';
import { onDelete } from '../../../action';

const Display = ({ playerData }) => {
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(onDelete(id));
    }

    const playerList = playerData.map(item => {
        return (
            <React.Fragment key={item.id}>
                <Card sx={{ maxWidth: 345 }}>
                    {/* <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                    /> */}
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {item.player}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.score}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={() => handleDelete(item.id)}>Delete</Button>
                    </CardActions>
                </Card>
            </React.Fragment>
        )
    });

    return (
        <>
            {playerList}
        </>
    )

};

export default Display;


// CRUD
// create, display, delete