import React from 'react';
import Todos from '../Todos';
import Enzyme, { shallow } from 'enzyme';
import { cleanup } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import TestRenderer from 'react-test-renderer';
Enzyme.configure({ adapter: new Adapter() });

describe('<Todos>', () => {
  afterEach(cleanup);

  it('renders BoardColumn Component', () => {
    shallow(<Todos />);
  });

  it('should match snapshot', function () {
    const tree = TestRenderer.create(<Todos />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
