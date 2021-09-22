


export default function Faq() {
	return (
		<section className="py-12 md:py-20" id="faq">
			<div className="container px-4 mx-auto">
				<div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-12">
					<div className="flex items-center lg:pr-16 mb-2">
						<h2 className="text-3xl md:text-4xl font-bold font-heading text-center md:text-left">Frequently Asked Questions</h2>
					</div>
					<div className="text-sm lg:text-base lg:w-1/3">
						<p className="leading-loose text-blueGray-500">
							<span>Can&rsquo;t find the answer you&rsquo;re looking for? Write out to our</span>
							<a className="text-blue-600 hover:text-blue-700" href="mailto:contact@nashandpine.com">{" "}customer support team.</a>
						</p>
					</div>
				</div>
				<div className="flex flex-wrap -mx-4">
					<div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
						<h4 className="mb-2 md:mb-4 text-xl font-semibold">How much will my website cost?</h4>
						<p className="text-sm md:text-base leading-loose text-blueGray-500">Pricing is dependent on many factors. Nash&Pine will provide you with a quote that includes all associated cost.</p>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
						<h4 className="mb-2 md:mb-4 text-xl font-semibold">Can I maintain our website?</h4>
						<p className="text-sm md:text-base leading-loose text-blueGray-500">Nash&Pine is happy to build a website that you can maintain and update as needed. We will provide all necessary training and support to make your site successful.</p>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
						<h4 className="mb-2 md:mb-4 text-xl font-semibold">Will you host my site?</h4>
						<p className="text-sm md:text-base leading-loose text-blueGray-500">Pricing includes hosting for you. We will analyze your needs and provide the proper plan that assures your website is stable.</p>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
						<h4 className="mb-2 md:mb-4 text-xl font-semibold">Who owns my domain?</h4>
						<p className="text-sm md:text-base leading-loose text-blueGray-500">You maintain ownership of your domain. If needed we can assist in setting up a new domain but you will have total control over it.</p>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
						<h4 className="mb-2 md:mb-4 text-xl font-semibold">Can you help me if I already have a website?</h4>
						<p className="text-sm md:text-base leading-loose text-blueGray-500">Certainly. If you currently have a website we can build your new one while your existing site is operating. When finished, we will direct to your new website. </p>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
						<h4 className="mb-2 md:mb-4 text-xl font-semibold">Can I use my new website on a mobile phone?</h4>
						<p className="text-sm md:text-base leading-loose text-blueGray-500">All of our websites are mobile-optimized that will look great on Apple and Android devices.</p>
					</div>
				</div>
			</div>
		</section>
	);
}