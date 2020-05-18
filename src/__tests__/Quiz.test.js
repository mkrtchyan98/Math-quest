import Quiz from '../components/Quiz';
import React from 'react';
import { shallow, mount,render } from "enzyme";
import { MemoryRouter } from 'react-router-dom';
import exportFunctions from '../helpers/Question';
import Header from '../components/Header';

jest.mock('../helpers/Question')


	describe('<Quiz />',() => {
	test('renders snapshot',() => {
		const wrapper = shallow(<Quiz  operator="+"/>);
		expect(wrapper).toMatchSnapshot();
	})
	it('renders with props',()=>{
		const wrapper = mount (
					 <MemoryRouter initialEntries={[ {pathname:'/add'} ]} initialIndex={0}>
		<Quiz  operator="+"/>
		</MemoryRouter>)
		expect(wrapper.find(Header)).toHaveLength(1)
		exportFunctions.Question( "single","+")
		expect(exportFunctions.Question).toHaveBeenCalledWith("single","+")
		
	})

	})
