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