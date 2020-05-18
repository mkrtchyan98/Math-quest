import React from 'react';
import { shallow, mount,render } from "enzyme";
import { MemoryRouter } from 'react-router-dom';
import Categories from '../components/Categories';
import Answer from '../components/Answer';
import Header from '../components/Header';
import Puzzle from '../components/Puzzle';
import Results from '../components/Results';
import Quiz from '../components/Quiz';


function setup() {
  const props = {
    
    data: {
    questionString: "7 + 2 =  ?",
    correctAnswer: 9,
    answers: [7, 8, 9, 4],
    handleClick:jest.fn() 
  }
    
    
  }

  const enzymeWrapper = mount(<Puzzle {...props} />)

  return {
    props,
    enzymeWrapper
  }
}


describe('<Answer />',() => {
	test('renders snapshot',() => {
		const wrapper = shallow(<Answer />);
		expect(wrapper).toMatchSnapshot();
	});

	it('renders button',() => {
		const props ={
			value:4,
			handleClick:jest.fn(),
			counter:0

		}
		const wrapper = mount(<Answer  {...props} />);
		expect(wrapper.find('button').text()).toEqual('4');
	    expect(wrapper.find('button').simulate('click'));
	    expect(props.handleClick).toBeCalled();

	})
	})


	describe('<Header />',() => {
	test('renders snapshot',() => {
		const wrapper = shallow(<Header />);
		expect(wrapper).toMatchSnapshot();
	})
})


	describe('<Puzzle />',() => {
	test('renders snapshot',() => {
		const {enzymeWrapper} = setup();
		expect(enzymeWrapper).toMatchSnapshot();
	});
	it('renders Answer init',() => {
		const {enzymeWrapper} = setup();
		expect(Answer).toHaveLength(1);
	})
})



	describe('<Results />',() => {
	test('renders snapshot',() => {
		const wrapper = shallow(<Results />);
		expect(wrapper).toMatchSnapshot();
	})
})


	describe('<Categories />',() => {
	test('renders snapshot',() => {
		const wrapper = shallow(<Categories />);
		expect(wrapper).toMatchSnapshot();
	});

	it('valid path should  redirect to NotFound',() => {
		const wrapper = mount (
			 <MemoryRouter initialEntries={[ '/adfd' ]} initialIndex={0}>
             <Categories/>
    		 </MemoryRouter>
    		 )
    expect(wrapper.find(Quiz)).toHaveLength(0);
	})
})

