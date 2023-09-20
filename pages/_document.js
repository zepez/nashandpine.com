import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.14/tailwind.min.css" integrity="sha512-WoalYHon7sXFbGCM10NaiwPXNShZVByyZeCogItyhUvTEabYY8UQCqs2JuhI/N2mSrefc36K13s7zKt24Lcupg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
