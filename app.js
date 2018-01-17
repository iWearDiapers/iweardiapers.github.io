class App extends React.Component {
	constructor(props) {
    super(props);
    
    this.state = {
    	inText: ""
		}
	}
	
	
	handleTextChange(e) {
		this.setState(
			{
				inText: e.target.value
			}
		)
	}
	
	
	render() {
		return (
			<div>
				<UserInput
					content = {this.state.inText}
					controlFunc = {this.handleTextChange.bind(this)}
				/>
				<Review inText = {this.state.inText}/>
			</div>
		);
	}
}


function UserInput(props) {
  return (
  	<textarea
  		onChange = {props.controlFunc}
  	>
  	</textarea>
  );
}

function Review(props) {
	return (
		<div
			dangerouslySetInnerHTML = {{__html:
				marked(props.inText)}}
		/>
	);
}

const app = (
  <App />
)

ReactDOM.render(
  app,
  document.getElementById("root")
)