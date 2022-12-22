import { AutocompleteRenderInputParams, Select } from 'formik-mui';

import { CircularProgress, InputAdornment, MenuItem, TextField } from '@mui/material';
import { Field } from 'formik';
import React from 'react';
import { subjectType } from '../../../types/subject';

type SubjectsIpnutType = { subjects: subjectType[] };

const SubjectsIpnut = ({ subjects }: SubjectsIpnutType) => {
	const loading = subjects.length === 0;
	return (
		<>
			<Field
				type='number'
				name='subjectID'
				component={Select}
				variant='filled'
				sx={{ width: '300px' }}
			>
				{loading ? (
					<CircularProgress />
				) : (
					subjects.map((subject: subjectType) => {
						return (
							<MenuItem
								key={+subject.id}
								value={subject.id}
								sx={{ color: '#fff', backgroundColor: '#000' }}
							>
								{subject.subject}
							</MenuItem>
						);
					})
				)}
			</Field>
		</>
	);
};

export default SubjectsIpnut;
