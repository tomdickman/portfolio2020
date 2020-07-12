import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'normalize.css'
import './index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'   

library.add(
  fab,
  far
)

ReactDOM.render(<App />, document.getElementById('root'));