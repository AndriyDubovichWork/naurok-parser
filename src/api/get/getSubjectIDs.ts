import axios from 'axios';

const getSubjectIDs: any = async () => {
	return await axios.get('http://localhost:3000/subjects');
};

export default getSubjectIDs;
