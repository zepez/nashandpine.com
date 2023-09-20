import Head from "next/head";
import Script from "next/script";

export default function GlobalMeta() {
	return (
		<Head>		
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
			<meta name="author" content="Alex Zepezauer" />

			<meta property="og:type" content="website" />
			<meta property="og:image" name="image" content="https://nashandpine.com/logos/nap/share.jpg" />

			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:image" content="https://nashandpine.com/logos/nap/share.jpg" />
			<Script src="main.js" />
		</Head>
	);
}