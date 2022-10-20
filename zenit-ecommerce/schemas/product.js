export default {
	name: "product",
	title: "Product",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
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
			title: "Price",
			name: "price",
			type: "number",
		},
		{
			title: "Tags",
			name: "tags",
			type: "array",
			of: [
				{
					type: "string",
				},
			],
			options: {
				layout: "tags",
			},
		},
		{
			name: "vendor",
			title: "Vendor",
			type: "reference",
			to: { type: "vendor" },
		},
		{
			name: "categories",
			title: "Categories",
			type: "array",
			of: [
				{
					type: "reference",
					to: { type: "category" },
				},
			],
			validation: (Rule) => Rule.required().error("A category is required"),
		},
		{
			name: "image",
			title: "Image",
			type: "array",
			of: [{ type: "image" }],
			options: {
				hotspot: true,
			},
		},
		{
			name: "description",
			title: "Description",
			type: "blockContent",
		},
	],

	preview: {
		select: {
			title: "title",
			subtitle: "vendor.title",
			media: "image.0",
		},
	},
};
