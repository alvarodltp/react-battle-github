import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from './components/Popular'

//component
//state
//Lifecycle
//UI

class App extends React.Component {
	render(){
		return(
			<Popular />
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)