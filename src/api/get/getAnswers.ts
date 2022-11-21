import axios from 'axios';

const getAnswers: any = async () => {
	return await axios.get(
		'https://naurokparserapi-production.up.railway.app/?topic=україна в умовах десталінізації&grade=11&subjectID=8&questionsQuantity=23'
	);
};

export default getAnswers;
