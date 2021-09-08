


export default function Contact() {
	return (
		<section className="py-12" id="contact">
			<div className="container px-4 mx-auto">
				<div className="flex flex-wrap -mx-3">
					<div className="w-full lg:w-1/2 px-3">
						<div className="max-w-sm">
							<h2 className="mt-2 text-4xl font-bold font-heading">Still have questions?</h2>
							<h3 className="my-2 text-3xl font-heading">Intrested in a demo?</h3>
							<span className="text-sm text-blueGray-400">Contact Us</span>
						</div>
						<div className="mt-10">
							<div className="mb-10 leading-relaxed">
								<h3 className="text-sm text-blueGray-400">Phone</h3>
								<p>(252) 243-5151</p>
							</div>
							<div className="mb-10 leading-relaxed">
								<h4 className="text-sm text-blueGray-400">E-mail</h4>
								<p>help@wilsontimes.com</p>
							</div>
							<div className="mb-10 leading-relaxed">
								<h4 className="text-sm text-blueGray-400">Address</h4>
								<p>126 Nash St. W.</p>
								<p>Wilson, North Carolina 27893</p>
							</div>
						</div>
					</div>

					<div className="w-full lg:w-1/2 px-3">
						<form>
							<div className="mb-4">
								<input 
									className="w-full p-4 text-xs font-semibold leading-none bg-blue-50 rounded outline-none" 
									type="text" placeholder="Subject"
								/>
							</div>

							<div className="mb-4">
								<input 
									className="w-full p-4 text-xs font-semibold leading-none bg-blue-50 rounded outline-none" 
									type="text" placeholder="Name"
								/>
							</div>

							<div className="mb-4">
								<input 
									className="w-full p-4 text-xs font-semibold leading-none bg-blue-50 rounded outline-none" 
									type="email" placeholder="Email"
								/>
							</div>

							<div className="mb-4">
								<textarea 
									className="w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-blue-50 rounded outline-none" 
									type="text" placeholder="Message..."
								>
								</textarea>
							</div>

							<div className="flex justify-between items-center">
								{/* <label>
									<input className="mr-1" type="checkbox" name="terms" value="1" />
									<span className="text-sm font-semibold">I agree to terms and conditions.</span>
								</label> */}
								<button className="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded" type="submit">Submit</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}