


export default function MobileNav() {
	return (
		<div className="hidden navbar-menu relative z-50">
			<div className="navbar-backdrop fixed inset-0 bg-blueGray-800 opacity-25"></div>
			<nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
				<div className="flex items-center mb-8">
					<a className="mr-auto text-3xl font-semibold leading-none" href="#home">
						<img className="h-16 ml-4" src="/logos/nap/long.png" alt="" width="auto" />
					</a>
					<button className="navbar-close">
						<svg className="h-6 w-6 text-blueGray-400 cursor-pointer hover:text-blueGray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
					</button>
				</div>
				<div>
					<ul>
						<li className="mb-1"><a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600" href="/#features">Features</a></li>
						<li className="mb-1"><a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600" href="/#faq">FAQ</a></li>
						<li className="mb-1"><a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600" href="/directory">Directory</a></li>
					</ul>
					<div className="mt-4 pt-6 border-t border-blueGray-100">
						<a className="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 text-white rounded" href="#contact">Request a demo</a>
					</div>
				</div>
			</nav>
		</div> 
	);
}