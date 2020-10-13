import React, { useState } from 'react';

const Statistics = (props) => {
	let Good = props.Good;
	let Neutral = props.Neutral;
	let Bad = props.Bad;
	let all = Good + Neutral + Bad;
	return (
		<div>
			<h1>Statistics</h1>
			<Statistic text="Good" value={Good} />
			<Statistic text="Neutral" value={Neutral} />
			<Statistic text="Bad" value={Bad} />
			<Statistic text="All" value={all} />
			<Statistic text="Average" value={all / 3} />
		</div>
	);
};

const Statistic = (props) => {
	return (
		<div>
			<table>
				<thead>
					<tr>
						<td rowSpan={2} />
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{props.text}</td>
						<td>{props.value}</td>
					</tr>
				</tbody>
			</table>
			<br />
		</div>
	);
};

const App = () => {
	const [ Good, setGood ] = useState(0);
	const [ Neutral, setNeutral ] = useState(0);
	const [ Bad, setBad ] = useState(0);
	let all = Good + Neutral + Bad;
	return (
		<div>
			<h1>Give Feedback</h1>
			<div>
				<button onClick={() => setGood(Good + 1)}>Good</button>
				<button onClick={() => setNeutral(Neutral + 1)}>Neutral</button>
				<button onClick={() => setBad(Bad + 1)}>Bad</button>
			</div>
			<br />
			{all <= 0 ? 'No feedback' : <Statistics Good={Good} Neutral={Neutral} Bad={Bad} />}
		</div>
	);
};

export default App;
