


export default function Footer() {
	return (
		<section className="pt-20 mb-10"><div className="container px-4 mx-auto pt-8 border-t-4">
			<div className="flex flex-wrap mb-12 lg:mb-20 -mx-3 text-center lg:text-left">
				<div className="w-full lg:w-1/5 px-3 mb-6 lg:mb-0 flex items-center justify-center">
					<a className="inline-block mx-auto lg:mx-0 text-3xl font-semibold leading-none" href="#home">
						{/* <img className="h-16" src="logo_03.svg" alt="" width="auto" /> */}
						<img className="h-16" src="logo_02.svg" alt="" width="auto" />
						{/* <img className="h-24" src="logo_full_01.jpg" alt="" width="auto" /> */}
					</a>
				</div>

				<div className="w-full lg:w-2/5 px-3 mb-8 lg:mb-0 flex items-center">
					<p className="max-w-md mx-auto lg:max-w-full lg:mx-0 lg:pr-32 lg:text-lg leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo.</p>
				</div>

				<div className="w-full lg:w-1/5 px-3 mb-8 lg:mb-0">
					<a href="https://www.google.com/maps/place/126+Nash+St,+Wilson,+NC+27893/@35.7265226,-77.9118342,3a,75y,49.28h,90t/data=!3m7!1e1!3m5!1suWdLwlXH4x9sFASmVd4g0w!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DuWdLwlXH4x9sFASmVd4g0w%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D49.275272%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656!4m5!3m4!1s0x89ae9e11f2463067:0x11e82fb553cee021!8m2!3d35.7266678!4d-77.9116124" target="_blank" rel="noreferrer">
						<p className="mb-2 lg:text-lg font-bold font-heading text-blueGray-800">Office</p>
						<p className="text-sm">126 Nash St. W.</p>
						<p className="text-sm">Wilson, NC 27893</p>
					</a>
				</div>

				<div className="w-full lg:w-1/5 px-3">
					<p className="mb-2 lg:text-lg font-bold font-heading text-blueGray-800">Contact</p>
					<a href="mailto:contact@nashandpine.com"><p className="text-sm">contact@nashandpine.com</p></a>
					<a href="tel:2522435151"><p className="text-sm">(252) 243-5151</p></a>
				</div>

			</div>

			<p className="text-xs text-center">© 2021. All rights reserved.</p>
			<div className="flex flex-col lg:flex-row items-center lg:justify-between">
			</div>
		</div>
		</section>
	);
}