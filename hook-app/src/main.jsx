import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import { HooksApp } from './HooksApp';
import { CounterApp } from "./01-useState/CounterApp"
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook"
import { SimpleForm } from './02-userEffect/SimpleForm';
import { SimpleFormCustomHook } from './02-userEffect/SimpleFormCustomHook';
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
import { FoucsScreen } from './04-useRef/FocusScreen';
import { Layout } from './05-useLayputEffect/Layout';
import { Memorize } from './06-memos/Memorize';
import { MemorizeHook } from './06-memos/MemorizeHook';
import { CallbackHook } from './06-memos/CallbackHook';
import { TodoApp } from './07-useReducer/TodoApp';
import { MainApp } from './08-useContext/MainApp';


import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  </React.StrictMode>
);
