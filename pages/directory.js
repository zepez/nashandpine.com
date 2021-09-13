import Meta from "../components/meta";
import DesktopNav from "../components/navigation/deskop";
import MobileNav from "../components/navigation/mobile";
import Footer from "../components/footer";


const ListItem = (props) => {
	return (
		<li className={"directory-list-item mb-2 " + props.className}>
			<a href={(props.noSsl ? "http://"  : "https://") + props.domain} target="_blank" rel="noreferrer">{props.children}</a>
		</li>
	);
};


const SiteList = (props) => {
	return (
		<div className="py-8">
			<ListItem domain={props.main.domain} className="font-bold text-2xl md:text-4xl">{props.main.name}</ListItem>
			<ul className="directory-list">
				{props.sub.map((sub, subIndex) => {
					return <ListItem domain={sub.domain} key={subIndex} noSsl={sub.noSsl}>{sub.name}</ListItem>;
				})}
			</ul>
		</div>
	);
};


export default function Directory() {
	return (
		<div className="mx-8 md:mx-0">
			<Meta />	
			<div className="container px-4 mx-auto">
				<DesktopNav />
			</div>
			<MobileNav />


			<div className="container text-xl md:text-2xl mt-16 mx-auto">
				<ul className="directory-list -my-8 divide-y divide-gray-200">
					{/* restoration  */}
					<SiteList 
						main={{name: "Restoration NewsMedia", domain: "restorationnewsmedia.com"}} 
						sub={[ 
							{name: "The Wilson Times", domain: "wilsontimes.com"},
							{name: "The Enterprise", domain: "springhopeenterprise.com"},
							{name: "The Johnstonian", domain: "johnstoniannews.com"},
							{name: "The Butner-Creedmoor News", domain: "butnercreedmoornews.com"},
							{name: "The Wake Weekly", domain: "wakeweekly.com"},
							{name: "Wide Awake", domain: "wideawakenc.com", noSsl: true}
						]}
					/>

					{/* roblaw  */}
					<SiteList 
						main={{name: "RobLaw News", domain: "roblawnews.com"}} 
						sub={[ 
							{name: "Robinson Daily News", domain: "robdailynews.com"},
							{name: "Lawrenceville Daily Record", domain: "lawdailyrecord.com"}
						]}
					/>

					{/* wilson rotary club */}
					<SiteList 
						main={{name: "Wilson Rotary Club", domain: "wilsonrotary.com"}} 
						sub={[]}
					/>

					{/* dailydrum */}
					<SiteList 
						main={{name: "The Daily Drum", domain: "dailydrummedia.com"}} 
						sub={[]}
					/>
				</ul>
			</div>
			
			<Footer />  
		</div>
	);
}