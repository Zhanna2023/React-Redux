import { useState, useCallback } from 'react';
import styles from './app.module.css';

export const App = () => {
	const [num, setNum] = useState(0);
	const [degree, setDegree] = useState(0);
	const [result, setResult] = useState(0);

	const onNumChange = useCallback(
		({ target }) => {
			setNum(target.value);
			setResult(Math.pow(target.value, degree));
		},
		[degree],
	);

	const onDegreeChange = useCallback(
		({ target }) => {
			setDegree(target.value);
			setResult(Math.pow(num, target.value));
		},
		[num],
	);

	return (
		<div className={styles.app}>
			<div>
				{num} в степени {degree} = {result}
			</div>
			<label>
				<span>Число: </span>
				<input type="number" value={num} onChange={onNumChange} />
			</label>
			<label>
				<span>Степень: </span>
				<input type="number" value={degree} onChange={onDegreeChange} />
			</label>
		</div>
	);
};
