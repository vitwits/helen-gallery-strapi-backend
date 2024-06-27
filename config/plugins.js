module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'local', // Провайдер зберігання (local, aws-s3, cloudinary тощо)
      sizeLimit: 6000000, // Максимальний розмір файлу в байтах (5 МБ)

      providerOptions: {
        // Опції для провайдера зберігання (залежать від обраного провайдера)
        // Наприклад, для local:
        public: {
          path: './public', // Шлях до папки, де зберігаються файли
          url: '/uploads', // URL, за яким доступні файли
        },
      },

      actionOptions: {
        upload: {
          quality: 92,  // Якість зображення (0-100)
          webp: true,  // Конвертувати зображення у WebP (якщо підтримується)
          // fit: 'contain', // Як зображення має вписуватися в рамку (cover, contain, fill, inside, outside)
        },
        uploadStream: {
          quality: 92,
        },
        delete: {
          enabled: true, // Увімкнути/вимкнути автоматичне видалення файлів
          // custom: async (file) => { /* Ваша кастомна логіка видалення */ }
        },
      },

      breakpoints: {
        large: 2500, // Ширина великого зображення
        small:800,  // Ширина маленького зображення
      },
    },
  },
});

