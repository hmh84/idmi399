import { Link } from '@mui/material';

export default function Week1() {
	return (
		<>
			<section>
				<p>Project timeline:</p>
				<table>
					<tbody>
						<tr>
							<td>
								<b>Week 1</b>
							</td>
							<td>Term planning, topic research.</td>
						</tr>
						<tr>
							<td>
								<b>Week 2</b>
							</td>
							<td>
								Research accessibility diagnostic tools/methods.
								Define and diagnose website to improve.
							</td>
						</tr>
						<tr>
							<td>
								<b>Week 3</b>
							</td>
							<td>
								Research ARIA. Address Home page and Nav issues.
							</td>
						</tr>
						<tr>
							<td>
								<b>Week 4</b>
							</td>
							<td>
								Research ARIA. Address Projects "Wall" page
								issues. Respect reduced motion setting.
							</td>
						</tr>
						<tr>
							<td>
								<b>Week 5</b>
							</td>
							<td>Research ARIA. Address Contact page issues.</td>
						</tr>
						<tr>
							<td>
								<b>Week 6</b>
							</td>
							<td>Refinement.</td>
						</tr>
						<tr>
							<td>
								<b>Week 7</b>
							</td>
							<td>Archive existing site. Domain changes.</td>
						</tr>
						<tr>
							<td>
								<b>Week 8</b>
							</td>
							<td>Archive new and improved site.</td>
						</tr>
						<tr>
							<td>
								<b>Week 9</b>
							</td>
							<td>Case study outline.</td>
						</tr>
						<tr>
							<td>
								<b>Week 10</b>
							</td>
							<td>Case study copy.</td>
						</tr>
					</tbody>
				</table>
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
