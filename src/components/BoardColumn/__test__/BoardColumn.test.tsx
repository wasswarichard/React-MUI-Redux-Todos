import React from "react";
import BoardColumn from "../BoardColumn";
import Enzyme, { shallow } from 'enzyme';
import {cleanup} from "@testing-library/react";
import Adapter from 'enzyme-adapter-react-16';
import TestRenderer from 'react-test-renderer';
Enzyme.configure({ adapter: new Adapter() })

describe('<BoardColumn>', () => {

    afterEach(cleanup)
    const todoElements = [
        {userId: 1, id: 1, title: "DONE", completed: true, status: "DONE"},
        {userId: 2, id: 2, title: "DONE", completed: true, status: "DONE"}
    ]
    const statusChange = () => {};
    it('renders BoardColumn Component', () => {
        shallow(<BoardColumn title="DONE" todos= {todoElements} setStatusChange={statusChange}/>);
    });

    it('should match snapshot', function () {
        const tree = TestRenderer.create(<BoardColumn title="DONE" todos= {todoElements} setStatusChange={statusChange}/>).toJSON();
        expect(tree).toMatchSnapshot();

    });
});