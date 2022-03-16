function Header() {
	return (
		<nav>
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</nav>
	)
}

function Main() {
	return (
		<main>
			<Hello name="Rafif" />
			<Hello />
			<Hello name="Rafif2" />
			<Hello />
		</main>
	)
}

function Footer() {
	return (
		<footer>
			<h2>Copyright &#169; Rafif Mulia</h2>
			<p>Created by Rafif Mulia</p>
		</footer>
	)
}

function Hello(props) {
	// diluar return js normal
	const getName = () => {
		return "Rafif";
	}

	// dalam return jsx
	return (
		<div>
			<h2>Goodbye {props.name || ''}!</h2>
			<p>abcdefg</p>
		</div>
	)
}

function App() {
	return (
		<div>
			<Header />
			<Main />
			<Footer />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById("root"));