import {createRoot} from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter } from 'react-router-dom';

import Spotlight from '@enact/spotlight';

// DEV ONLY: expose for debugging
if (process.env.NODE_ENV !== 'production') {
	window.Spotlight = Spotlight;
}

const appElement = (
	<BrowserRouter>
		<AuthProvider>
			<App />
		</AuthProvider>
	</BrowserRouter>
	);

// In a browser environment, render instead of exporting
if (typeof window !== 'undefined') {
	const container = document.getElementById('root');
	createRoot(container).render(appElement);
}

export default appElement;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint.
// Learn more: https://github.com/enactjs/cli/blob/master/docs/measuring-performance.md
reportWebVitals(console.log);
