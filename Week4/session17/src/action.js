import * as actions from './actionType';
import axios from 'axios';
export const onAddData = (item) => {
    // return  {
    //     axios.post(url, {}, {headers}).then().catch()
    // }
    return {
        type: actions.ADD_ITEM,
        payload: item
    }
}
export const onDelete = (id) => {
    // return  {
    //     axios.post(url, {}, {headers}).then().catch()
    // }
    return {
        type: actions.REMOVE_ITEM,
        payload: id
    }
}
export const onGetData =() => {
    return (dispatch) => {
        let url = "https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=D%";
        axios.get(url)
            .then((res => {
                dispatch( 
                    ((data) => {
                        return{
                type:actions.GET_POSTS,
                payload: {httpResponse:data}
            }
        }
    )(res.data)
            )}))       
           .catch (err => console.log(err))
    }
}