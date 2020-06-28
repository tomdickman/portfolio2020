import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';
import 'normalize.css';
import './index.css'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/pro-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(
  faBars,
  fab
)

ReactDOM.render(<App />, document.getElementById('root'));