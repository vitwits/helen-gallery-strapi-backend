module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "local",
      sizeLimit: 6000000,

      providerOptions: {
        public: {
          path: "./public",
          url: "/uploads",
        },
      },

      actionOptions: {
        upload: {
          quality: 92,
          webp: true,
        },
        uploadStream: {
          quality: 92,
        },
        delete: {
          enabled: true,
        },
      },

      breakpoints: {
        large: 2500,
        small: 800,
      },
    },
  },
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: env('EMAIL_USER'),
          pass: env('EMAIL_APP_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: env('EMAIL_USER'),
        defaultReplyTo: env('EMAIL_USER'),
      },
    },
  },
});
