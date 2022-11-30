import React, { useEffect, useState } from 'react';
import getAnswers from '../../api/get/getAnswers';
import InputForm from '../../components/Form/InputsForm/InputsForm';

const Main = () => {
	const [Answers, setAnswers] = useState([]);

	// useEffect(() => {
	// 	getAnswers().then((res: any) => {
	// 		setAnswers(res.data);
	// 	});
	// }, []);

	return (
		<div>
			<InputForm />
			{/* {Answers
				? Answers.map((data: any) => {
						return <div>{data.link}</div>;
				  })
				: 'error'} */}
		</div>
	);
};

export default Main;
