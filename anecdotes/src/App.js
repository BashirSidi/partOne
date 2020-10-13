import React, { useState } from 'react';

const App = () => {
	const [ Selected, setSelected ] = useState(0);
	const [ Vote, setVote ] = useState([]);
	const anecdotes = [
		'If it hurts, do it more often',
		'Adding manpower to a late software project makes it later',
		'The first 90 percent of the code accounts for the first 90 percent of the development time... The remaining 10 percent of the code accounts for the other 90 percent of the development time',
		'Any fool can write a code that computer can understand, Good programmers writes code that humans can understand',
		'Premature optimizations is the roots of all evils',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write code as cleverly as possible, you are, by defination, not smart enough to debug it.'
	];
	const rand = Math.floor(Math.random() * 6);
	const points = new Array(6 + 1).join('0').split('').map(parseFloat);
	const copy = [ ...points ];
	// const votes = Vote.filter((pVote) => pVote === Selected).length;
	return (
		<div>
			<h1>{anecdotes[Selected]}</h1>
			<h3>Has {copy[Selected]} vote.</h3>
			<button onClick={() => setVote([ ...Vote, rand ])}>vote</button>
			<button
				onClick={() => {
					setSelected(rand);
				}}
			>
				next anecdotes
			</button>
		</div>
	);
};

export default App;
