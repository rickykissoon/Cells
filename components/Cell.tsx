import React, { useState, useEffect, useCallback } from "react";
import styles from "./cells.module.css";

interface CellProps {
	number: number;
	reset: Boolean;
}

const Cell = ({number, reset}: CellProps) => {
	const [clickCount, setClickCount] = useState(0);
	const [isCircle, setIsCircle] = useState('');

	const cellColor = () => {
		switch(clickCount) {
			case 0: 
				return styles.cellDefault;
			case 1: 
				return styles.cellRed;
			case 2: 
				return styles.cellBlue;
			case 3: 
				return styles.cellGreen;
		}
	}
	
	function cellSelect() {
		var count = clickCount;

		if(count < 3) {
			count++;
		} else {
			count = 0;
		}

		setClickCount(count);
	}

	const onLoadIsOdd = () => {
		if(number % 2 === 1) {
			setClickCount(3);
		}
	}

	const makeCircle = useCallback(() => {
		if(clickCount === 1) {
			setIsCircle(`${styles.circle}`);
		} else {
			setIsCircle('');
		}
	},[clickCount]);

	useEffect(() => {
		onLoadIsOdd();
	}, []);

	useEffect(() => {
		if(reset) {
			setClickCount(0);
			onLoadIsOdd();
		}
	}, [reset]);

	useEffect(() => {
		makeCircle();
	}, [clickCount, makeCircle]);


	return (
		<div className={`${styles.cellStyle} ${cellColor()} ${isCircle}`} onClick={cellSelect}>{number}</div>
	)
}

export default Cell;