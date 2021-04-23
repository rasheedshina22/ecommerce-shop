import axios from 'axios';
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
} from '../constants/cartConstants';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  // no try catch here?

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  //save to localStorage
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => async (dispatch, getState) => {
  // no try catch here?

  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  //add the remaining items back to localStorage
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const saveShippingAddress = (data) => async (dispatch) => {
  // no try catch here?

  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });

  //add the remaining items back to localStorage
  localStorage.setItem('shippingAddress', JSON.stringify(data));
};
