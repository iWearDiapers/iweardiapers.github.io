class App extends React.Component {
	constructor(props) {
    super(props);
    
    this.state = {
		}
	}
	
	render() {
		return (
			<div>
				<div className = ''/>
				<textarea />
				{marked('# Marked in browser\n\nRendered by **marked**.');}
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