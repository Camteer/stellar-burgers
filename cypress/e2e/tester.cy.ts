beforeEach(function () {
  cy.intercept('GET', 'api/ingredients', { fixture: 'ingredients.json' }).as(
    'ingredients'
  );
  cy.intercept('GET', 'api/auth/user', { fixture: 'user.json' }).as('user');
  cy.setCookie('accessToken', 'accessToken');
  localStorage.setItem('refreshToken', 'refreshToken');
  cy.visit('/');
  cy.get('h3').as('title');
  cy.get('div').as('container')
});

describe('Тестирование добавления ингредиентов из списка в конструктор.', function () {
  it('Добавления булки', function () {
    cy.get('@title')
      .contains('Булки')
      .next('ul')
      .children()
      .first()
      .contains('Добавить')
      .click();
    cy.get('@container').contains('Выберите булки').should('not.exist');
  });
  it('Добавления начинки', function () {
    cy.get('@title')
      .contains('Начинки')
      .next('ul')
      .children()
      .first()
      .contains('Добавить')
      .click();
    cy.get('@container').contains('Выберите начинку').should('not.exist');
  });
  it('Добавления соуса', function () {
    cy.get('@title')
      .contains('Соусы')
      .next('ul')
      .children()
      .first()
      .contains('Добавить')
      .click();
    cy.get('@container').contains('Выберите начинку').should('not.exist');
  });
});

describe('Тестировние работы модальных окон', function () {
  beforeEach(function () {
    cy.get('@title').contains('Булки').next('ul').children().first().click();
  });
  it('Открытие модального окна ингредиента', function () {
    cy.get('#modals').children().first().should('be.visible');
  });
});
describe('Закрытие модального окна', () => {
  beforeEach(function () {
    cy.get('@title').contains('Булки').next('ul').children().first().click();
  });
  it('Закрытие по клику на крестик', function () {
    cy.get('#modals').find('button').click();
    cy.get('#modals').should('be.empty');
    cy.get('@container').contains('Детали ингредиента').should('not.exist');
  });
  it('Закрытие по клику на esc', function () {
    cy.get('body').type('{esc}');
    cy.get('#modals').should('be.empty');
    cy.get('@container').contains('Детали ингредиента').should('not.exist');
  });
  it('Закрытие по клику на оверлею', function () {
    cy.get('#modals').children().last().click('top', { force: true });
    cy.get('#modals').should('be.empty');
    cy.get('@container').contains('Детали ингредиента').should('not.exist');
  });
});
describe('Тестирование создания заказа', function () {
  beforeEach(function () {
    cy.intercept('POST', 'api/orders', { fixture: 'order.json' }).as('order');
  });
  it('проверка процесса добавление ингридиентов для заказа и его оформление', function () {
    cy.get('@title')
      .contains('Булки')
      .next('ul')
      .children()
      .first()
      .contains('Добавить')
      .click();
    cy.get('@title')
      .contains('Начинки')
      .next('ul')
      .children()
      .first()
      .contains('Добавить')
      .click();
    cy.get('@title')
      .contains('Соусы')
      .next('ul')
      .children()
      .first()
      .contains('Добавить')
      .click();
    cy.get('@container').contains('Выберите булки').should('not.exist');
    cy.get('@container').contains('Выберите начинку').should('not.exist');
    cy.get('button').contains('Оформить заказ').click();
    cy.get('#modals').should('not.be.empty');
    cy.get('#modals').find('h2').contains('48010').should('exist');
    cy.get('#modals').find('button').click();
    cy.get('#modals').should('be.empty');
    cy.get('@container').contains('Выберите булки').should('exist');
    cy.get('@container').contains('Выберите начинку').should('exist');
  });
});
