import React from 'react';
import { ThemeProvider } from '@mui/material';
import Main from './Page/Main/Main';
import { lightTheme } from './themes/light';

function App() {
	return (
		<ThemeProvider theme={lightTheme}>
			<Main />
		</ThemeProvider>
	);
}

export default App;
