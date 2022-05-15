import { Link } from 'react-router-dom';

export default function Week6() {
	return (
		<>
			<section>
				<p>ARCHIVED SITE</p>
				<ul>
					<li>Archived the existing site to a subdomain</li>
					<Link
						target='_blank'
						to={{
							pathname:
								'http://projects.hunterham.digital/drexel/idmi399/',
						}}
					>
						Pre-Accessibility Site
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
				<p>NEW LIVE SITE</p>
				<ul>
					<li>Re-pointed domain to new site</li>
					<Link
						target='_blank'
						to={{ pathname: 'https://hunterham.digital' }}
					>
						Post-Accessibility Site
					</Link>
					<p>
						Re-pointed domain to the accessible Digital Ocean App
						instead of the Droplet FTP.
					</p>
				</ul>
			</section>
		</>
	);
}
