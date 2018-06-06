import React from 'react';

const Text = () => {
	return (
		<div className="pa4 ma4">
			<p className="foo">We’re already using an arrow function, but our filter() method can still be cleaned up even more. That’s because when returning a value from an arrow function, you can remove the brackets in the function to indicate that is the value you want to return. The below code is exactly equal to the above code:
			Just like above, this code will test each value in our array to determine if the population is greater than 500 million. If it is, a true value is returned which will add the element to the cities array!</p>
		</div>
	)
}
export default Text;