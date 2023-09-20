import "../styles/globals.css";


function App({ Component, pageProps }) {
	return (
		<>
			<div className="bg-yellow-500 font-semibold py-2 text-center">
				<code>nashandpine.com</code> is defunct. This site is for demonstration purposes only.
			</div>
			<Component {...pageProps} />
		</>
	);
}


export default App;
