


export default function Features() {
	return (
		<section className="py-20" id="features">
			<div className="container px-4 mx-auto">
				<div className="flex flex-wrap -mx-8">
					<div className="w-full lg:w-1/2 px-12">
						<div className="mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0">
							<h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading">Sed ac magna sit amet risus tristique interdum.</h2>
							<p className="mb-4 leading-loose text-blueGray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla, sed porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.</p>
							<p className="mb-8 leading-loose text-blueGray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla, sed porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.</p>
							{/* <a className="inline-block text-xs py-4 px-8 text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded" href="#">Learn More</a> */}
						</div>
					</div>
					<div className="w-full lg:w-1/2 px-12">
						<ul className="space-y-12 md:space-y-8">
							<li className="md:flex -mx-4">
								<div className="px-4">
									<span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">🔥</span>
								</div>
								<div className="px-4">
									<h3 className="my-4 text-xl font-semibold">Custom</h3>
									<p className="text-blueGray-400 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.</p>
								</div>
							</li>
							<li className="md:flex -mx-4">
								<div className="px-4">
									<span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">⏱</span>
								</div>
								<div className="px-4">
									<h3 className="my-4 text-xl font-semibold">Time Saving</h3>
									<p className="text-blueGray-400 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.</p>
								</div>
							</li>
							<li className="md:flex -mx-4">
								<div className="px-4">
									<span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">📱</span>
								</div>
								<div className="px-4">
									<h3 className="my-4 text-xl font-semibold">Optimized</h3>
									<p className="text-blueGray-400 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}