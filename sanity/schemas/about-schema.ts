export default {
  name: "about-page",
  title: "About Page",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Internal Name",
    },
    // 01. Hero Section
    {
      name: "hero",
      type: "object",
      title: "01. Hero Section",
      fields: [
        { name: "badge", type: "localeString", title: "Badge Text" },
        { name: "title", type: "localeString", title: "Main Title" },
        { name: "description", type: "localeText", title: "Description Text" },
        {
          name: "image",
          type: "image",
          title: "Profile/About Image",
          options: { hotspot: true },
        },
      ],
    },
    // 02. Values / Philosophy Section
    {
      name: "cardsSection",
      type: "object",
      title: "02. Cards Section (Values/Philosophy)",
      fields: [
        { name: "title", type: "localeString", title: "Section Title" },
        {
          name: "description",
          type: "localeText",
          title: "Section Description",
        },
        {
          name: "cards",
          type: "array",
          title: "Feature Cards",
          of: [
            {
              type: "object",
              fields: [
                { name: "image", type: "image", title: "Icon/Image" },
                { name: "title", type: "localeString", title: "Card Title" },
                {
                  name: "description",
                  type: "localeText",
                  title: "Card Description",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
