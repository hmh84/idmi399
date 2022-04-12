import { Link } from '@mui/material';

export default function Week2() {
	return (
		<>
			<section>
				<p>Articles:</p>
				<ul>
					<li>
						<Link
							target='_blank'
							href='https://webaim.org/projects/million/'
						>
							https://webaim.org/projects/million/
						</Link>
						<p>Key takeaways:</p>
						<ul>
							<li>
								Global we accessibility improvement is
								progressing but at a very slow rate.
							</li>
							<div className='list-section-title'>
								5 most common WCAG failure:
							</div>
							<ol>
								<li>Low contrast text</li>
								<li>Missing alternative text for images</li>
								<li>Empty links</li>
								<li>Missing form input labels</li>
								<li>Empty buttons</li>
								<li>Missing document language</li>
							</ol>
							<li>
								Aria attributes are used for custom elements
								that are not native and need the developers
								assistance to make accessible. Say you had a
								really complicated and nested component made
								only of div's, the screen reader would skip it
								entirely without aria attributes.
							</li>
							<div className='list-section-title'>
								Top 5 worst WCAG compliant website categories:
							</div>
							<ol>
								<li>Shopping</li>
								<li>Real Estate</li>
								<li>News/Weather/Information</li>
								<li>Style and Fashion</li>
								<li>Sports</li>
							</ol>
						</ul>
					</li>
					<li>
						<Link
							target='_blank'
							href='https://www.siteimprove.com/glossary/screen-reader-testing/'
						>
							https://www.siteimprove.com/glossary/screen-reader-testing/
						</Link>
						<p>Key takeaways:</p>
						<ul>
							<li>Most common screen readers.</li>
							<li>
								Things to test a website for with a screen
								reader. There was a good checklist.
							</li>
							<li>
								How often to test a screen reader on a site?
								Every major update.
							</li>
							<li>
								Automated tools like Lighthouse are just
								starting points, and largely don't address
								screen reader concerns. Manual screen reader
								testing is the best way to evaluate it.
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<section>
				<p>
					Chosen Final:{' '}
					<Link target='_blank' href='http://hunterham.digital'>
						My own website
					</Link>
				</p>
				<p>Accessibility Findings:</p>
				<ul>
					<div className='list-section-title'>OVERALL</div>
					<li>
						Randomly keeps saying: "website content activity busy"
					</li>
					<li>
						Nav links shouldn't be read if in mobile view since it's
						hidden, instead describe the purpose of the hamburger
						menu button.
					</li>
					<li>
						Clarify nav and footer links leading to the current
						page. Use aria-current="page"
					</li>

					<div className='list-section-title'>HOMEPAGE</div>
					<li>
						When tabbing onto the nav bar, it should say "Global
						navigation" not just "navigation" since it's a global
						component.
					</li>
					<li>
						Screen readers get stuck on the decorative CLI effect
						because the words change.
					</li>
					<li>Icon links need descriptions.</li>

					<div className='list-section-title'>WALL</div>
					<li>
						Tabbing goes thru all options twice. 1st round goes thru
						all the sub- buttons, 2nd round goes thru the boxes.
					</li>
					<li>
						Nested buttons should be links not buttons because the
						navigate to a different URL
					</li>
					<li>
						Project blocks the screen reader says the View and
						GitHub button titles too quickly. It sounds like "View
						GitHub" as in one button, but there are two buttons.
					</li>

					<div className='list-section-title'>CONTACT</div>
					<li>
						Send button doesn't get read when it is disabled. It
						should probly still be read over, but described as
						disabled because the form is invalid.
					</li>
					<li>Describe the container div as a form.</li>
					<li>
						Inputs just read placeholder or value if present. Needs
						to read the label (Name, Email, etc.)
					</li>
					<li>
						Screen reader doesn't recognize/call out you've reached
						max input.
					</li>
					<li>
						Screen reader doesn't know the "Message received" modal
						appears when sending a contact message.
					</li>
					<li>
						"Message received" modal "Return Home" button needs to
						be a link button instead.
					</li>
				</ul>
			</section>
			<section>
				<p>Notes:</p>
				<ul>
					<li>New accessibility checker tool: Axe DevTools.</li>
					<p>
						This was recommended by the lead UX designer at my
						company who uses it mostly to check proper use of aria
						attributes on HTML elements.
					</p>
					<li>Started using built-in MacBook screen reader.</li>
					<p>
						Lot's of repeated phrases as mentioned above. It's
						important to make the reading of a website succinct but
						also helpful. Two modes: 1. entering a site 2. tabbing
						thru content.
					</p>
					<li>
						Nice to have high level groups (header, navigation, ad,
						main content, footer) read aloud first, with the option
						to tab into them before deep diving into all its
						contents getting into that area.
					</li>
				</ul>
			</section>
		</>
	);
}
