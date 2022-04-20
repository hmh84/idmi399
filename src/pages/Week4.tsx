import { Link } from '@mui/material';

export default function Week4() {
	return (
		<>
			<section>
				<p>
					This week I worked on making the wall (projects) page
					screen-reader accessible:
				</p>
				<Link
					target='_blank'
					href='https://www.joshwcomeau.com/react/prefers-reduced-motion/'
				>
					Website about accessing the reduced motion media query
				</Link>
				<p>REDUCED MOTION</p>
				<p>
					I thought it would be good to step into reduced motion as
					well. This taps into the system setting available thru the
					browser with css media queries.
				</p>
				<ul>
					<li>@media (prefers-reduced-motion: reduce) {}</li>
					<p>Used the css media query to stop all css transitions.</p>
					<li>usePrefersReducedMotion()</li>
					<p>
						Accessed the css query using a react hook, using it in
						the react rendering to hide the main animation graphic
						and hide the typewriter effect.
					</p>
				</ul>
				<p>THE WALL PAGE</p>
				<ul>
					<li>role='list' on div surrounding project blocks</li>
					<li>
						role='listitem' and tabIndex={0} on project block div's
					</li>
					<li>
						These solved the tabbing and screen reader issue of
						cycling thru all the blocks twice
					</li>
					<li>
						Changed inner buttons to actual anchor tag links so the
						screen reader read those correctly and didn't say them
						too fast that it sounded like one button/link
					</li>

					<li>
						::focus-within on project blocks allows me to show inner
						content while tab indexed on any of the elements inside
					</li>

					<li>
						Changed the hand written page descriptions to h2
						elements so the screen reader would identify them as
						such, this should make it more obvious that it is a page
						description.
					</li>
				</ul>
			</section>

			<section>
				<p>Notes:</p>
				<ul>
					<li>Using role='list'</li>
					<p>
						Used to signify a list that isn't a ul or ol tag. It
						also says how many items are in the list before entering
						it.
					</p>
					<li>Using role='listitem'</li>
					<p>
						Used to signify items within a list that aren't an li
						tag.
					</p>
					<li>Using ::focus-within</li>
					<p>
						Helpful css sudo-class that detects when you're focused
						on the element itself or any child element. Useful for
						custom styling.
					</p>
				</ul>
			</section>
		</>
	);
}
