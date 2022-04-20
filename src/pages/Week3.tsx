import { Link } from '@mui/material';

export default function Week3() {
	return (
		<>
			<section>
				<p>
					This week I worked on making my portfolio's home page
					screen-reader accessible:
				</p>
				<Link
					target='_blank'
					href='https://github.com/hmh84/website/commit/ac1faf1a3c0baa195d9077f5da04e3d3d2d6da34'
				>
					The Git commit
				</Link>
				<p>Changes:</p>
				<ul>
					<li>
						Added aria-label="Global Navigation" the nav because it
						makes it clear that this nav is the same across all
						pages.
					</li>
					<li>
						Added aria-current when links lead to the current page
						(Top nav and footer).
					</li>
					<li>
						Added aria-label to the SVG GitHub and LinkedIn links,
						they used to say "hunter-hampton" and "hmh84" which
						doesn't mean anything, it was part of the url. Now they
						say "Hunter's LinkedIn Profile" and "Hunter's GitHub
						Profile".
					</li>
					<li>
						Used aria-hidden on the typewriter components so it
						wouldn't get stuck re-reading the typewriter visual
						effects. Also used the aria-label and set it to the full
						wording of what the typewriter says "Hi, I'm Hunter,
						Developer, Creator, Problem Solver" and again, not get
						stuck.
					</li>
					<li>
						Previously, the CTA buttons "I need a website" and "I
						wanna see your work" were actual button html elements
						that navigated to the right page. I changed these to
						anchor tags and adjusted some styling so they appear the
						same, but now the screen-reader will know it is a link.
						Since I'm using react-router-dom this also makes loading
						he page instant.
					</li>
				</ul>
			</section>

			<section>
				<p>Notes:</p>
				<ul>
					<li>Using aria-label</li>
					<p>
						Used to add or re-name the read-aloud names of major
						elements.
					</p>
					<li>aria-current</li>
					<p>
						Used to signify selected or current items in a list.
						Good for ul/ol and nav.
					</p>
					<li>aria-hidden</li>
					<p>
						This will tell the screen reader to ignore the element
						it exists on and all its children. It's good to wrap
						sections of content in a div with this instead of adding
						it to every element.
					</p>
				</ul>
			</section>
		</>
	);
}
