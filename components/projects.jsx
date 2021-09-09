import Cloud from "./cloud";


export default function Projects() {
	return (
		<section className="py-12 md:py-8" id="projects">
			<div className="container px-4 mx-auto">
				{/* text  */}
				<div className="max-w-lg mx-auto mb-12 text-center">
					<span className="">Lorem ipsum</span>
					<h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading">Trusted by publications all across the world.</h2>
					<p className="text-blueGray-400 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.</p>
				</div>

				{/* start images  */}
				<div className="flex flex-wrap lg:flex-nowrap lg:items-center max-w-lg lg:max-w-full mx-auto">
					<div className="w-full lg:w-1/4 p-3">
						<Cloud logo="enterprise" height={{ desktop: 12, mobile: 4 }} width={{ desktop: 6, mobile: 16 }} link="https://springhopeenterprise.com" />
					</div>

					<div className="w-full lg:w-2/4 flex flex-col">
						<div className="md:flex md:items-end">
							<div className="w-full lg:w-2/3 p-3">
								<Cloud logo="wilsontimes" height={{ desktop: 20, mobile: 6 }} width={{ desktop: 6, mobile: 8 }} link="https://wilsontimes.com" />
							</div>
							<div className="w-full lg:w-1/3 p-3">
								<Cloud logo="dailydrum" height={{ desktop: 16, mobile: 6 }} width={{ desktop: 4, mobile: 8 }} link="https://dailydrummedia.com" />
							</div>
						</div>

						<div className="md:flex md:items-start">
							<div className="w-full lg:w-1/3 p-3">
								<Cloud logo="butnercreedmoor" height={{ desktop: 16, mobile: 4 }} width={{ desktop: 4, mobile: 16 }} link="https://butnercreedmoornews.com" />
							</div>
							<div className="w-full lg:w-2/3 p-3">
								<Cloud logo="robinson" height={{ desktop: 20, mobile: 6 }} width={{ desktop: 12, mobile: 28 }} link="https://robdailynews.com/" />
							</div>
						</div>

					</div>
					
					<div className="w-full lg:w-1/4 p-3">
						<Cloud logo="wakeweekly" height={{ desktop: 16, mobile: 6 }} width={{ desktop: 4, mobile: 8 }} link="https://wakeweekly.com" />
					</div>
				</div>
			</div>
		</section>
	);
}