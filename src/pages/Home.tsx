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
