import React from 'react';
import BoardColumn from '../BoardColumn';
import Enzyme, { shallow } from 'enzyme';
import { cleanup, render } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import TestRenderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import TodosList from '../../TodosList/TodosList';
Enzyme.configure({ adapter: new Adapter() });

describe('<BoardColumn>', () => {
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
        <BoardColumn title="DONE" todos={todoElements} setStatusChange={statusChange} />
      </Provider>
    );
  });

  it('should match snapshot', function () {
    store = mockStore(todoElements);
    const tree = TestRenderer.create(
      <Provider store={store}>
        <BoardColumn title="DONE" todos={todoElements} setStatusChange={statusChange} />
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
