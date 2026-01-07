export default function Week7() {
	return (
		<>
			<section>
				<p>ARCHIVED SITE</p>
				<ul>
					<li>Archived the existing site to a subdomain</li>
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
					<p>
						Re-pointed domain to the accessible Digital Ocean App
						instead of the Droplet FTP.
					</p>
				</ul>
			</section>
		</>
	);
}
