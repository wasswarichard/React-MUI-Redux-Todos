import React from 'react';
import TodosList from '../TodosList';
import Enzyme from 'enzyme';
import { cleanup, render } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TestRenderer from 'react-test-renderer';
import TodoCard from '../../TodoCard/TodoCard';
Enzyme.configure({ adapter: new Adapter() });

describe('<TodosList>', () => {
  afterEach(cleanup);
  const todoElements = [
    { userId: 1, id: 1, title: 'DONE', completed: true, status: 'DONE' },
    { userId: 2, id: 2, title: 'DONE', completed: true, status: 'DONE' },
  ];
  const statusChange = () => {};
  const mockStore = configureStore();
  let store;

  it('renders BoardColumn Component', () => {
    store = mockStore(todoElements);
    render(
      <Provider store={store}>
        <TodosList todos={todoElements} setStatusChange={statusChange} />
      </Provider>
    );
  });

  it('should match snapshot', function () {
    store = mockStore(todoElements);
    const tree = TestRenderer.create(
      <Provider store={store}>
        <TodosList todos={todoElements} setStatusChange={statusChange} />
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
