export default {
  name: "services-page",
  title: "Services Page",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Internal Name (e.g., Services Page)",
    },

    {
      name: "hero",
      type: "object",
      title: "Hero Section",
      fields: [
        {
          name: "subtitle",
          type: "localeString",
          title: "Subtitle (LEISTUNGEN)",
        },
        { name: "title", type: "localeString", title: "Main Title" },
        { name: "description", type: "localeText", title: "Main Description" },
        { name: "image", type: "image", options: { hotspot: true } },
      ],
    },

    {
      name: "overview",
      type: "object",
      title: "Services Overview Grid",
      fields: [
        {
          name: "cards",
          type: "array",
          title: "Service Cards",
          of: [
            {
              type: "object",
              fields: [
                { name: "title", type: "localeString", title: "Card Title" },
                {
                  name: "description",
                  type: "localeText",
                  title: "Card Description",
                },
                { name: "image", type: "image", title: "Card Image/Icon" },
              ],
            },
          ],
        },
      ],
    },
  ],
};
