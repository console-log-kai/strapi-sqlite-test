'use strict';

module.exports = {
  'preview-button': {
    config: {
      contentTypes: [
        {
          uid: 'api::event.event',
          draft: {
            url: 'http://localhost:3000/api/preview',
            query: {
              type: 'event',
              slug: '{slug}',
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