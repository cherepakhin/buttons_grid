import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <App var1="value_var_1"/>,
  document.getElementById('root')
);

// Statistic report. See in console for detail
// Time to First Byte (TTFB)
// First Contentful Paint (FCP)
// Largest Contentful Paint (LCP)
// Cumulative Layout Shift (CLS)
// https://wanago.io/2022/02/07/measuring-performance-web-vitals-react/

reportWebVitals(console.log)