module.exports = {
    ci: {
      collect: {
        /* Add configuration here */
        startServerCommand: 'ng serve',
        url: ['http://localhost:4200']
      },
      upload: {
        /* Add configuration here */
        target: 'temporary-public-storage'
      },
    },
  };