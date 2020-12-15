module.exports = {
    ci: {
      collect: {
        /* Add configuration here */
        numberOfRuns: 3,
        startServerCommand: 'cd monorepo-ci-space && npm run nx -- serve app1',
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
        target: 'filesystem',
        outputDir: './lh/reports'
      },
    },
  };