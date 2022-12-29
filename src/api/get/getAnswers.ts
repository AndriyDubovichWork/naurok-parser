import axios from 'axios';

const getAnswers: any = async (
	topic: string,
	grade: number,
	subjectID: string,
	questionsQuantity: string,
	setError: any
) => {
	return await axios
		.get(
			`https://naurok-parser-api.onrender.com/?topic=${topic}&grade=${grade.toString()}&subjectID=${subjectID.toString()}&questionsQuantity=${questionsQuantity.toString()}`,
			// 'https://naurokparserapi-production.up.railway.app/?topic=україна в умовах десталінізації&grade=11&subjectID=8&questionsQuantity=23'
			{ withCredentials: false }
		)
		.catch((error) => {
			setError(error.response.data);
		});
};

export default getAnswers;
