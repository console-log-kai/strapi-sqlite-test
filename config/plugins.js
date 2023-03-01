'use strict';

module.exports = {
  'preview-button': {
    config: {
      contentTypes: [
        {
          uid: 'api::event.event',
          draft: {
            url: 'https://next-strapi-draft-previews-poc.vercel.app/api/preview',
            query: {
              type: 'event',
              id: '{id}',
            },
          },
          published: {
            url: 'https://next-js-poc-events-page-cmfn.vercel.app/events/{id}',
          },
        }, 
      ],
    },
  },
};