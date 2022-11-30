import React, { useState } from 'react';
import { TextField, TextFieldProps } from 'formik-mui';
import StyledButton from '../../UI/StyledButton/StyledButton';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TestInputschema from '../../../schemas/TestInput';
import { Button } from '@mui/material';

const InputForm = () => {
	return (
		<Formik
			initialValues={{ topic: '', grade: '', subjectID: '', questionsQuantity: '' }}
			onSubmit={(values, actions) => {
				setTimeout(() => {
					console.log(values);
					actions.resetForm();
				}, 5000);
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
							name='subjectID'
							variant='filled'
							component={TextField}
							label='subject ID'
						/>

						<Field
							type='number'
							name='questionsQuantity'
							variant='filled'
							component={TextField}
							label='questions Quantity'
						/>
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
