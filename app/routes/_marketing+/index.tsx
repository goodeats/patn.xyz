import { type MetaFunction } from '@remix-run/node'
import { triangles } from './logos/logos.ts'

export const meta: MetaFunction = () => [{ title: 'PatN XYZ' }]

export default function Index() {
	return (
		<main className="relative min-h-screen sm:flex sm:justify-center">
			<div className="relative sm:pb-16 sm:pt-8">
				<div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
					<div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
						<div className="absolute inset-0">
							<img
								className="h-full w-full object-cover"
								src={triangles}
								alt=""
							/>
							<div className="absolute inset-0 bg-[color:rgba(30,23,38,0.15)] mix-blend-multiply" />
							<div className="bg-[color:rgba(255, 89, 89,0.5)] absolute inset-0 mix-blend-multiply" />
						</div>
						<div className="lg:pt-18 relative px-4 pb-8 pt-8 sm:px-6 sm:pb-14 sm:pt-16 lg:px-8 lg:pb-20">
							<h1 className="text-center text-h1 font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
								<a
									className="block uppercase text-white drop-shadow-md"
									href="https://github.com/goodeats/patn.xyz"
								>
									<span>{'pat(n).xyz()'}</span>
								</a>
							</h1>
							<p className="mx-auto mt-6 max-w-lg rounded-lg bg-primary p-3 text-center text-xl text-primary-foreground sm:max-w-3xl">
								Welcome to my website! I'm Pat, a full-stack developer
							</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
