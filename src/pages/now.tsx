import Head from 'next/head';
import Link from 'next/link';
import { ReactElement } from 'react';

import { Layout } from '../components/Layout';

export default function Now(): ReactElement {
	return (
		<Layout showGoBack={true}>
			<Head>
				<title>Now | Santiago Martín Agra</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1 className="mb-4 font-bold">What I’m doing now</h1>
			<p className="mb-2">
				👨‍💻 I work for a startup called{' '}
				<a target="_blank" href="https://privacycloud.com" rel="noreferrer">
					PrivacyCloud
				</a>{' '}
				as Software Engineer.
			</p>
			<p className="mb-2">
				🗓 In the community side, I co-organize{' '}
				<a
					target="_blank"
					href="https://www.meetup.com/es-ES/asturias-javascript/"
					rel="noreferrer"
				>
					asturias.js
				</a>{' '}
				and formerly{' '}
				<a target="_blank" href="https://www.meetup.com/es-ES/GDG-Asturias/" rel="noreferrer">
					GDG Asturias 😢
				</a>{' '}
				as well.
			</p>
			<p className="mb-2">
				📝 I share my knowledge by writing in{' '}
				<a href="/blog" target="_blank">
					my blog
				</a>{' '}
				and in the{' '}
				<a href="https://medium.com/gdgeurope" target="_blank" rel="noreferrer">
					GDG Europe blog
				</a>
				.
			</p>
			<p className="mb-2">
				😂 I have fun coding some{' '}
				<Link href="/side-projects">
					<a>side projects</a>
				</Link>{' '}
				doing live streaming on{' '}
				<a href="/twitch" target="_blank">
					Twitch
				</a>
				.
			</p>
			<p className="mb-2">🏀 I play basketball with friends every time I can.</p>
		</Layout>
	);
}
