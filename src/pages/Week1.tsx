import { Link } from '@mui/material';

export default function Week1() {
	return (
		<>
			<section>
				<p>This week I created a guide for the term:</p>
				<ul>
					<li>Week 1: Term planning</li>
					<li>
						Week 2: Research accessibility diagnostic tools/methods.
						Decide on final website to redo.
					</li>
					<li>Week 3: Diagnose website of choice</li>
					<li>
						Week 4: Research & attempt making varying media work for
						screen readers
					</li>
					<li>
						Week 5: Research & attempt making varying media work for
						screen readers
					</li>
					<li>
						Week 6: Create accessibility evaluation & proposal for
						updates
					</li>
					<li>Week 7: Work on final website</li>
					<li>Week 8: Work on final website</li>
					<li>Week 9: Work on final website</li>
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
