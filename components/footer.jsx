


export default function Footer() {
	return (
		<section className="pt-20 mb-10"><div className="container px-4 mx-auto pt-8 border-t-4">
			<div className="flex flex-wrap mb-12 lg:mb-20 -mx-3 text-center lg:text-left">
				<div className="w-full lg:w-1/5 px-3 mb-6 lg:mb-0">
					<a className="inline-block mx-auto lg:mx-0 text-3xl font-semibold leading-none" href="#">
						<img className="h-10" src="logo.svg" alt="" width="auto" />
					</a>
				</div>

				<div className="w-full lg:w-2/5 px-3 mb-8 lg:mb-0">
					<p className="max-w-md mx-auto lg:max-w-full lg:mx-0 lg:pr-32 lg:text-lg leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo.</p>
				</div>

				<div className="w-full lg:w-1/5 px-3 mb-8 lg:mb-0">
					<p className="mb-2 lg:text-lg font-bold font-heading text-blueGray-800">Office</p>
					<p className="text-sm">126 Nash St. W.</p>
					<p className="text-sm">Wilson, NC 27893</p>
				</div>

				<div className="w-full lg:w-1/5 px-3">
					<p className="mb-2 lg:text-lg font-bold font-heading text-blueGray-800">Contact</p>
					<p className="text-sm">contact@nashandpine.com</p>
					<p className="text-sm">(252) 243-5151</p>
				</div>

			</div>

			<p className="text-xs text-center">© 2021. All rights reserved.</p>
			<div className="flex flex-col lg:flex-row items-center lg:justify-between">
			</div>
		</div>
		</section>
	);
}