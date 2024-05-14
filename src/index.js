import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/ds/style.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import './component/bootstrap.min.css';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <I18nextProvider i18n={i18next}>
    <React.StrictMode>
      <React.Suspense fallback='loading'>
        <App/>
      </React.Suspense>
    </React.StrictMode>
  // </I18nextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
