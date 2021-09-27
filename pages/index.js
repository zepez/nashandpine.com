import GlobalMeta from "../components/meta";
import Head from "next/head";
import Header from "../components/header";
import Features from "../components/features";
import Breakout from "../components/breakout";
import Faq from "../components/faq";
import Contact from "../components/contact";
import Footer from "../components/footer";


const Meta = () => {
	return (
		<Head>		
			<title>Nash&Pine — Websites that let your message shine</title>
			<meta name="title" content="Nash&Pine — Websites that let your message shine" />
			<meta name="description" content="In today’s digital-first world having an online presence is more important than ever. Many individuals start with the internet to learn about goods and services. Let Nash&Pine help you broaden your reach with a professionally designed website that..." />

			<meta property="og:url" content="https://nashandpine.com" />
			<meta property="og:title" content="Nash&Pine — Websites that let your message shine" />
			<meta property="og:description" content="In today’s digital-first world having an online presence is more important than ever. Many individuals start with the internet to learn about goods and services. Let Nash&Pine help you broaden your reach with a professionally designed website that..." />

			<meta property="twitter:url" content="https://nashandpine.com" />
			<meta property="twitter:title" content="Nash&Pine — Websites that let your message shine" />
			<meta property="twitter:description" content="In today’s digital-first world having an online presence is more important than ever. Many individuals start with the internet to learn about goods and services. Let Nash&Pine help you broaden your reach with a professionally designed website that..." />
		</Head>
	);
};


export default function Home() {
	return (
		<div className="mx-8 md:mx-0">
			<Meta />	
			<GlobalMeta />	
			<Header />
			<div style={{ maxWidth: 1000, display: "block", margin: "0 auto" }}>
				<Features />      
				<Breakout />
				<Faq />   
				<Contact />   
			</div>      
			<Footer />   
		</div>
	);
}


Home.getInitialProps = async () => {
	return {};
};