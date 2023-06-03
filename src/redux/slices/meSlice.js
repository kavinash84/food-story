/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { FETCH_ME, apiUtil } from '../api';

const initialState = {
  allDetails: {
    id: null,
    group_id: null,
    created_at: '',
    updated_at: '',
    created_in: '',
    dob: '1',
    email: '',
    firstname: '',
    lastname: '',
    gender: 1,
    store_id: 1,
    website_id: 1,
    addresses: [],
    disable_auto_group_change: 0,
    extension_attributes: {
      is_subscribed: true
    }
  },
  addressList: [],
  currentAddress: {
    id: null,
    customer_id: null,
    region: {
      region_code: '',
      region: '',
      region_id: null
    },
    region_id: null,
    country_id: 'IN',
    street: [],
    telephone: '',
    postcode: '',
    city: '',
    firstname: '',
    lastname: ''
  }
};

export const getMe = createAsyncThunk(
  'me/getMe',
  async (thunkAPI) => {
    const response = await apiUtil(FETCH_ME);
    return response.data;
  }
);
export const updateMe = createAsyncThunk(
  'me/updateMe',
  async (updateData,thunkAPI) => {
    const response = await apiUtil({
      url:FETCH_ME,
      method:"put",
      data:updateData
    });
    return response.data;
  }
);

export const meSlice = createSlice({
    name: 'me',
    initialState,
    reducers: {
      setCurrentAddress: (state,action) => {
        state.currentAddress = action.payload;
      },
      clearCurrentAddress: (state, action) => {
        state.currentAddress = {
          id: null,
          customer_id: null,
          region: {
            region_code: '',
            region: '',
            region_id: null
          },
          region_id: null,
          country_id: 'IN',
          street: [],
          telephone: '',
          postcode: '',
          city: '',
          firstname: '',
          lastname: ''
        };
      },
    },
    extraReducers: (builder) => {
      builder.addCase(getMe.fulfilled, (state, action) => {
        state.allDetails=action.payload;
        state.addressList=action.payload.addresses;
      });
      builder.addCase(updateMe.fulfilled, (state, action) => {
        state.allDetails=action.payload;
        state.addressList=action.payload.addresses;
      });
    },
  });

  export const { setCurrentAddress, clearCurrentAddress, incrementByAmount } = meSlice.actions;

export default meSlice.reducer;