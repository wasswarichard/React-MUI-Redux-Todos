import React from 'react';
import TodoCard from '../TodoCard';
import Enzyme from 'enzyme';
import { cleanup, render } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
Enzyme.configure({ adapter: new Adapter() });

describe('<TodoCard>', () => {
  afterEach(cleanup);

  const statusFunction = () => {};
  const todoElement = {
    userId: 1,
    id: 1,
    title: 'DONE',
    completed: true,
    status: 'DONE',
  };

  const mockStore = configureStore();
  let store;

  it('renders BoardColumn Component', () => {
    store = mockStore(todoElement);
    render(
      <Provider store={store}>
        <TodoCard
          todo={todoElement}
          usage="board"
          setStatusChange={statusFunction}
        />
      </Provider>
    );
  });

  it('should match snapshot', function () {
    store = mockStore(todoElement);
    const tree = TestRenderer.create(
      <Provider store={store}>
        <TodoCard
          todo={todoElement}
          usage="board"
          setStatusChange={statusFunction}
        />
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
