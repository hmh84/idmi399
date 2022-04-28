import { Link } from '@mui/material';

export default function Week5() {
	return (
		<>
			<section>
				<p>
					This week I worked on making the contact page screen-reader
					accessible and publishing the site live:
				</p>
				<Link
					target='_blank'
					href='https://idm-i399-eglo8.ondigitalocean.app'
				>
					Live Site
				</Link>
				<p>FORM</p>
				<ul>
					<li>
						Changed wrapping div to form, some screen readers
						announce this by default.
					</li>
					<li>
						Added tabIndex={0} and aria-label="Contact Form: Fill
						out to send a message or job request to $appName"
					</li>
					<p>
						This signifies the user is entering a form and not just
						stumbling upon some form inputs.
					</p>
					<li>
						Added aria-label to all inputs so that is read, not just
						the value.
					</li>
					<li>
						Added aria-invalid to all inputs so it announces if they
						are invalid.
					</li>
					<li>
						Some screen readers announce the {'<textarea />'}
						"placeholder" attribute even though there's an
						aria-label present.
					</li>
					<li>
						Added custom logic to announce the remaining available
						maximum characters when you re-focus on the Message{' '}
						{'<textarea />'} input to indicate why you can no longer
						the if you reached 500 chars.
					</li>
					<li>
						Added type="submit" to send button, some screen readers
						announce this.
					</li>
				</ul>
				<p>MESSAGE SENT MODAL</p>
				<ul>
					<li>Made main modal element a {'<dialog />'} tag</li>
					<Link
						target='_blank'
						href='https://medium.com/@islam.sayed8/trap-focus-inside-a-modal-aa5230326c1b'
					>
						Article about modals and tab index
					</Link>
					<Link
						target='_blank'
						href='https://www.npmjs.com/package/react-focus-lock'
					>
						Trap focus React NPM package
					</Link>
					<li>
						Wrap modals in {'<FocusLock />'}, wrap the title (or
						first thing to focus) in {'<AutoFocusInside />'} so it
						is read immediately.
					</li>
					<Link
						target='_blank'
						href='https://a11y-guidelines.orange.com/en/web/components-examples/make-a-screen-reader-talk/'
					>
						Article about triggering announcement
					</Link>
					<li>Added aria-live='assertive'</li>
					<p>
						This immediately stops voiceover speaking and informs
						the user they are now on a dialog/modal. This should
						only be used assertively if the announcement you are
						trying to make is triggered instantly by an excepted
						event, like a user triggered event. Which is happening
						after pressing Send.
					</p>
					<li>
						Added tabindex={0} to the <h2 /> and <p /> tags. Since
						there's only 3 elements inside the modal (title, desc.,
						and send button, I think it makes it easier to
						understand you are inside a focus trapped message.
					</li>
				</ul>
				<p>NOTES</p>
				<p>tabIndex</p>
				<ul>
					<li>
						-1: Remove element from tab indexing, can technically be
						focus with a script
					</li>
					<li>
						0: Put non-traditional element in tab index (Ex. a div
						that's supposed to be read aloud)
					</li>
					<li>
						1, 2, 3+: Manually set tab index order if the elements
						in the DOM are not the order to be read. This is an
						anti-pattern and should be avoided unless absolutely
						necessary.
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

			<section>
				<p>Aria-live:</p>
				<ul>
					<li>
						aria-live="off": default value, the user is not told
						when the element is updated.
					</li>
					<li>
						aria-live="polite": the screen reader vocalises in a
						polite manner when the element is updated. This means
						that if the screen reader was already reading text, it
						will not be interrupted.
					</li>
					<li>
						aria-live="assertive": the screen reader is interrupted
						in its reading and tells the user about the update
						straight away.
					</li>
				</ul>
				<p>
					Generally, there's a lot of quirks when it comes to advanced
					functionality like modals, and textarea's. You should test
					screen readers on multiple browsers and with different
					screen reader programs
				</p>
			</section>
		</>
	);
}
