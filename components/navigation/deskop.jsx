


export default function DesktopNav() {
	return (
		<nav className="flex justify-between items-center py-6">
			<a className="text-3xl font-semibold leading-none" href="#">
				<img className="h-10" src="metis-assets/logos/metis/metis.svg" alt="" width="auto" />
			</a>
			<div className="lg:hidden">
				<button className="navbar-burger flex items-center py-2 px-3 text-blue-600 hover:text-blue-700 rounded border border-blue-200 hover:border-blue-300">
					<svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<title>Mobile menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
					</svg>
				</button>
			</div>
			<ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
				<li><a className="text-sm text-blueGray-400 hover:text-blueGray-500" href="#">Features</a></li>
				<li><a className="text-sm text-blueGray-400 hover:text-blueGray-500" href="#">Websites</a></li>
				<li><a className="text-sm text-blueGray-400 hover:text-blueGray-500" href="#">FAQ</a></li>
				<li><a className="text-sm text-blueGray-400 hover:text-blueGray-500" href="#">Something here</a></li>
			</ul>
			<div className="hidden lg:block">
				<a className="mr-2 inline-block px-4 py-3 text-xs text-blue-600 hover:text-blue-700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded" href="#">
                Support
				</a>
				<a className="inline-block px-4 py-3 text-xs font-semibold leading-none bg-blue-600 hover:bg-blue-700 text-white rounded" href="#">
                Request a demo
				</a>
			</div>
		</nav>
	);
}