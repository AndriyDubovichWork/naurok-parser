import axios from 'axios';

const getSubjectIDs: any = async () => {
	return await axios.get('https://naurok-parser-api.onrender.com/subjects');
};

export default getSubjectIDs;
