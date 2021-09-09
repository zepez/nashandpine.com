import Meta from "../components/meta";
import Header from "../components/header";
import Features from "../components/features";
import Projects from "../components/projects";
import Faq from "../components/faq";
import Contact from "../components/contact";
import Footer from "../components/footer";


export default function Home() {
	return (
		<div className="mx-8 md:mx-0">
			<Meta />	
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
