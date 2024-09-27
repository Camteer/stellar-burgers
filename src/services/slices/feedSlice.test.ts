import { expect, describe, test } from '@jest/globals';
import {
  fetchGetAllOreders,
  fetchGetAllUserOreders,
  fetchGetOrderByNumber,
  fetchOrderBurgerApi,
  initialState,
  orderReducer
} from './feedSlice';

describe('feedSlice', () => {
  const mockInitialtState = {
    ...initialState,
    orders: [
      {
        _id: '66ac9120119d45001b4fd085',
        ingredients: [
          '643d69a5c3f7b9001cfa093c',
          '643d69a5c3f7b9001cfa0945',
          '643d69a5c3f7b9001cfa0943',
          '643d69a5c3f7b9001cfa0943',
          '643d69a5c3f7b9001cfa0942',
          '643d69a5c3f7b9001cfa0949',
          '643d69a5c3f7b9001cfa0948',
          '643d69a5c3f7b9001cfa094a',
          '643d69a5c3f7b9001cfa0949',
          '643d69a5c3f7b9001cfa0948',
          '643d69a5c3f7b9001cfa094a',
          '643d69a5c3f7b9001cfa0949',
          '643d69a5c3f7b9001cfa093c'
        ],
        status: 'done',
        name: 'Антарианский space астероидный краторный альфа-сахаридный экзо-плантаго spicy бургер',
        createdAt: '2024-08-02T07:56:16.767Z',
        updatedAt: '2024-08-02T07:56:17.228Z',
        number: 48123
      },
      {
        _id: '66ac8ee4119d45001b4fd080',
        ingredients: [
          '643d69a5c3f7b9001cfa093d',
          '643d69a5c3f7b9001cfa0943',
          '643d69a5c3f7b9001cfa0942',
          '643d69a5c3f7b9001cfa0943',
          '643d69a5c3f7b9001cfa0940',
          '643d69a5c3f7b9001cfa0940',
          '643d69a5c3f7b9001cfa0940',
          '643d69a5c3f7b9001cfa0940'
        ],
        status: 'done',
        name: 'Space флюоресцентный spicy метеоритный бургер',
        createdAt: '2024-08-02T07:46:44.238Z',
        updatedAt: '2024-08-02T07:46:44.680Z',
        number: 48122
      },
      {
        _id: '66ac8eca119d45001b4fd07e',
        ingredients: [
          '643d69a5c3f7b9001cfa093d',
          '643d69a5c3f7b9001cfa0943',
          '643d69a5c3f7b9001cfa0945',
          '643d69a5c3f7b9001cfa0942'
        ],
        status: 'done',
        name: 'Space флюоресцентный spicy антарианский бургер',
        createdAt: '2024-08-02T07:46:18.047Z',
        updatedAt: '2024-08-02T07:46:18.463Z',
        number: 48121
      }
    ],
    userOrders: [
      {
        _id: '66ac9120119d45001b4fd085',
        ingredients: [
          '643d69a5c3f7b9001cfa093c',
          '643d69a5c3f7b9001cfa0945',
          '643d69a5c3f7b9001cfa0943',
          '643d69a5c3f7b9001cfa0943',
          '643d69a5c3f7b9001cfa0942',
          '643d69a5c3f7b9001cfa0949',
          '643d69a5c3f7b9001cfa0948',
          '643d69a5c3f7b9001cfa094a',
          '643d69a5c3f7b9001cfa0949',
          '643d69a5c3f7b9001cfa0948',
          '643d69a5c3f7b9001cfa094a',
          '643d69a5c3f7b9001cfa0949',
          '643d69a5c3f7b9001cfa093c'
        ],
        status: 'done',
        name: 'Антарианский space астероидный краторный альфа-сахаридный экзо-плантаго spicy бургер',
        createdAt: '2024-08-02T07:56:16.767Z',
        updatedAt: '2024-08-02T07:56:17.228Z',
        number: 48123
      },
      {
        _id: '66ac8ee4119d45001b4fd080',
        ingredients: [
          '643d69a5c3f7b9001cfa093d',
          '643d69a5c3f7b9001cfa0943',
          '643d69a5c3f7b9001cfa0942',
          '643d69a5c3f7b9001cfa0943',
          '643d69a5c3f7b9001cfa0940',
          '643d69a5c3f7b9001cfa0940',
          '643d69a5c3f7b9001cfa0940',
          '643d69a5c3f7b9001cfa0940'
        ],
        status: 'done',
        name: 'Space флюоресцентный spicy метеоритный бургер',
        createdAt: '2024-08-02T07:46:44.238Z',
        updatedAt: '2024-08-02T07:46:44.680Z',
        number: 48122
      },
      {
        _id: '66ac8eca119d45001b4fd07e',
        ingredients: [
          '643d69a5c3f7b9001cfa093d',
          '643d69a5c3f7b9001cfa0943',
          '643d69a5c3f7b9001cfa0945',
          '643d69a5c3f7b9001cfa0942'
        ],
        status: 'done',
        name: 'Space флюоресцентный spicy антарианский бургер',
        createdAt: '2024-08-02T07:46:18.047Z',
        updatedAt: '2024-08-02T07:46:18.463Z',
        number: 48121
      }
    ],
    orderRequestData: {
      _id: '66ac8eca119d45001b4fd07e',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa0942'
      ],
      status: 'done',
      name: 'Space флюоресцентный spicy антарианский бургер',
      createdAt: '2024-08-02T07:46:18.047Z',
      updatedAt: '2024-08-02T07:46:18.463Z',
      number: 48121
    },
    orderInfo: {
      _id: '66ac8eca119d45001b4fd07e',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa0942'
      ],
      status: 'done',
      name: 'Space флюоресцентный spicy антарианский бургер',
      createdAt: '2024-08-02T07:46:18.047Z',
      updatedAt: '2024-08-02T07:46:18.463Z',
      number: 48121
    },
    total: 11,
    totalToday: 3
  };
  describe('fetchGetAllOreders', () => {
    test('fetchGetAllOreders:pending', () => {
      const action = {
        type: fetchGetAllOreders.pending.type
      };
      const expectedResult = {
        ...initialState,
        isLoading: true,
        error: null
      };
      const newState = orderReducer(initialState, action);
      expect(newState).toEqual(expectedResult);
    });

    test('fetchGetAllOreders:fulfilled', () => {
      const action = {
        type: fetchGetAllOreders.fulfilled.type,
        payload: {
          orders: mockInitialtState.orders,
          total: mockInitialtState.total,
          totalToday: mockInitialtState.totalToday
        }
      };
      const expectedResult = {
        ...initialState,
        error: null,
        isLoading: false,
        orders: mockInitialtState.orders,
        total: mockInitialtState.total,
        totalToday: mockInitialtState.totalToday
      };
      const newState = orderReducer(initialState, action);
      expect(newState).toEqual(expectedResult);
    });

    test('fetchGetAllOreders.rejected', () => {
      const action = {
        type: fetchGetAllOreders.rejected.type
      };
      const expectedResult = {
        ...initialState,
        isLoading: false,
        error: 'Не удалось получить заказы'
      };
      const newState = orderReducer(initialState, action);
      expect(newState).toEqual(expectedResult);
    });
  });

  describe('fetchGetAllUserOreders', () => {
    test('fetchGetAllUserOreders:pending', () => {
      const action = {
        type: fetchGetAllUserOreders.pending.type
      };
      const expectedResult = {
        ...initialState,
        isLoading: true,
        error: null
      };
      const newState = orderReducer(initialState, action);
      expect(newState).toEqual(expectedResult);
    });

    test('fetchGetAllUserOreders:fulfilled', () => {
      const action = {
        type: fetchGetAllUserOreders.fulfilled.type,
        payload: mockInitialtState.userOrders
      };
      const expectedResult = {
        ...initialState,
        error: null,
        isLoading: false,
        userOrders: mockInitialtState.userOrders
      };
      const newState = orderReducer(initialState, action);
      expect(newState).toEqual(expectedResult);
    });
    test('fetchGetAllUserOreders.rejected', () => {
      const action = {
        type: fetchGetAllUserOreders.rejected.type
      };
      const expectedResult = {
        ...initialState,
        isLoading: false,
        error: 'Не удалось получить заказы'
      };
      const newState = orderReducer(initialState, action);
      expect(newState).toEqual(expectedResult);
    });
  });
  describe('fetchOrderBurgerApi', () => {
    test('fetchOrderBurgerApi:pending', () => {
      const action = {
        type: fetchOrderBurgerApi.pending.type
      };
      const expectedResult = {
        ...initialState,
        orderRequest: true,
        error: null
      };
      const newState = orderReducer(initialState, action);
      expect(newState).toEqual(expectedResult);
    });

    test('fetchOrderBurgerApi:fulfilled', () => {
      const action = {
        type: fetchOrderBurgerApi.fulfilled.type,
        payload: { order: mockInitialtState.orderRequestData }
      };
      const expectedResult = {
        ...initialState,
        error: null,
        orderRequest: false,
        orderRequestData: mockInitialtState.orderRequestData
      };
      const newState = orderReducer(initialState, action);
      expect(newState).toEqual(expectedResult);
    });
    test('fetchOrderBurgerApi.rejected', () => {
      const action = {
        type: fetchOrderBurgerApi.rejected.type
      };
      const expectedResult = {
        ...initialState,
        orderRequest: false,
        error: 'Не удалось oтправить заказ'
      };
      const newState = orderReducer(initialState, action);
      expect(newState).toEqual(expectedResult);
    });
  });
  describe('fetchGetOrderByNumber', () => {
    test('fetchGetOrderByNumber:pending', () => {
      const action = {
        type: fetchGetOrderByNumber.pending.type
      };
      const expectedResult = {
        ...initialState,
        orderRequest: true,
        error: null
      };
      const newState = orderReducer(initialState, action);
      expect(newState).toEqual(expectedResult);
    });

    test('fetchGetOrderByNumber:fulfilled', () => {
      const action = {
        type: fetchGetOrderByNumber.fulfilled.type,
        payload: { orders: [mockInitialtState.orderInfo] }
      };
      const expectedResult = {
        ...initialState,
        error: null,
        orderRequest: false,
        orderInfo: mockInitialtState.orderInfo
      };
      const newState = orderReducer(initialState, action);
      expect(newState).toEqual(expectedResult);
    });
    test('fetchGetOrderByNumber.rejected', () => {
      const action = {
        type: fetchGetOrderByNumber.rejected.type
      };
      const expectedResult = {
        ...initialState,
        orderRequest: false,
        error: 'Не удалось получить заказ'
      };
      const newState = orderReducer(initialState, action);
      expect(newState).toEqual(expectedResult);
    });
  });
});
