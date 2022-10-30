require('file-loader?name=[name].[ext]!./index.html');
import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)