import React from "react";
import { shallow } from "enzyme";
import CounterButton from "./CounterButton";

// Doing basic shallow test to see if component renders
// how we would expect it to.
it("renders without crashing", () => {
  expect(shallow(<CounterButton />)).toMatchSnapshot();
});

it("correnctly increments the counter", () => {
  // Making a shallow copy of our CounterButton
  // and storing it in a variable.
  const wrapper = shallow(<CounterButton />);

  // Now we can refer to the <CounterButton /> with our
  // variable.
  expect(wrapper).toMatchSnapshot();

  // In the <CounterButt /> component we added a id="counter"
  // to the button in the render method of the component.
  // This allows us to grap the button and with the
  // .simulate() method we can simulate an action such as
  // a click.
  wrapper.find('[id="counter"]').simulate("click");

  // We write our expect seeing if the state from the component
  // is now {count: 1}
  expect(wrapper.state()).toEqual({ count: 1 });

  // Simulating more clicks. Remember this is JS
  // everything will go in sequence until the function ends.
  wrapper.find('[id="counter"]').simulate("click");
  wrapper.find('[id="counter"]').simulate("click");

  // The button has been clicked 3 times by now so we expect our
  // count to be 3 in the end.
  expect(wrapper.state()).toEqual({ count: 3 });
});
