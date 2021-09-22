import Head from "next/head";
import GlobalMeta from "../components/meta";
import DesktopNav from "../components/navigation/deskop";
import MobileNav from "../components/navigation/mobile";
import Footer from "../components/footer";


const Meta = () => {
	return (
		<Head>		
			<title>Nash&Pine — Website directory</title>
			<meta name="title" content="Nash&Pine — Website directory" />
			<meta name="description" content="Nash&Pine website directory" />

			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://nashandpine.com/directory" />
			<meta property="og:title" content="Nash&Pine — Website directory" />
			<meta property="og:description" content="More than 90% of individuals start their search for goods and services online. What opportunities are you missing?" />
			<meta property="og:image" content="https://nashandpine.com/logos/nap/share.jpg" />

			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="https://nashandpine.com/directory" />
			<meta property="twitter:title" content="Nash&Pine — Website directory" />
			<meta property="twitter:description" content="More than 90% of individuals start their search for goods and services online. What opportunities are you missing?" />
			<meta property="twitter:image" content="https://nashandpine.com/logos/nap/share.jpg" />
		</Head>
	);
};


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
			<GlobalMeta />
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