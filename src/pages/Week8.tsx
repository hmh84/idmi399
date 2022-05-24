import { Link } from 'react-router-dom';

export default function Week8() {
	return (
		<>
			<section>
				<p>ARCHIVED SITE</p>
				<ul>
					<li>Archived the post access. site to a subdomain</li>
					<Link
						target='_blank'
						to={{
							pathname:
								'http://projects.hunterham.digital/drexel/idmi399/website-post-accessibility',
						}}
					>
						Post-Accessibility Site
					</Link>
					<p>
						Turned existing Digital Ocean Droplet into a subdomain
						for project FTP storage.
					</p>
					<p>
						It is setup this way because you can't easily show
						static websites inside a react app, at least not with
						Digital Ocean. That's because you can't FTP into their
						Apps.
					</p>
				</ul>
			</section>
			<section>
				<p>RESEARCH & Testing</p>
				<ul>
					<li>Recommended browser & screen-reader combinations</li>
					<p>Voiceover w/ Safari</p>
					<p>JAWS (or NVDA) w/ Chrome and Edge</p>
					<p>NVDA w/ Firefox</p>
				</ul>
				<p>
					I didn't include Internet Explorer (IE) here because support
					is being dropped in June 2022. Replaced by Edge which has a
					recommendation above.
				</p>
				<Link
					target='_blank'
					to={{
						pathname: 'https://death-to-ie11.com/',
					}}
				>
					Countdown to IE's Death
				</Link>
			</section>
		</>
	);
}
