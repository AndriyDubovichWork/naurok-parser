import React, { useState } from 'react';
import { TextField } from '@mui/material';
import TextInput from '../../UI/TextInput/TextInput';

const InputForm = () => {
	return (
		<div>
			<TextInput />
			<TextField variant='outlined' label='topic' sx={{ color: '#fff' }} />
			<TextField variant='outlined' label='grade' sx={{ color: '#fff' }} />
			<TextField variant='outlined' label='subjectID' sx={{ color: '#fff' }} />
		</div>
	);
};

export default InputForm;
