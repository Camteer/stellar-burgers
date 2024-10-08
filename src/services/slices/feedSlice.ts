import {
  getFeedsApi,
  getOrderByNumberApi,
  getOrdersApi,
  orderBurgerApi
} from '../../utils/burger-api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TOrder } from '@utils-types';

const ORDER_SLICE_NAME = 'order';

interface IFeedState {
  orders: TOrder[];
  userOrders: TOrder[];
  orderRequestData: TOrder | null;
  orderInfo: TOrder | null;
  total: number | null;
  totalToday: number | null;
  isLoading: boolean;
  error: string | null;
  orderRequest: boolean;
}

export const initialState: IFeedState = {
  orders: [],
  userOrders: [],
  total: null,
  totalToday: null,
  isLoading: false,
  error: null,
  orderRequest: false,
  orderRequestData: null,
  orderInfo: null
};

export const fetchGetAllOreders = createAsyncThunk(
  `${ORDER_SLICE_NAME}/fetchGetAllOreders`,
  async () => getFeedsApi()
);

export const fetchGetAllUserOreders = createAsyncThunk(
  `${ORDER_SLICE_NAME}/fetchGetAllUserOreders`,
  async () => getOrdersApi()
);

export const fetchOrderBurgerApi = createAsyncThunk(
  `${ORDER_SLICE_NAME}/fetchOrderBurgerApi`,
  async (data: string[]) => {
    const order = await orderBurgerApi(data);
    return order;
  }
);

export const fetchGetOrderByNumber = createAsyncThunk(
  `${ORDER_SLICE_NAME}/fetchGetOrderByNumber`,
  async (numberOrder: number, { dispatch }) => {
    dispatch(clearOrderData());
    return getOrderByNumberApi(numberOrder);
  }
);

const oredersSlice = createSlice({
  name: `${ORDER_SLICE_NAME}`,
  initialState,
  reducers: {
    clearOrderData: (state) => {
      state.orderRequestData = null;
      state.orderRequest = false;
      state.orderInfo = null;
    }
  },
  selectors: {
    getOrders: (state) => state.orders,
    getTotal: (state) => state.total,
    getTotalToDay: (state) => state.totalToday,
    getUserOrders: (state) => state.userOrders,
    getOrderInfo: (state) => state.orderInfo,
    getOrderRequestData: (state) => state.orderRequestData,
    getOrderRequest: (state) => state.orderRequest
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetAllOreders.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchGetAllOreders.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.orders = action.payload.orders;
        state.total = action.payload.total;
        state.totalToday = action.payload.totalToday;
      })
      .addCase(fetchGetAllOreders.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Не удалось получить заказы';
      })
      .addCase(fetchGetAllUserOreders.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchGetAllUserOreders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.userOrders = action.payload;
      })
      .addCase(fetchGetAllUserOreders.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Не удалось получить заказы';
      })
      .addCase(fetchOrderBurgerApi.pending, (state) => {
        state.orderRequest = true;
        state.error = null;
      })
      .addCase(fetchOrderBurgerApi.fulfilled, (state, action) => {
        state.orderRequest = false;
        state.orderRequestData = action.payload.order;
      })
      .addCase(fetchOrderBurgerApi.rejected, (state) => {
        state.orderRequest = false;
        state.error = 'Не удалось oтправить заказ';
      })
      .addCase(fetchGetOrderByNumber.pending, (state) => {
        state.orderRequest = true;
        state.error = null;
      })
      .addCase(fetchGetOrderByNumber.fulfilled, (state, action) => {
        state.orderRequest = false;
        state.orderInfo = action.payload.orders[0];
      })
      .addCase(fetchGetOrderByNumber.rejected, (state) => {
        state.orderRequest = false;
        state.error = 'Не удалось получить заказ';
      });
  }
});

export const orderReducer = oredersSlice.reducer;
export const {
  getOrders,
  getTotal,
  getTotalToDay,
  getUserOrders,
  getOrderRequestData,
  getOrderRequest,
  getOrderInfo
} = oredersSlice.selectors;
export const { clearOrderData } = oredersSlice.actions;
