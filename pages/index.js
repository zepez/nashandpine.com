import GlobalMeta from "../components/meta";
import Head from "next/head";
import Header from "../components/header";
import Features from "../components/features";
import Projects from "../components/projects";
import Faq from "../components/faq";
import Contact from "../components/contact";
import Footer from "../components/footer";


const Meta = () => {
	return (
		<Head>		
			<title>Nash&Pine — Websites that let your message shine</title>
			<meta name="title" content="Nash&Pine — Websites that let your message shine" />
			<meta name="description" content="Websites built to your specifications with your viewer in mind." />

			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://nashandpine.com" />
			<meta property="og:title" content="Nash&Pine — Websites that let your message shine" />
			<meta property="og:description" content="Websites built to your specifications with your viewer in mind." />
			<meta property="og:image" content="https://nashandpine.com/logos/nap/share.jpg" />

			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="https://nashandpine.com" />
			<meta property="twitter:title" content="Nash&Pine — Websites that let your message shine" />
			<meta property="twitter:description" content="Websites built to your specifications with your viewer in mind." />
			<meta property="twitter:image" content="https://nashandpine.com/logos/nap/share.jpg" />
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
				<Projects />
				<Faq />   
				<Contact />   
			</div>      
			<Footer />   
		</div>
	);
}
