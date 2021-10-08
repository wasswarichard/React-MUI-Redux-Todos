import React from "react";
import ActionGroup from "../ActionGroup";
import Enzyme, { shallow } from 'enzyme';
import {cleanup} from "@testing-library/react";
import Adapter from 'enzyme-adapter-react-16';
import TestRenderer from 'react-test-renderer';
Enzyme.configure({ adapter: new Adapter() })

describe('<ActionGroup>', () => {
    afterEach(cleanup)

    const statusFunction = () => {};
    it('renders BoardColumn Component', () => {
        shallow(<ActionGroup disableApprove={true} disableDecline={false} declineTodo={statusFunction} approveTodo={statusFunction}/>);
    });

    it('should match snapshot', function () {
        const tree = TestRenderer.create(<ActionGroup disableApprove={true} disableDecline={false} declineTodo={statusFunction} approveTodo={statusFunction}/>).toJSON();
        expect(tree).toMatchSnapshot();

    });
});