import Head from "next/head";


export default function Header() {
	return (
		<Head>
			<title>Nash and Pine</title>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
			{/* <meta name="description" content=""> */}
			<meta name="author" content="nashandpine.com" />
			<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.14/tailwind.min.css" integrity="sha512-WoalYHon7sXFbGCM10NaiwPXNShZVByyZeCogItyhUvTEabYY8UQCqs2JuhI/N2mSrefc36K13s7zKt24Lcupg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
			<script src="main.js" />
			{/* <link rel="icon" type="image/png" sizes="16x16" href="favicon-tailwind.png" /> */}
		</Head>
	);
}