import { ORDER_DATA } from './actionTypes';
import axios from 'axios';

export const getOrderData = (page = 0) => async (dispatch) => {
  let resp = await axios({
    method: 'get',
    url: './json/orders.json',
  });
  dispatch({
    type: ORDER_DATA,
    currentPage: page,
    obj: resp.data
  });
}