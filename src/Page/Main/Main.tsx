import React, { useEffect, useState } from 'react';
import getSubjectIDs from '../../api/get/getSubjectIDs';
import InputForm from '../../components/Form/InputsForm/InputsForm';
import NotFound from '../NotFound';

const Main = () => {
	const [Answers, setAnswers] = useState([]);
	const [subjects, setSubjects] = useState([]);
	const [error, setError] = useState('');

	useEffect(() => {
		getSubjectIDs().then((value: any) => {
			setSubjects(value.data);
		});
	}, []);

	return (
		<div>
			<InputForm subjects={subjects} setAnswers={setAnswers} setError={setError} />

			{error}
			<ol>
				{Answers ? (
					Answers.map((data: any) => {
						return (
							<li key={data.link}>
								<a href={data.link}>{data.link}</a>
							</li>
						);
					})
				) : (
					<NotFound />
				)}
			</ol>
		</div>
	);
};

export default Main;
