import React, { useEffect, useState } from 'react';
import getAnswers from '../../api/get/getAnswers';

const Main = () => {
	const [Answers, setAnswers] = useState([]);

	useEffect(() => {
		getAnswers().then((res: any) => {
			setAnswers(res.data);
		});
	}, []);
	useEffect(() => {
		console.log(Answers);
	}, [Answers]);
	return (
		<div>
			{Answers
				? Answers.map((data: any) => {
						return <div>{data.link}</div>;
				  })
				: 'loading'}
		</div>
	);
};

export default Main;
