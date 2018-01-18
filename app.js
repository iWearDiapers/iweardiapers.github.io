class App extends React.Component {
	constructor(props) {
    super(props);
    
    this.state = {
    	inText: "\
    		\r# H1\n## H2\n ### H3\n\
				\rAlternatively, for H1 and H2, an underline-ish style:\
				\rAlt-H1\
				\r======\
				\rAlt-H2\
				\r------\
				\rHorizontal lines with '---'\
				\r\
				\r---\
				\rEmphasis, aka italics, with *asterisks* or _underscores_.\
				\rStrong emphasis, aka bold, with **asterisks** or __underscores__.\
				\rCombined emphasis with **asterisks and _underscores_**.\
				\rStrikethrough uses two tildes. ~~Scratch this.~~\
			"
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
				<Review
					inText = {this.state.inText}
				/>
			</div>
		);
	}
}


function UserInput(props) {
	

  return (
  	<textarea
			className = "view"
  		onChange = {props.controlFunc}
  		value = {props.content}
  	>
  	</textarea>
  );
}

function Review(props) {
	return (
		<div
			className = "view pre"
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