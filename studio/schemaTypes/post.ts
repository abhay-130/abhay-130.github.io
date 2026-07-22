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