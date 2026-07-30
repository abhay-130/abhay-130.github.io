export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Client / Person Name',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role or Project Title',
      type: 'string',
    },
    {
      name: 'quote',
      title: 'Testimonial Text',
      type: 'text',
    },
  ],
}