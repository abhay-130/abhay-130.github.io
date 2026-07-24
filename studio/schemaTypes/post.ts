import { defineType, defineField } from 'sanity';

export const postType = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({ 
      name: 'title', 
      title: 'Title', 
      type: 'string' 
    }),
    defineField({ 
      name: 'slug', 
      title: 'Slug', 
      type: 'slug', 
      options: { source: 'title' } 
    }),
    defineField({ 
      name: 'date', 
      title: 'Publish Date', 
      type: 'date' 
    }),
    defineField({ 
      name: 'category', 
      title: 'Category', 
      type: 'string' 
    }),
    defineField({ 
      name: 'description', 
      title: 'Description / Excerpt', 
      type: 'text' 
    }),
    // RICH TEXT CONTENT FIELD FOR HEADINGS & BOLD TEXT:
    defineField({
      name: 'body',
      title: 'Blog Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [{ title: 'Bullet', value: 'bullet' }],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube Vlog Link (Optional)',
      type: 'url',
    }),
  ],
});