module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['mocha', 'chai-as-promised', 'chai'],

    files: [
        'node_modules/babel-polyfill/dist/polyfill.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-mocks/angular-mocks.js',
        'node_modules/sinon/pkg/sinon-1.17.7.js',

        'app/services/*.js',
        'app/controllers/*.js',
        'app/app.module.js',

        'test/**/*.spec.js'
    ],

    client: {
        mocha: {
            reporter: 'html'
        }
    },

    exclude: [
    ],

    preprocessors: {
        'test/**/*.js': ['babel']
    },

    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline'
      }
    },

    reporters: ['spec', 'html'],

    htmlReporter: {
        outputDir: 'reports',
        templatePath: 'test/template.html'
    },

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false,

    concurrency: Infinity
  })
};
