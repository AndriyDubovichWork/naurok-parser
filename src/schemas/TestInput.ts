import { object, string, number } from 'yup';

const schema = object({
	topic: string().required('required').min(3),
	grade: number().required('required').positive().max(11).min(1),
	subjectID: string().required('required').max(2),
	questionsQuantity: number().required('required').positive().max(150),
});

export default schema;
