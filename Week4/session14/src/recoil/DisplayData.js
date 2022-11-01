import React from 'react';
import {useRecoilState} from "recoil";
import {atomData} from './atomData';
import {Form} from "./Form";
import {Card,CardContent,Button,Typography} from '@mui/material/';


export const DisplayData = () => {

    const[list,setList] = useRecoilState(atomData);
    console.log(list);
    const handleUpdate = (e,id) => {
        const newList = list.filter( (info => {
            return info.id !== id;
        }));
        console.log(id)
        setList(newList);
    }

    return(
        <div>
            <Form />
        <Card sx={{ maxWidth: 345 }} variant="outlined">
        
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Task of the day
        </Typography>
        <Typography variant="body2" color="darkred">
         {list.length>0 ? (list.map(info => {
                return(
                    <React.Fragment key={info.id}>
                       <p> Task {info.id}  </p> 
                       <span> Descriptions: {info.text}  </span>
                       <Button size="small" variant="contained" onClick={(e) => handleUpdate(e,info.id)} >Delete TasK</Button>
                        {/* <Button size="Large" onClick={(e) => handleUpdate(e,info.id)}>Delete</Button> */}
                       {/* <p onClick={(e) => handleUpdate(e,info.id)}> {info.text} </p> */}
                       </React.Fragment>
             )})) : (<> </>)}
        </Typography>
      </CardContent>

    </Card>
     
        </div>
    )
};
