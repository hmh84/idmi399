import { Link } from 'react-router-dom';

export default function Week8() {
	return (
		<>
			<section>
				<p>ARCHIVED SITE</p>
				<ul>
					<li>Archived the post access. site to a subdomain</li>
					<a
						rel='noreferrer'
						target='_blank'
						href='http://projects.hunterham.digital/drexel/idmi399/website-post-accessibility'
					>
						Post-Accessibility Site
					</a>
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
				<p>RESEARCH & TESTING</p>
				<p>Recommended browser & screen-reader combinations</p>
				<ol>
					<li>Voiceover w/ Safari</li>
					<li>JAWS (or NVDA) w/ Chrome and Edge</li>
					<li>NVDA w/ Firefox</li>
				</ol>
				<p>
					I didn't include Internet Explorer (IE) here because support
					is being dropped in June 2022. Replaced by Edge which has a
					recommendation above.
				</p>
				<a
					rel='noreferrer'
					target='_blank'
					href='https://death-to-ie11.com/'
				>
					Countdown to IE's Death
				</a>
			</section>
		</>
	);
}
