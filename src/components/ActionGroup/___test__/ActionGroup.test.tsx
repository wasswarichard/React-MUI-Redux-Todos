import React from 'react';
import ActionGroup from '../ActionGroup';
import Enzyme, { shallow } from 'enzyme';
import { cleanup, screen, render } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import TestRenderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
Enzyme.configure({ adapter: new Adapter() });

describe('<ActionGroup>', () => {
  afterEach(cleanup);

  const statusFunction = () => {};
  it('renders BoardColumn Component', async () => {
    render(
      <ActionGroup
        disableApprove={true}
        disableDecline={false}
        declineTodo={statusFunction}
        approveTodo={statusFunction}
      />
    );
    expect(await screen.findByRole('button', { name: /Decline/i })).toBeEnabled();

    // userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
  });

  it('should match snapshot', function () {
    const tree = TestRenderer.create(
      <ActionGroup
        disableApprove={true}
        disableDecline={false}
        declineTodo={statusFunction}
        approveTodo={statusFunction}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
