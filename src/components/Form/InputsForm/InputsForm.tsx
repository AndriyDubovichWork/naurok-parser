import React, { useState } from 'react';
import { TextField, Autocomplete } from 'formik-mui';
import { Formik, Form, Field } from 'formik';
import TestInputschema from '../../../schemas/TestInput';
import { Button } from '@mui/material';
import SubjectsIpnut from '../Subjects/Subjects';
import getAnswers from '../../../api/get/getAnswers';
const InputForm = ({ subjects, setAnswers, setError }: any) => {
	return (
		<Formik
			initialValues={{ topic: '', grade: '', subjectID: 1, questionsQuantity: '' }}
			onSubmit={async (values, actions) => {
				const Answers = await getAnswers(
					values.topic,
					values.grade,
					values.subjectID,
					values.questionsQuantity,
					setError
				);
				if (Answers.data.isArray()) {
					console.log(Answers);
					setAnswers(Answers.data);
				} else {
					console.log('error');
				}

				actions.resetForm();
			}}
			validationSchema={TestInputschema}
		>
			{({ isSubmitting, isValid }) => {
				return (
					<Form>
						<Field type='text' name='topic' variant='filled' component={TextField} label='topic' />
						<Field
							type='number'
							name='grade'
							variant='filled'
							component={TextField}
							label='grade'
						/>
						<Field
							type='number'
							name='questionsQuantity'
							variant='filled'
							component={TextField}
							label='questions Quantity'
						/>
						<SubjectsIpnut subjects={subjects} />
						<Button
							disabled={isSubmitting || !isValid}
							type='submit'
							variant='contained'
							sx={{ color: '#fff', backgroundColor: '#000' }}
						>
							Submit
						</Button>
					</Form>
				);
			}}
		</Formik>
	);
};

export default InputForm;
