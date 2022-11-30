import React from 'react';
import { Button, TextField } from '@mui/material';

const StyledButton = (props: any) => {
	return (
		<>
			<Button
				{...props}
				variant='filled'
				label='hello'
				sx={{ color: 'primary', backgroundColor: 'primary' }}
			/>
		</>
	);
};

export default StyledButton;
