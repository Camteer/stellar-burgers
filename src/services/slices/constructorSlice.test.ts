import { expect, describe, test } from '@jest/globals';
import {
  addIngredient,
  clearIngredient,
  constructorReducer,
  deleteIngredient,
  initialState,
  moveIngredient
} from './constructorSlice';

describe('constructorReducer', () => {
  const ingredients = [
    {
      _id: '643d69a5c3f7b9001cfa093c',
      name: 'Краторная булка N-200i',
      type: 'bun',
      proteins: 80,
      fat: 24,
      carbohydrates: 53,
      calories: 420,
      price: 1255,
      image: 'https://code.s3.yandex.net/react/code/bun-02.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
      __v: 0
    },
    {
      _id: '643d69a5c3f7b9001cfa0941',
      name: 'Биокотлета из марсианской Магнолии',
      type: 'main',
      proteins: 420,
      fat: 142,
      carbohydrates: 242,
      calories: 4242,
      price: 424,
      image: 'https://code.s3.yandex.net/react/code/meat-01.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/meat-01-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/meat-01-large.png',
      __v: 0
    },
    {
      _id: '643d69a5c3f7b9001cfa093e',
      name: 'Филе Люминесцентного тетраодонтимформа',
      type: 'main',
      proteins: 44,
      fat: 26,
      carbohydrates: 85,
      calories: 643,
      price: 988,
      image: 'https://code.s3.yandex.net/react/code/meat-03.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/meat-03-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/meat-03-large.png',
      __v: 0
    },
    {
      _id: '643d69a5c3f7b9001cfa0942',
      name: 'Соус Spicy-X',
      type: 'sauce',
      proteins: 30,
      fat: 20,
      carbohydrates: 40,
      calories: 30,
      price: 90,
      image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/sauce-02-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/sauce-02-large.png',
      __v: 0
    }
  ];
  test('addIngredient:bun', () => {
    const expectedResult = { ...initialState, bun: ingredients[0] };
    const newState = constructorReducer(
      initialState,
      addIngredient(ingredients[0])
    );
    expect(newState).toMatchObject(expectedResult);
  });
  test('addIngredient:ingredient', () => {
    const expectedResult = { ...initialState, ingredients: [ingredients[1]] };
    const newState = constructorReducer(
      initialState,
      addIngredient(ingredients[1])
    );
    expect(newState).toMatchObject(expectedResult);
  });

  test('moveIngredient', () => {
    const expectedResult = {
      bun: { ...ingredients[0], id: '3' },
      ingredients: [
        { ...ingredients[1], id: '1' },
        { ...ingredients[2], id: '2' }
      ]
    };
    const newState = constructorReducer(
      {
        bun: { ...ingredients[0], id: '3' },
        ingredients: [
          { ...ingredients[2], id: '2' },
          { ...ingredients[1], id: '1' }
        ]
      },
      moveIngredient({ index: 0, move: -1 })
    );

    expect(newState).toEqual(expectedResult);
  });

  test('deleteIngredient', () => {
    const expectedResult = {
      bun: { ...ingredients[0], id: '3' },
      ingredients: [{ ...ingredients[1], id: '1' }]
    };
    const newState = constructorReducer(
      {
        bun: { ...ingredients[0], id: '3' },
        ingredients: [
          { ...ingredients[1], id: '1' },
          { ...ingredients[2], id: '2' }
        ]
      },
      deleteIngredient({ ...ingredients[2], id: '2' })
    );

    expect(newState).toEqual(expectedResult);
  });
  test('clearIngredient', () => {
    const expectedResult = {
      bun: null,
      ingredients: []
    };
    const newState = constructorReducer(
      {
        bun: { ...ingredients[0], id: '3' },
        ingredients: [
          { ...ingredients[1], id: '1' },
          { ...ingredients[2], id: '2' }
        ]
      },
      clearIngredient()
    );

    expect(newState).toEqual(expectedResult);
  });
});
