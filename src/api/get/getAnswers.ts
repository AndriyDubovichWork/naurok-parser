import axios from 'axios';

const getAnswers: any = async (
	topic: string,
	grade: number,
	subjectID: string,
	questionsQuantity: string
) => {
	return await axios.get(
		`http://localhost:3000/?topic=${topic}&grade=${grade}&subjectID=${subjectID}&questionsQuantity=${questionsQuantity}`
		// 'https://naurokparserapi-production.up.railway.app/?topic=україна в умовах десталінізації&grade=11&subjectID=8&questionsQuantity=23'
	);
};

export default getAnswers;
