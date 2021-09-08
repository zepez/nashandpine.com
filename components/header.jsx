import DesktopNav from "./navigation/deskop";
import MobileNav from "./navigation/mobile";


export default function Header() {
	return (
		<section className="xl:bg-contain bg-top bg-no-repeat">
			<div className="container px-4 mx-auto">
				{/* desktop navigation  */}
				<DesktopNav />

				{/* call to action text  */}
				<div className="pt-12 text-center">
					<div className="max-w-lg mx-auto mb-8">
						<h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading">
							<span>The quick brown fox jumps over the lazy dog.</span>
						</h2>
						{/* <p className="text-blueGray-400 leading-relaxed">The quick brown fox jumps over the lazy dog.</p> */}
					</div>
				</div>
			</div>

			{/* splash background  */}
			<div className="relative max-w-6xl mt-16 md:mt-8 mb-8 mx-auto">
				<img src="metis-assets/elements/pattern.png" alt="" />
				<div className="absolute" style={{ top: "9%", left: "14%", width: "72%", height: "66%" }}>
					<img className="rounded" src="metis-assets/placeholders/metis-dashboard.png" alt="" />
				</div>
			</div>

			{/* mobile navigation  */}
			<MobileNav />
		</section>
	);
}