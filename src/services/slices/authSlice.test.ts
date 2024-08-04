import { expect, describe, test } from '@jest/globals';
import {
  fetchGetUser,
  fetchLoginUser,
  fetchLogoutUser,
  fetchRegisterUser,
  fetchUpdateUser,
  initialState,
  userReducer
} from './authSlice';
import { error } from 'console';

describe('authSlicer', () => {
  const userData = {
    email: 'qqq@bk.ru',
    name: 'qqq'
  };

  describe('fetchRegisterUser', () => {
    test('fetchRegisterUser:pending', () => {
      const action = {
        type: fetchRegisterUser.pending.type
      };
      const expectedResult = {
        ...initialState,
        isAuthChecked: false,
        error: null
      };
      const newState = userReducer(initialState, action);
      expect(newState).toEqual(expectedResult);
    });
    test('fetchRegisterUser:fulfilled', () => {
      const action = {
        type: fetchRegisterUser.fulfilled.type,
        payload: userData
      };
      const expectedResult = {
        ...initialState,
        isAuthChecked: true,
        data: userData
      };
      const newState = userReducer(initialState, action);
      expect(newState).toEqual(expectedResult);
    });
    test('fetchRegisterUser:rejected', () => {
      const action = {
        type: fetchRegisterUser.rejected.type
      };
      const expectedResult = {
        ...initialState,
        isAuthChecked: true,
        error: 'Не удалось зарегистрировать пользователя'
      };
      const newState = userReducer(initialState, action);
      expect(newState).toEqual(expectedResult);
    });
  });
  describe('fetchLoginUser', () => {
    test('fetchLoginUser:pending', () => {
      const action = {
        type: fetchLoginUser.pending.type
      };
      const expectedResult = {
        ...initialState,
        isAuthChecked: false,
        error: null
      };
      const newState = userReducer(initialState, action);
      expect(newState).toEqual(expectedResult);
    });
    test('fetchLoginUser:fulfilled', () => {
      const action = {
        type: fetchLoginUser.fulfilled.type,
        payload: userData
      };
      const expectedResult = {
        ...initialState,
        isAuthChecked: true,
        data: userData
      };
      const newState = userReducer(initialState, action);
      expect(newState).toEqual(expectedResult);
    });
    test('fetchLoginUser:rejected', () => {
      const action = {
        type: fetchLoginUser.rejected.type
      };
      const expectedResult = {
        ...initialState,
        isAuthChecked: true,
        error: 'Не удалось войти'
      };
      const newState = userReducer(initialState, action);
      expect(newState).toEqual(expectedResult);
    });
  });
  describe('fetchGetUser', () => {
    test('fetchGetUser:pending', () => {
      const action = {
        type: fetchGetUser.pending.type
      };
      const expectedResult = {
        ...initialState,
        isAuthChecked: false,
        error: null
      };
      const newState = userReducer(initialState, action);
      expect(newState).toEqual(expectedResult);
    });
    test('fetchGetUser:fulfilled', () => {
      const action = {
        type: fetchGetUser.fulfilled.type,
        payload: { user: userData }
      };
      const expectedResult = {
        ...initialState,
        isAuthChecked: true,
        data: userData
      };
      const newState = userReducer(initialState, action);
      expect(newState).toEqual(expectedResult);
    });
    test('fetchGetUser:rejected', () => {
      const action = {
        type: fetchGetUser.rejected.type
      };
      const expectedResult = {
        ...initialState,
        isAuthChecked: true,
        error: 'Не удалось получить данные о пользователе'
      };
      const newState = userReducer(initialState, action);
      expect(newState).toEqual(expectedResult);
    });
  });
  describe('fetchLogoutUser', () => {
    test('fetchLogoutUser:pending', () => {
      const action = {
        type: fetchLogoutUser.pending.type
      };
      const expectedResult = {
        ...initialState,
        isAuthChecked: false,
        error: null
      };
      const newState = userReducer(initialState, action);
      expect(newState).toEqual(expectedResult);
    });
    test('fetchLogoutUser:fulfilled', () => {
      const action = {
        type: fetchLogoutUser.fulfilled.type
      };
      const expectedResult = {
        ...initialState,
        data: null
      };
      const newState = userReducer(initialState, action);
      expect(newState).toEqual(expectedResult);
    });
    test('fetchLogoutUser:rejected', () => {
      const action = {
        type: fetchLogoutUser.rejected.type
      };
      const expectedResult = {
        ...initialState,
        error: 'Не удалось выйти из аккаунта'
      };
      const newState = userReducer(initialState, action);
      expect(newState).toEqual(expectedResult);
    });
  });
  describe('fetchUpdateUser', () => {
    test('fetchUpdateUser:pending', () => {
      const action = {
        type: fetchUpdateUser.pending.type
      };
      const expectedResult = {
        ...initialState,
        data: null,
        error: null
      };
      const newState = userReducer(initialState, action);
      expect(newState).toEqual(expectedResult);
    });
    test('fetchUpdateUser:fulfilled', () => {
      const action = {
        type: fetchUpdateUser.fulfilled.type,
        payload: { user: userData }
      };
      const expectedResult = {
        ...initialState,
        error: null,
        data: userData
      };
      const newState = userReducer(initialState, action);
      expect(newState).toEqual(expectedResult);
    });
    test('fetchUpdateUser:rejected', () => {
      const action = {
        type: fetchUpdateUser.rejected.type
      };
      const expectedResult = {
        ...initialState,
        error: 'Не удалось обновить пользователя'
      };
      const newState = userReducer(initialState, action);
      expect(newState).toEqual(expectedResult);
    });
  });
});
