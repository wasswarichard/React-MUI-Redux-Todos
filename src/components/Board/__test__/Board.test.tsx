import React from 'react';
import Board from '../Board';
import Enzyme, { shallow } from 'enzyme';
import { cleanup } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
Enzyme.configure({ adapter: new Adapter() });

describe('<Board>', () => {
  afterEach(cleanup);
  const todoElements = [
    { userId: 1, id: 1, title: 'DONE', completed: true, status: 'DONE' },
    { userId: 2, id: 2, title: 'DONE', completed: true, status: 'DONE' },
  ];
  const statusChange = () => {};
  const mockStore = configureStore();
  let store;

  it('renders BoardColumn Component', () => {
    shallow(<Board todos={todoElements} setStatusChange={statusChange} />);
  });

  it('should match snapshot', function () {
    store = mockStore(todoElements);
    const tree = TestRenderer.create(
      <Provider store={store}>
        <Board todos={todoElements} setStatusChange={statusChange} />
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
