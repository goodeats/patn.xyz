import { type MetaFunction } from '@remix-run/react'
import { PageContentIndex } from '#app/components/templates/index.ts'

export default function AdminIndexRoute() {
	return <PageContentIndex message="Hello admin" />
}

export const meta: MetaFunction = () => {
	return [
		{ title: `Admin | PatN XYZ` },
		{
			name: 'description',
			content: `Admin page for PatN XYZ`,
		},
	]
}
