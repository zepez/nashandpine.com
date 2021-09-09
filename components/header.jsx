import DesktopNav from "./navigation/deskop";
import MobileNav from "./navigation/mobile";


export default function Header() {
	return (
		<section className="xl:bg-contain bg-top bg-no-repeat" id="home">
			<div className="container px-4 mx-auto">
				{/* desktop navigation  */}
				<DesktopNav />

				{/* call to action text  */}
				<div className="pt-12 text-center">
					<div className="max-w-lg mx-auto mb-6">
						<h2 className="text-5xl md:text-7xl mb-4 font-bold font-heading">
							<span>Nash & Pine.</span>
						</h2>
						<p className="leading-relaxed text-md md:text-xl">Take your first step in the journey of online monetization.</p>
					</div>
				</div>
			</div>

			{/* splash background  */}
			{/* <div className="relative max-w-6xl mt-16 md:mt-8 mb-8 mx-auto">
				<img src="metis-assets/elements/pattern.png" alt="" />
				<div className="absolute" style={{ top: "9%", left: "14%", width: "72%", height: "66%" }}>
					<img className="rounded-lg border-8 border-white glow" src="web-example-new.png" alt="" />
				</div>
			</div> */}
			<div className="max-w-4xl mt-12 mb:pb-24 mx-auto">
				<img className="rounded-lg glow" src="screenshot-old.png" alt="" />
			</div>

			{/* mobile navigation  */}
			<MobileNav />
		</section>
	);
}