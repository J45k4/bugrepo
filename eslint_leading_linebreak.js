
import { RichComponent, TextComponent, parseRichHtml, richTextToLexical } from "./richtext"
it("convert richhtml to object", () => {
	const html = "<p>hello world</p>"
	const result = parseRichHtml(html)
	expect(result).toEqual({
		type: "root",
		children: [
			{
				type: "p",
				children: [
					{
						type: "text",
						text: "hello world",
						children: [],
					},
				],
			},
		]
	})
})


