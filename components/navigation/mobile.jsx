


export default function MobileNav() {
	return (
		<div className="hidden navbar-menu relative z-50">
			<div className="navbar-backdrop fixed inset-0 bg-blueGray-800 opacity-25"></div>
			<nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
				<div className="flex items-center mb-8">
					<a className="mr-auto text-3xl font-semibold leading-none" href="#">
						<img className="h-10" src="metis-assets/logos/metis/metis.svg" alt="" width="auto" />
					</a>
					<button className="navbar-close">
						<svg className="h-6 w-6 text-blueGray-400 cursor-pointer hover:text-blueGray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
					</button>
				</div>
				<div>
					<ul>
						<li className="mb-1"><a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600" href="#">Features</a></li>
						<li className="mb-1"><a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600" href="#">Websites</a></li>
						<li className="mb-1"><a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600" href="#">FAQ</a></li>
						<li className="mb-1"><a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600" href="#">Something here</a></li>
					</ul>
					<div className="mt-4 pt-6 border-t border-blueGray-100">
						<a className="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 text-white rounded" href="#">Request a demo</a>
						<a className="block px-4 py-3 mb-2 text-xs text-center text-blue-600 hover:text-blue-700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded" href="#">Support</a>
					</div>
				</div>
				<div className="mt-auto">
					<p className="my-4 text-xs text-blueGray-400">
						<span>Request a demo</span>
						<a className="text-blue-600 hover:text-blue-600 underline" href="#">info@example.com</a>
					</p>
					<a className="inline-block px-1" href="#">
						<img src="metis-assets/icons/facebook-blue.svg" alt="" />
					</a>
					<a className="inline-block px-1" href="#">
						<img src="metis-assets/icons/twitter-blue.svg" alt="" />
					</a>
					<a className="inline-block px-1" href="#">
						<img src="metis-assets/icons/instagram-blue.svg" alt="" />
					</a>
				</div>
			</nav>
		</div> 
	);
}