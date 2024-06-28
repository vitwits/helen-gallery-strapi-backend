module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      origin: ['http://127.0.0.1:3000'], // Add your domain
    },
  },
  {
    name: 'strapi::public',
    config: {
      maxAge: 60,
    },
  },
];
