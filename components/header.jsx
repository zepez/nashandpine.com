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
						<p className="leading-relaxed text-md md:text-xl">Websites that let your message shine.</p>
					</div>
				</div>
			</div>

			{/* single big image  */}
			<div className="block md:flex mt-12 mb:pb-24 mx-auto px-0 md:px-8">
				<img className="rounded-lg md:w-1/3 px-1 mx-auto my-2" src="screenshot_02.png" alt="" />
				<img className="rounded-lg md:w-1/3 px-1 mx-auto my-2" src="screenshot_01.png" alt="" />
				<img className="rounded-lg md:w-1/3 px-1 mx-auto my-2" src="screenshot_03.png" alt="" />
			</div>

			{/* mobile navigation  */}
			<MobileNav />
		</section>
	);
}