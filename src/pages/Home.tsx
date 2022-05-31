export default function Home() {
	return (
		<>
			<h2>IDM-I399 Web Development For Accessibility</h2>
			<pre
				style={{
					maxWidth: 'calc(100vw - 200px)',
					overflowX: 'scroll',
				}}
			>
				{`
Intro:
- My major did not offer a dedicated class for accessibility in web development.
- I decided to do an independent study to further my knowledge in this area, as it is becoming increasingly important.

[Links to pre and post comparison]

Use the navigation on the left to see progress, change history, notes, and more for each week.

Disclaimer:
There are some changes such as the different graphic and the phrases within the typewriter that shouldn't be considered in this project, these were just additional personal changes I wanted to make.

Problems Identified:
OVERALL

- Randomly keeps saying: "website content activity busy"
- Nav links shouldn't be read if in mobile view since it's hidden, instead describe the purpose of the hamburger menu button.
Clarify nav and footer links leading to the current page. Use aria-current="page"

HOME PAGE

- When tabbing onto the nav bar, it should say "Global navigation" not just "navigation" since it's a global component.
- Screen readers get stuck on the decorative CLI effect because the words change.
- Icon links need descriptions.

WALL PAGE

- Tabbing goes thru all options twice. 1st round goes thru all the sub- buttons, 2nd round goes thru the boxes.
- Nested buttons should be links not buttons because the navigate to a different URL
- Project blocks the screen reader says the View and GitHub button titles too quickly. It sounds like "View GitHub" as in one button, but there are two buttons.

CONTACT PAGE

- Send button doesn't get read when it is disabled. It should probly still be read over, but described as disabled because the form is invalid.
- Describe the container div as a form.
- Inputs just read placeholder or value if present. Needs to read the label (Name, Email, etc.)
- Screen reader doesn't recognize/call out you've reached max input.
- Screen reader doesn't know the "Message received" modal appears when sending a contact message.
- "Message received" modal "Return Home" button needs to be a link button instead.

Section 1: Home Page / Nav
- [video] Compare typewriter effect.
- Nav links announce "visited link" and "current item"
- Compare reduced motion. (Typewrite, button hover, bg animation)

Section 2: Wall Page
- [video] Compare reading the blocks.
- How use of aria-role="list" and aria-role="listitem" helped with the divs
- ::focus-within solved the tabbing and peek issues.

Section 3: Contact Page
- aria-label for form to indicate what the purpose is. Gives context to the inputs.
- aria-label for each input, reads name and content, combining use of aria-invalid with send button disabled functionality.
- Custom 450/500 chars remaining aria label for utility.
- Modal trap focus using the NPM package, aria live is okay here because it needs to announce the modal/new focus.

Conclusion:
- Never sacrificed features, styles, or functionality.
- Semantic HTML should always be used to allow the browser to handle it. Only use aria-label when you have very customized components that are not native HTML tags.
- Minimally code invasive as most changes are replacing tags and restructuring elements, rather than adding more code.

My suggestions for paired OS and screen-reader.

[Links to pre and post comparison]
`}
			</pre>
		</>
	);
}
