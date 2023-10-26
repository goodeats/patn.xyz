import { Link } from '@remix-run/react'

function NavLogo() {
	return (
		<Link to="/">
			<div className="font-light">👨🏻‍💻 patn</div>
			<div className="font-bold">🔺🔻 xyz</div>
		</Link>
	)
}

export { NavLogo }
