class App extends React.Component {
	constructor(props) {
    super(props);
    
    this.state = {
		}
	}
	
	renderMarkdown(str) {
		return marked(str);
	}
	
	render() {
		return (
			<div>
				<div className = ''/>
				<textarea />
				<div dangerouslySetInnerHTML={{__html: this.renderMarkdown('# Marked in browser\n\nRendered by **marked**.')}}></div>
				<h1>THIS IS AFTER MARKDOWN</h1>
			</div>
		);
	}
}

const app = (
  <App />
);

ReactDOM.render(
  app,
  document.getElementById("root")
);