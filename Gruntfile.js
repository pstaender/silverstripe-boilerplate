module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  let themeDir = 'www/themes/mytheme';

  let coffeeScriptFiles = {};
  coffeeScriptFiles[`${themeDir}/javascript/dist/app.js`] = [
    `${themeDir}/coffee/*.coffee`,
  ];
  let babelFiles = {};
  babelFiles[`${themeDir}/javascript/dist/app.js`] = [
    `${themeDir}/es6/*.es6`,
  ];

  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true,
        presets: ['@babel/preset-env']
      },
      dist: {
        files: babelFiles,
      }
    },
    coffee: {
      compile: {
        options: {
          sourceMap: true,
          bare: true,
          join: true,
        },
        files: coffeeScriptFiles,
      },
    },
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: [{
          expand: true,
          src: ["**", "*.scss", "*.sass"],
          cwd: `${themeDir}/scss`,
          dest: `${themeDir}/css`,
          ext: ".css",
        }]
      }
    },
    less: {
      options: {
        sourceMap: true
      },
      dist: {
        files: [{
          expand: true,
          src: ["*.less"],
          cwd: `${themeDir}/less`,
          dest: `${themeDir}/css`,
          ext: ".css",
        }]
      }
    },
    autoprefixer: {
      dist: {
        files: [{
          expand: true,
          src: "*.css",
          cwd: `${themeDir}/css`,
          dest: `${themeDir}/css`,
        }]
      }
    },
    watch: {
      assets: {
        files: [`${themeDir}/scss/*.scss`, `${themeDir}/coffee/*.coffee`, `${themeDir}/es6/*.es6`],
        tasks: [
          'sass',
          'autoprefixer',
          'coffee:compile',
          //'babel'
        ]
      }
    },
  });

  grunt.registerTask('default', [
    'less',
    'sass',
    'autoprefixer',
    'coffee:compile',
    //'babel'
  ]);

};
