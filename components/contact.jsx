import React from "react";
import getConfig from "next/config";
import axios from "axios";


const { publicRuntimeConfig } = getConfig();


export default function Contact() {

	const [formState, setFormState] = React.useState({});
	const [message, setMessage] = React.useState("Disabled");

	const handleSubmit = (e) => {
		e.preventDefault();
		setMessage("Loading...");
		
		axios.post(publicRuntimeConfig.NAP_CONTACT_WEBHOOK, {...formState})
			.then(() => setMessage("Sent!"))
			.catch(() => setMessage("Error!"));
	};

	
	const handleChange = (e) => {
		const stateCopy = {...formState};

		stateCopy[e.target.name] = e.target.value;

		setFormState(stateCopy);
	};


	return (
		<section className="py-4 md:py-12" id="contact">
			<div className="container px-4 mx-auto">
				<div className="flex flex-wrap -mx-3">
					<div className="w-full lg:w-1/2 px-3 text-center lg:text-left">
						<div>
							<h2 className="mt-2 text-4xl font-bold font-heading">Still have questions?</h2>
							<h3 className="my-2 text-3xl font-heading">Intrested in a demo?</h3>
							<span className="text-sm text-blueGray-400">Contact Us</span>
						</div>
						<div className="mt-10">
							<div className="mb-10 leading-relaxed">
								<a href="tel:2522435151">
									<h3 className="text-sm font-bold">Phone</h3>
									<p>(252) 243-5151</p>
								</a>
							</div>
							<div className="mb-10 leading-relaxed">
								<a href="mailto:contact@nashandpine.com">
									<h4 className="text-sm font-bold">E-mail</h4>
									<p>contact@nashandpine.com</p>
								</a>
							</div>
							<div className="mb-10 leading-relaxed">
								<a href="https://www.google.com/maps/place/126+Nash+St,+Wilson,+NC+27893/@35.7265226,-77.9118342,3a,75y,49.28h,90t/data=!3m7!1e1!3m5!1suWdLwlXH4x9sFASmVd4g0w!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DuWdLwlXH4x9sFASmVd4g0w%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D49.275272%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656!4m5!3m4!1s0x89ae9e11f2463067:0x11e82fb553cee021!8m2!3d35.7266678!4d-77.9116124" target="_blank" rel="noreferrer">
									<h4 className="text-sm font-bold">Address</h4>
									<p>126 Nash St. W.</p>
									<p>Wilson, North Carolina 27893</p>
								</a>
							</div>
						</div>
					</div>

					<div className="w-full lg:w-1/2 px-3">
						<div className="flex items-center h-full">
							
							<form 
								onSubmit={handleSubmit}
								className="w-full" 
								onChange={handleChange}
							>
								<div className="mb-4">
									<input 
										required
										className="w-full p-4 text-xs font-semibold leading-none bg-blue-50 rounded outline-none" 
										type="email" placeholder="Work email" name="email"
									/>
								</div>

								<div className="mb-4">
									<input 
										required
										className="w-full p-4 text-xs font-semibold leading-none bg-blue-50 rounded outline-none" 
										type="phone" placeholder="Work phone" name="phone"
									/>
								</div>

								<div className="mb-4">
									<input 
										required
										className="w-full p-4 text-xs font-semibold leading-none bg-blue-50 rounded outline-none" 
										type="text" placeholder="Subject" name="subject"
									/>
								</div>

								<div className="mb-4">
									<input 
										required
										className="w-full p-4 text-xs font-semibold leading-none bg-blue-50 rounded outline-none" 
										type="text" placeholder="Name" name="name"
									/>
								</div>

								<div className="mb-4">
									<input 
										required
										className="w-full p-4 text-xs font-semibold leading-none bg-blue-50 rounded outline-none" 
										type="text" placeholder="Company" name="company"
									/>
								</div>

								<div className="mb-4">
									<textarea 
										required
										className="w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-blue-50 rounded outline-none" 
										type="text" placeholder="Message..." name="message"
									>
									</textarea>
								</div>

								<div className="flex justify-between items-center">
									{(message === "Disabled") && <button className="w-full py-4 px-8 text-sm text-white font-semibold leading-none bg-gray-600 rounded" style={{ pointerEvents: "none" }} type="submit" disabled>{message}</button>}	
									{(message === "Loading...") && <button className="w-full py-4 px-8 text-sm text-white font-semibold leading-none bg-gray-600 rounded" disabled>{message}</button>}
									{(message === "Sent!") && <button className="w-full py-4 px-8 text-sm text-white font-semibold leading-none bg-green-600 rounded" disabled>{message}</button>}	
									{(message === "Error!") && <button className="w-full py-4 px-8 text-sm text-white font-semibold leading-none bg-red-600 rounded" disabled>{message}</button>}	
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}