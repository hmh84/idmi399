import { Box } from '@mui/system';
import '../styles/case-study.css';

const ComparisonLinks = () => {
	return (
		<Box
			className='comparison-link-wrapper'
			sx={{
				width: '100%',
				display: 'flex',
			}}
		>
			<a
				href='https://projects.hunterham.digital/drexel/idmi399/website-pre-accessibility'
				target='_blank'
				rel='noopener noreferrer'
				style={{ marginRight: '1rem' }}
			>
				View Pre-Accessibility
			</a>
			<a
				href='https://projects.hunterham.digital/drexel/idmi399/website-post-accessibility'
				target='_blank'
				rel='noopener noreferrer'
			>
				View Post-Accessibility
			</a>
		</Box>
	);
};

export default function Home() {
	return (
		<Box className='case-study'>
			<section>
				<h2>Web Development For Accessibility</h2>

				<table>
					<tbody>
						<tr>
							<td>
								<b>Product</b>
							</td>
							<td>Hunter H Digital Portfolio Website</td>
						</tr>
						<tr>
							<td>
								<b>Timeline</b>
							</td>
							<td>10 weeks</td>
						</tr>
						<tr>
							<td>
								<b>Goal</b>
							</td>
							<td>
								Make the entire site accessible by screen reader
							</td>
						</tr>
						<tr>
							<td>
								<b>Restraints</b>
							</td>
							<td>
								Don't sacrifice features, style, or function
							</td>
						</tr>
					</tbody>
				</table>

				<h3>INTRO</h3>
				<p>
					My major did not offer a dedicated class for accessibility
					in web development. Because of this, I decided to do an
					independent study to further my knowledge in this area, as
					it is becoming increasingly important, and sometimes
					necessary.
				</p>

				<ComparisonLinks />

				<p>
					Use the navigation on the left to see progress, change
					history, notes, and more for each week.
				</p>

				<p>
					<b>Disclaimer:</b> There are some changes such as the
					different background animation and different phrases within
					the typewriter effect that shouldn't be considered in this
					project, these were just additional personal changes I
					wanted to make during the project.
				</p>
			</section>

			<section>
				<h3>PROBLEMS IDENTIFIED</h3>
				<h4>Nav & Footer</h4>
				<ol>
					<li>
						When tabbing onto the nav bar, it should say "Global
						navigation" not just "navigation" since it's a global
						component.
					</li>
					<li>
						Nav and footer links need to announce if they lead to
						the current page by using{' '}
						<code>aria-current="page"</code>
					</li>
					<li>
						The Footer GitHub and LinkedIn icon links don't have
						announced descriptions of where they go.
					</li>
				</ol>
				<h4>Home Page</h4>
				<ol>
					<li>
						Screen readers get stuck on the decorative CLI effect
						because the html changes during narration.
					</li>
					<li>
						User's reduced motion setting is not respected. The
						animation still plays, buttons still have style
						transitions, and the typewriter effect continues to
						animate.
					</li>
				</ol>
				<h4>Wall Page</h4>
				<ol>
					<li>
						Tabbing to navigate goes through all the project blocks
						twice. The 1st round of tabbing goes thru all the nested
						buttons, the 2nd round of tabbing goes thru the boxes.
					</li>
					<li>
						Project block nested buttons should be links not buttons
						because they navigate to a different URL.
					</li>
					<li>
						Project blocks the screen reader says the View and
						GitHub button titles too quickly. It sounds like "View
						GitHub" as in one button, but there are two buttons.
					</li>
				</ol>
				<h4>Contact Page</h4>
				<ol>
					<li>
						Send button doesn't get read when it is disabled. It
						should probably still be read over, but described as
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
				</ol>
			</section>

			<section>
				<h3>CHANGES</h3>
				<h4>Home Page / Nav</h4>
				<p>Fixed stuttering screen reader.</p>
				<div className='video-compare'>
					<div className='video-compare-block'>
						<p>Before</p>
						<video
							src={require('../media/typewrite-pre.mov')}
							controls
						/>
					</div>
					<div className='video-compare-block'>
						<p>After</p>
						<video
							src={require('../media/typewrite-post.mov')}
							controls
						/>
					</div>
				</div>
				<p>
					Navigation links now announce "visited link" and using{' '}
					<code>aria-current=true</code> announces "current item" on
					the link the user is already on.
				</p>
				<p>
					Now respecting the users reduce motion setting. This slows
					the speed of the main animation to a very slow FPS, hides
					the typewriting effect, and disables all CSS transitions.
				</p>
				<div className='video-compare'>
					<div className='video-compare-block'>
						<video
							src={require('../media/reduced-motion.mov')}
							controls
						/>
					</div>
				</div>
				<img
					src={require('../media/reduced-motion-snippet.png')}
					alt='code snippet of css reduced motion logic'
					style={{ maxWidth: '25rem' }}
				/>
				<h4>Wall Page</h4>
				<p>
					Because these blocks were custom, using{' '}
					<code>aria-role="list"</code> on the container and{' '}
					<code>aria-role="listitem"</code> on the blocks themselves
					helped retain the existing styles and let the browser know
					this is a list and to handle it as such. The effect is that
					screen readers will announce how big the list is and what
					the current index the user is on.
				</p>
				<p>
					Fixed non-visible focused item while tab indexing through
					project blocks.
				</p>
				<p>
					By using the CSS sudo-selector <code>:focus-within</code>, I
					was able to reduce the block image opacity just as hovering
					would while tabbing on the buttons within.
				</p>
				<img
					src={require('../media/focus-within.png')}
					alt='code snippet of using the focus-within sudo-selector'
					style={{ maxWidth: '25rem' }}
				/>
				<h4>Contact Page</h4>
				<p>
					I added <code>aria-label</code> to the form element to
					indicate what the purpose is. This gives context before
					focusing on the inputs.
				</p>
				<p>
					Added <code>aria-label</code> to each input, so it reads the
					field name too, not just the content value. Using the
					existing form validity booleans in{' '}
					<code>aria-invalid={`{true / false}`}</code> to read if the
					input is invalid.
				</p>
				<p>
					Added a custom <code>aria-label</code> to state the
					remaining available characters in the form message input as
					normally only sighted users would have seen this before
					writing the message. Users can tab back to the input to get
					the current available number of characters.
				</p>
				<img
					src={require('../media/max-chars.png')}
					alt='code snippet of available characters logic'
					style={{ maxWidth: '40rem' }}
				/>
				<p>
					Solved trapping tab and screen reader focus onto the
					"Message Sent" modal pop-up. The project is built in React,
					logically it made sense to make use of a NPM package for
					this as it would be much more complicated to do manually. I
					went with{' '}
					<a href='https://www.npmjs.com/package/react-focus-lock'>
						react-focus-lock
					</a>{' '}
					to achieve this. Minimally invasive code where all you need
					to do is wrap the modal component inside it's exported
					component for it to start working.
				</p>
				<p>
					Added <code>aria-live="assertive"</code> to the modal. This
					will cancel any ongoing screen reader dialog to announce the
					first tab index within the modal (the title). Using this
					needs to be heavily contemplated as it could interrupt
					valuable information. In my case, is okay here because in my
					form's task flow there nothing being read while a user is
					submitting, and it is triggered by a user event (pressing
					send).
				</p>
				<div className='video-compare'>
					<div className='video-compare-block'>
						<p>Before</p>
						<video
							src={require('../media/modal-pre.mov')}
							controls
						/>
					</div>
					<div className='video-compare-block'>
						<p>After</p>
						<video
							src={require('../media/modal-post.mov')}
							controls
						/>
					</div>
				</div>
			</section>

			<section>
				<h3>CONCLUSION</h3>

				<h4>Results</h4>
				<ul>
					<li>
						Minimally code invasive as most changes are replacing
						tags and restructuring elements, rather than adding more
						code.
					</li>
					<li>
						Minimally code invasive as most changes are replacing
						tags and restructuring elements, rather than adding more
						code.
					</li>
				</ul>

				<h4>Takeaways</h4>
				<ul>
					<li>
						Semantic HTML should always be used to allow the browser
						to handle it.
					</li>
					<li>
						Generally, only use <code>aria-label</code> and{' '}
						<code>aria-description</code> for highly customized
						components that can't be native HTML tags.
					</li>
					<li>
						Having an accessible website is also very useful for
						those without impairments.
					</li>
					<li>
						Always test different browser/screen reader
						combinations.
					</li>
				</ul>

				<h4>Browser/Screen-Reader Pairing suggestion</h4>
				<p>
					I recommend these combinations of browser and screen-reader
					for optimal experience.
				</p>

				<table>
					<thead>
						<tr>
							<td></td>
							<td>
								<b>Browser</b>
							</td>
							<td>
								<b>Screen Reader</b>
							</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<b>1.</b>
							</td>
							<td>Safari</td>
							<td>Voiceover</td>
						</tr>
						<tr>
							<td>
								<b>2.</b>
							</td>
							<td>Chrome</td>
							<td>JAWS (paid) otherwise NVDA (free)</td>
						</tr>
						<tr>
							<td>
								<b>3.</b>
							</td>
							<td>Edge</td>
							<td>JAWS (paid) otherwise NVDA (free)</td>
						</tr>
						<tr>
							<td>
								<b>4.</b>
							</td>
							<td>Firefox</td>
							<td>NVDA</td>
						</tr>
					</tbody>
				</table>

				<p>
					I didn't include Internet Explorer (IE) here because support
					is being dropped in June 2022. Replaced by Edge which has a
					recommendation above.
				</p>
			</section>

			<section>
				<h3>HOW TO TEST</h3>

				<p>
					To test the pre and post accessibility version on your own,
					you will need to enable your screen reader and visit the
					site using the links below.
				</p>

				<p>
					If you have not explicitly installed a screen reader, or
					don't know how to enable the built in one, as of June
					2022...
				</p>

				<p>MacOS:</p>
				<ol>
					<li>
						Go to Preferences {'>'} Accessibility {'>'} VoiceOver
					</li>
					<li>Check "Enable VoiceOver"</li>
				</ol>

				<p>Windows:</p>
				<ol>
					<li>
						Go to Setting {'>'} Ease of Access {'>'} Narrator
					</li>
					<li>Toggle "Use Narrator" on</li>
				</ol>

				<p>
					<b>Challenge:</b> To get a more authentic effect, once you
					are comfortable with using tab, shift+tab, arrow keys,
					space, and enter to navigate, try closing your eyes and
					navigating through the site.
				</p>

				<ComparisonLinks />
			</section>
		</Box>
	);
}
