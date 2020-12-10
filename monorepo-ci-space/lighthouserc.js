module.exports = {
    ci: {
      collect: {
        /* Add configuration here */
        startServerCommand: 'cd monorepo-ci-space && ng serve',
        url: ['http://localhost:4200']
      },
    //   assert: {
    //     assertions: {
    //       'categories:performance': ['warn', {minScore: 1}],
    //       'categories:accessibility': ['error', {minScore: 1}]
    //     }
    //   },
      upload: {
        /* Add configuration here */
        target: 'temporary-public-storage'
      },
    },
  };