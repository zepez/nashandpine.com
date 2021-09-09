


export default function Cloud(props) {
	return (
		<a href={props.link} target="_blank" rel="noreferrer">
			<div className={`bg-blue-100 flex items-center justify-center rounded px-${props.width.mobile} py-${props.height.mobile} md:py-${props.height.desktop} md:px-${props.width.desktop}`}>
				<img src={`logos/${props.logo}.svg`} alt={props.logo} className="inverted" />
			</div>
		</a>
	);
}