import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'socialPost',
  title: 'Social Life Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title / Moment Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'location',
      title: 'Location (e.g., IIT Roorkee, Rishikesh)',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube Video Link (Optional)',
      type: 'url',
      description: 'If provided, a play button/video overlay will be prioritized.',
    }),
    defineField({
      name: 'gridSpan',
      title: 'Grid Display Layout Size',
      type: 'string',
      options: {
        list: [
          { title: 'Standard Box (1x1)', value: 'md:col-span-1 md:row-span-1 aspect-square md:aspect-auto' },
          { title: 'Large Square (2x2)', value: 'md:col-span-2 md:row-span-2 aspect-square md:aspect-auto' },
          { title: 'Tall Portrait (1x2)', value: 'md:col-span-1 md:row-span-2 aspect-[3/4] md:aspect-auto' },
          { title: 'Wide Banner (2x1)', value: 'md:col-span-2 md:row-span-1 aspect-[16/9] md:aspect-auto' },
          { title: 'Full Width Row (3x1)', value: 'md:col-span-3 md:row-span-1 aspect-[21/9] md:aspect-auto' },
        ],
      },
      initialValue: 'md:col-span-1 md:row-span-1 aspect-square md:aspect-auto',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'location',
      media: 'image',
    },
  },
});