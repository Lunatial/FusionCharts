import React, {Component,} from 'react'
import dynamic from 'next/dynamic'

class Loading extends Component {
    render () {
        return <p>Loading...</p>
    }
}

const App = dynamic(() => import('../components/'), {
    'loading': Loading,
    'ssr':     false,
  })

  export default App