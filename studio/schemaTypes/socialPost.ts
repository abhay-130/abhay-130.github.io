export default {
  name: 'socialPost',
  title: 'Social Life Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'image',
      title: 'Main Photo / Cover Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Used as the main thumbnail in grids or fallback.',
    },
    {
      name: 'carouselImages',
      title: 'Carousel Photos',
      type: 'array',
      description: 'Add multiple photos here if you want an interactive carousel for this post.',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              title: 'Caption / Subtitle',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'youtubeUrl',
      title: 'YouTube Video Link (Optional)',
      type: 'string',
      description: 'If provided, a play button/video overlay will be prioritized.',
    },
    
    /* --- SIMPLE CONTAINER SIZE DROPDOWN --- */
    {
      name: 'gridSpan',
      title: 'Container Size',
      type: 'string',
      description: 'Select the size aspect ratio for this post in the gallery grid.',
      initialValue: '1x1',
      options: {
        list: [
          { title: '1x1 (Standard Square)', value: '1x1' },
          { title: '2x1 (Wide Banner)', value: '2x1' },
          { title: '1x2 (Tall Portrait)', value: '1x2' },
          { title: '2x2 (Large Square Hero)', value: '2x2' },
          { title: '3x1 (Full Width Banner)', value: '3x1' },
        ],
        layout: 'dropdown',
      },
    },
  ],
};