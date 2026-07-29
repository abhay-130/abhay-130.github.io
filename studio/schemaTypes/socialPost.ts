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
    /* --- SINGLE IMAGE (COVER / FALLBACK) --- */
    {
      name: 'image',
      title: 'Main Photo / Cover Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Used as the main thumbnail in grids or fallback.',
    },
    /* --- CAROUSEL IMAGES (ARRAY OF MULTIPLE PHOTOS) --- */
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
    {
      name: 'gridSpan',
      title: 'Grid Span Layout (Optional)',
      type: 'string',
      description: 'Custom Tailwind grid class e.g. "md:col-span-2 md:row-span-2"',
    },
  ],
};