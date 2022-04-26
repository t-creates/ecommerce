export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true, //Sanity property -> gives ability to resposively adapt images to different aspect ratios
      }
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
     // Slug -> like a url, a unique string
     name: 'slug',
     title: 'Slug',
     type: 'slug',
     options: {
       source: 'name',
       maxLength: 90,
     }
    },
    {
      name:'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'details',
      title: 'Details',
      type: 'string',
    }
  ]
}