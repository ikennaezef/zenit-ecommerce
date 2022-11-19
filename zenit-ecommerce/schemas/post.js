export default {
	name: "post",
	title: "Post",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "subtitle",
			title: "Subtitle",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
		},
		{
			name: "author",
			title: "Author",
			type: "reference",
			to: [{ type: "author" }],
		},
		{
			name: "image",
			title: "Image",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "content",
			title: "Content",
			type: "blockContent",
			description: "Post content",
		},
	],

	preview: {
		select: {
			title: "title",
			subtitle: "author.name",
			media: "image",
		},
	},
};
