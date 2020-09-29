 
import { GET_DEMO_LIST } from './type';
import axios from "axios";


export const getDemoList = () => {
  return async dispatch => {
    try {
      let url = 'http://0.0.0.0:8400/api/v1/surveys';
      const data = await axios.get(url);

      return dispatch({
        type: GET_DEMO_LIST,
        payload: data.results
      });
    } catch (error) {
      alert(error);
    }
  };
};