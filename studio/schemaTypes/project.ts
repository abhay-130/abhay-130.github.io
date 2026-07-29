export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug (URL Identifier)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          'Full-Stack Development',
          'Architecture Thesis',
          'Vernacular Architecture',
          'Branding & Identity',
          'Leadership & Events',
          'UI/UX Design',
        ],
      },
    },
    {
      name: 'description',
      title: 'Short Summary',
      type: 'text',
      rows: 2,
    },
    {
      name: 'role',
      title: 'Your Role',
      type: 'string',
    },
    {
      name: 'timeline',
      title: 'Timeline / Year',
      type: 'string',
    },
    {
      name: 'client',
      title: 'Client / Context',
      type: 'string',
    },
    {
      name: 'techStack',
      title: 'Tech Stack / Tools Used',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'mainImage',
      title: 'Main Cover Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'gallery',
      title: 'Additional Case Study Photos',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    /* --- RICH TEXT FIELD FOR BOLD, ITALICS, HEADINGS & LISTS --- */
    {
      name: 'fullCaseStudy',
      title: 'Full Case Study Breakdown',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
          },
        },
      ],
    },
    {
      name: 'videoUrl',
      title: 'Video Embed URL',
      type: 'url',
    },
    {
      name: 'externalLink',
      title: 'External Live Link',
      type: 'url',
    },
    {
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
  ],
};