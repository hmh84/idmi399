import { Link } from '@mui/material';

export default function Week1() {
	return (
		<>
			<section>
				<p>Project timeline:</p>
				<ul>
					<li>Week 1: Term planning, topic research.</li>
					<li>
						Week 2: Research accessibility diagnostic tools/methods.
						Define and diagnose website to improve.
					</li>
					<li>
						Week 3: Research ARIA. Address Home page and Nav issues.
					</li>
					<li>
						Week 4: Research ARIA. Address Projects "Wall" page
						issues. Respect reduced motion setting.
					</li>
					<li>Week 5: Research ARIA. Address Contact page issues.</li>
					<li>Week 6: Refinement.</li>
					<li>Week 7: Archive existing site. Domain changes.</li>
					<li>Week 8: Archive new and improved site.</li>
					<li>Week 9: Case study.</li>
					<li>Week 9: Case study.</li>
				</ul>
			</section>
			<section>
				<p>Articles:</p>
				<ul>
					<li>
						<Link
							target='_blank'
							href='https://www.lrswebsolutions.com/Blog/Posts/97/Website-Accessibility/The-Top-5-Website-Accessibility-Failures/blog-post/'
						>
							https://www.lrswebsolutions.com/Blog/Posts/97/Website-Accessibility/The-Top-5-Website-Accessibility-Failures/blog-post/
						</Link>
						<p>It discussed do's and dont's of...</p>
						<ul>
							<li>Text/Structure</li>
							<p>Use proper tags, never more than 1 h1</p>
							<li>Design Contrast</li>
							<p>Don't go below roughly 80% opacity</p>
							<li>Site Functionality</li>
							<p>
								Modals should probly have close buttons. Lock
								keyboard events to the modal. Modal should
								become focused element.
							</p>
							<li>Menus/Navigation</li>
							<p>First focus item index should be navigation</p>
							<li>Image Problems</li>
							<p>
								alrt tag should be "specific and descriptive,
								but not redundant"
							</p>
							<p>
								Begin alt text with "image of" or "graphic of",
							</p>
							<p>
								Purely decorative elements don't really need alt
								tag or aria
							</p>
						</ul>
					</li>
				</ul>
			</section>
			<section>
				<p>Notes:</p>
				<ul>
					<li>
						Found a tool in the Google Chrome inspector called
						"Lighthouse". It seems to evaluate accessibility among
						other things.
					</li>
				</ul>
			</section>
		</>
	);
}
