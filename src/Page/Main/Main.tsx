import React, { useEffect, useState } from 'react';
import getAnswers from '../../api/get/getAnswers';
import getSubjectIDs from '../../api/get/getSubjectIDs';
import InputForm from '../../components/Form/InputsForm/InputsForm';
import SubjectsIpnut from '../../components/Form/Subjects/Subjects';

const Main = () => {
	const [Answers, setAnswers] = useState([]);
	const [subjects, setSubjects] = useState([]);

	useEffect(() => {
		getSubjectIDs().then((value: any) => {
			setSubjects(value.data);
		});
	}, []);

	return (
		<div>
			<InputForm subjects={subjects} setAnswers={setAnswers} />
			{Answers
				? Answers.map((data: any) => {
						return (
							<a href={data.link} key={data.link}>
								{data.link}
							</a>
						);
				  })
				: 'error'}
		</div>
	);
};

export default Main;
