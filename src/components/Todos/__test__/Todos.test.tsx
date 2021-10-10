import React from 'react';
import Todos from '../Todos';
import Enzyme from 'enzyme';
import { cleanup, render } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TestRenderer from 'react-test-renderer';
import TodoCard from '../../TodoCard/TodoCard';
Enzyme.configure({ adapter: new Adapter() });

describe('<Todos>', () => {
  afterEach(cleanup);
  const todos = [
    { userId: 1, id: 1, title: 'DONE', completed: true, status: 'DONE' },
  ];
  const mockStore = configureStore();
  let store;

  it('renders BoardColumn Component', () => {
    store = mockStore(todos);
    render(
      <Provider store={store}>
        <Todos />
      </Provider>
    );
  });

  it('should match snapshot', function () {
    store = mockStore(todos);
    const tree = TestRenderer.create(
      <Provider store={store}>
        <Todos />
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
