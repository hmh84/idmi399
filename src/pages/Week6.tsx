export default function Week6() {
	return (
		<>
			<section>
				<p>This week I worked on fixing up bugs with the site.</p>
				<br />
				<p>ACCESSIBILITY RELATED</p>
				<ul>
					<li>Fixed form validity aria</li>
					<p>messages wasn't correct validity when filled out</p>
					<li>Added meta info: Title, Description, Image</li>
					<p>
						Som screen readers can access these when reading
						external links, also helps with SEO.
					</p>
					<li>User Testing</li>
					<p>
						Tried to get testers but only was able to get 1 who is
						not a screen-reader user, but a UX professional.
					</p>
					<p>The tester will be able to try it out this week.</p>
					<li>
						Reduced motion on animation is now moving super slow
						instead of being removed.
					</li>
					<li>
						Tried out Mac native screen reader on Safari, works
						great! Event better than Chrome tbh.
					</li>
				</ul>
			</section>
			<section>
				<p>NON ACCESS. RELATED</p>
				<ul>
					<li>Fixed the form not completely resetting</li>
					<p>This was a react rendering behavior</p>
					<li>
						Fixed Typewriter CLI line style not 100% height on PROD
					</li>
					<li>Added max height on message textarea</li>
					<li>Fixed external links</li>
				</ul>
			</section>

			<section>
				<p>NOTES:</p>
				<ul>
					<li>"Website web content busy"</li>
					<p>
						This is just a problem with Chrome, nothing you can do
						about it.
					</p>
				</ul>
			</section>
		</>
	);
}
