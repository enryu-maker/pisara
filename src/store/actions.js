import axios from "axios";
import { baseURL } from "../helper/Helper";

export const getBannerAction = () => {
    const data = []
    return async dispatch => {
        try {
            let response = await axios.get(baseURL + '/getbanners/', {
                params: {
                    type: "slider"
                }
            });
            response.data.map((item) => {
                data.push({
                    img: { uri: baseURL + item.image },
                })
            }
            )
            dispatch({
                type: 'GET_BANNER',
                payload: data,
            })
        } catch (error) {
            console.log(error);
        }
    }
}
export const getFeatured = () => {

    return async dispatch => {
        let Fresh = await axios.get(baseURL + '/getfeatured/', {
            params: {
                type: "Fresh"
            }
        })
        dispatch({
            type: 'FEATURED',
            payload: Fresh.data,
        })

    }
}

export const getProduct = () => {
    return async dispatch => {
        let response = await axios.get(baseURL + '/getall/');
        dispatch({
            type: 'CAT',
            payload: response?.data,
        })
    }
}