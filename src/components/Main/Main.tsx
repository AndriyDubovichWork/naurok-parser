import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import getAnswers from '../../api/get/getAnswers';

const Main = () => {
	const [Answers, setAnswers] = useState([]);

	useEffect(() => {
		getAnswers().then((res: any) => {
			setAnswers(res.data);
		});
	}, []);

	return (
		<div>
			<TextField variant='outlined' label='topic' />
			<TextField variant='outlined' label='grade' />
			<TextField variant='outlined' label='subjectID' />
			{Answers
				? Answers.map((data: any) => {
						return <div>{data.link}</div>;
				  })
				: 'error'}
		</div>
	);
};

export default Main;
