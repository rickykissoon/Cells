import '../styles/globals.css'
import type { AppProps } from 'next/app';
import Cell from "../components/Cell";
import React, { useState, useEffect, useContext } from "react";

function MyApp({ Component, pageProps }: AppProps) {
	const [reset, setReset] = useState<Boolean>(false);
	var cellCount: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	useEffect(() => {
		if(reset) {
			setReset(false);
		}
	}, [reset, setReset]);

	return(
		<>
		{cellCount && cellCount.map((index) => (
			<Cell key={index} number={index} reset={reset} />
		))}
		<button onClick={() => setReset(!reset)}>RESET</button>
		</>
  );
}

export default MyApp
