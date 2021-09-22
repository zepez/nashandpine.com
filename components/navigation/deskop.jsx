


export default function DesktopNav() {
	return (
		<nav className="flex justify-between items-center py-6 border-b-4">
			<a className="text-3xl font-semibold leading-none" href="/#home">
				<img className="h-12" src="/logos/nap/short.svg" alt="" width="126px" />
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
				<li><a className="text-sm hover:text-blueGray-500" href="/#features">Features</a></li>
				<li><a className="text-sm hover:text-blueGray-500" href="/#projects">Websites</a></li>
				<li><a className="text-sm hover:text-blueGray-500" href="/#faq">FAQ</a></li>
				<li><a className="text-sm hover:text-blueGray-500" href="/directory">Directory</a></li>
			</ul>
			<div className="hidden lg:block">
				<a className="inline-block px-4 py-3 text-xs font-semibold leading-none bg-blue-600 hover:bg-blue-700 text-white rounded" href="#contact">
					Request a demo
				</a>
			</div>
		</nav>
	);
}