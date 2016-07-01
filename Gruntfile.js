// Generated on 2015-06-08 using generator-angular 0.10.0
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    app: 'src',
    dist: 'dist'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: appConfig,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: [
          '<%= yeoman.app %>/app/**/*.js',
          '<%= yeoman.app %>/common/**/*.js',
          '<%= yeoman.app %>/state-components/**/*.js',
          '<%= yeoman.app %>/state-components-mobile/**/*.js',
          '!<%= yeoman.app %>/app/**/*.spec.js',
          '!<%= yeoman.app %>/common/**/*.spec.js',
          '!<%= yeoman.app %>/state-components/**/*.spec.js',
          '!<%= yeoman.app %>/state-components-mobile/**/*.spec.js',
        ],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      jsTest: {
        files: [
          '<%= yeoman.app %>/app/**/*.spec.js',
          '<%= yeoman.app %>/common/**/*.spec.js',
          '<%= yeoman.app %>/state-components/**/*.spec.js',
          '<%= yeoman.app %>/state-components-mobile/**/*.spec.js',
        ],
        tasks: ['newer:jshint:test']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/**/*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= yeoman.app %>/**/*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      test: {
        options: {
          port: 9001,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= yeoman.dist %>'
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/app/**/*.js',
          '<%= yeoman.app %>/common/**/*.js',
          '<%= yeoman.app %>/state-components/**/*.js',
          '<%= yeoman.app %>/state-components-mobile/**/*.js',
          '!<%= yeoman.app %>/app/**/*.spec.js',
          '!<%= yeoman.app %>/common/**/*.spec.js',
          '!<%= yeoman.app %>/state-components/**/*.spec.js',
          '!<%= yeoman.app %>/state-components-mobile/**/*.spec.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: [
          '<%= yeoman.app %>/app/**/*.spec.js',
          '<%= yeoman.app %>/common/**/*.spec.js',
          '<%= yeoman.app %>/state-components/**/*.spec.js',
          '<%= yeoman.app %>/state-components-mobile/**/*.spec.js',
        ]
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/{,*/}*',
            '!<%= yeoman.dist %>/.git{,*/}*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Automatically inject Bower components into the app
    wiredep: {
      app: {
        src: ['<%= yeoman.app %>/index.html'],
        ignorePath: /\.\.\//
      },
      sass: {
        src: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
        ignorePath: /(\.\.\/){1,2}bower_components\//
      },
      // Adds bower components to karma files
      test: {
        src: 'test/karma.conf.js',
        ignorePath: /\.\.\//,
        fileTypes: {
          js: {
            block: /(([\s\t]*)\/\/\s*bower:*(\S*))(\n|\r|.)*?(\/\/\s*endbower)/gi,
            detect: {
              js: /'(.*\.js)'/gi
            },
            replace: {
              js: '\'{{filePath}}\','
            }
          }
        }
      }
    },

    // Compiles Sass to CSS and generates necessary files if requested
    compass: {
      options: {
        sassDir: '<%= yeoman.app %>/',
        cssDir: '.tmp',
        generatedImagesDir: '.tmp/images/generated',
        imagesDir: '<%= yeoman.app %>',
        javascriptsDir: '<%= yeoman.app %>',
        fontsDir: '<%= yeoman.app %>/assets/webfonts',
        importPath: './bower_components',
        httpImagesPath: '/assets/images',
        httpGeneratedImagesPath: '/assets/images/generated',
        httpFontsPath: '/assets/webfonts',
        relativeAssets: false,
        assetCacheBuster: false,
        raw: 'Sass::Script::Number.precision = 10\n'
      },
      dist: {
        options: {
          generatedImagesDir: '<%= yeoman.dist %>/assets/images/generated',
          outputStyle: 'compressed'
        }
      },
      server: {
        options: {
          debugInfo: true,
          sourcemap: true,
          watch: true
        }
      },
      oneOff: {
        options: {
          force: true,
          sourcemap: true
        }
      }
    },

    // Renames files for browser caching purposes
    filerev: {
      dist: {
        src: [
          '<%= yeoman.dist %>/**/*.js',
          '<%= yeoman.dist %>/**/*.css',
          '<%= yeoman.dist %>/**/*.css',
          '<%= yeoman.dist %>/assets/icons/as-fonts/**/*',
          '<%= yeoman.dist %>/assets/webfonts/**/*',
          '!<%= yeoman.dist %>/portfolio/animations-demo/quizkick/**/*'
        ]
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= yeoman.app %>/*.html',
      options: {
        dest: '<%= yeoman.dist %>',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist %>/*.html'],
      css: ['<%= yeoman.dist %>/styles/*.css'],
      options: {
        assetsDirs: [
          '<%= yeoman.dist %>',
          '<%= yeoman.dist %>/assets'
        ],
        blockReplacements: {
          js: function (block) {
            var jsAttrs = '';

            if (block.dest === 'scripts/all-mobile-scripts.js') {
              jsAttrs = 'async defer';
            }

            return '<script ' + jsAttrs + ' src="' + block.dest + '"><\/script>';
          }
        }
      }
    },

    // The following *-min tasks will produce minified files in the dist folder
    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    // cssmin: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/styles/main.css': [
    //         '.tmp/styles/{,*/}*.css'
    //       ]
    //     }
    //   }
    // },
    // uglify: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/scripts/scripts.js': [
    //         '<%= yeoman.dist %>/scripts/scripts.js'
    //       ]
    //     }
    //   }
    // },
    // concat: {
    //   dist: {}
    // },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>',
          src: '**/*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/assets/images',
          src: '**/*.svg',
          dest: '<%= yeoman.dist %>/assets/images'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          minifyJS: true,
          removeCommentsFromCDATA: true,

          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          conservativeCollapse: true,
          removeAttributeQuotes: true,
          removeComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: ['*.html', 'portfolio/animations-demo/quizkick/index.html', 'static-pages/**/*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '.htaccess',
            'robots.txt',
            'favicon.ico',
            'sitemap.xml',

            // We don't need the html templates as they're added to ngtemplates
            '*.html',

            'assets/**/*',

            // Quizkick
            'portfolio/**/*',

            // The static html pages
            'static-pages/**/*.html',

            'php/**/*'
          ]
        }, {
          expand: true,
          cwd: '.tmp/assets/images',
          dest: '<%= yeoman.dist %>/assets/images',
          src: ['generated/*']
        }, {
          expand: true,
          dot: true,
          cwd: '.tmp/styles/',
          dest: '<%= yeoman.dist %>/styles/',
          src: [
            'outdated-browser.css'
          ]
        }]
      },
      // styles: {
      //   expand: true,
      //   cwd: '<%= yeoman.app %>/styles',
      //   dest: '.tmp/styles/',
      //   src: '{,*/}*.css'
      // }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: {
        tasks: ['compass:server', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      },
      test: [
        'compass:oneOff'
      ],
      dist: [
        'compass:dist',
        // 'imagemin',
        // 'svgmin'
      ]
    },

    filesize: {
      base: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>',
          src: '**/*.{png,jpg,jpeg,gif,webp,svg}'
        }],
        options: {
          output: [{
            stdout: false,
            path: '<%= yeoman.app %>/common/preloader/preloadable-files.constant.js',
            format: '{filename}#split#{size}#eof#',
            append: false
          }]
        }
      }
    },

    filetransform: {
      preloadableFiles: {
        options: {
          map: function (contents) {
            var
              files = contents.split('#eof#'),
              fileSplit,
              toReturn = {
                files: {}
              };

            for (var i = 0; i < files.length; i++) {
              fileSplit = files[i].split('#split#');

              // removes the new line and carriage return characters
              fileSplit[0] = fileSplit[0].replace(/\r|\n/gi, '');

              // don't add empty values
              if (fileSplit[0].length > 0) {
                // removes the /src from the path. for some reason, filesize
                // doesn't do this.
                fileSplit[0] = fileSplit[0].replace(/^src\//gi, '');
                // parses the size to number
                fileSplit[1] = parseInt(fileSplit[1]);

                toReturn.files[fileSplit[0]] = fileSplit[1];
              }
            }

            return JSON.stringify(toReturn);
          },
          reduce: function (results) {
            var
              start = '/* jshint ignore:start */\r\n\r\n/* this file is dynamically generated by filetransform */\r\n\r\n(function () {\'use strict\';angular.module(\'common.preloader\').constant(\'PRELOADABLE_FILES\', ',
              end = ');})();\r\n\r\n/* jshint ignore:end */';

            var filesInfo = JSON.parse(results[0].contents);

            var content = JSON.stringify(filesInfo.files);

            return start + content + end;
          }
        },
        src: '<%= yeoman.app %>/common/preloader/preloadable-files.constant.js',
        dest: '<%= yeoman.app %>/common/preloader/preloadable-files.constant.js'
      },
      indexMobile: {
        options: {
          map: function (contents) {
            var mainMobileCss = grunt.file.read('.tmp/styles/main-mobile.css');

            contents = contents.replace('<link rel="stylesheet" href="styles/main-mobile.css">', '<style>' + mainMobileCss + '</style>');

            return contents;
          },
          reduce: function (results) {
            return results[0].contents;
          }
        },
        src: '<%= yeoman.dist %>/index-mobile.html',
        dest: '<%= yeoman.dist %>/index-mobile.html'
      },
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'test/karma.conf.js'
      }
    },

    ngtemplates: (function () {
      var getNgTemplatesOptions = function (moduleName) {
        return {
          bootstrap: function (module, script) {
            var prefix = '';
            prefix += '/* jshint ignore:start */\r\n\r\n/* this file is dynamically generated by ngtemplates */\r\n\r\n';
            prefix += '(function () {\'use strict\';angular.module(\'' + module + '\')';
            prefix += '.run([\'$templateCache\', function($templateCache) {';

            var suffix = '';
            suffix += '}]);})();';
            suffix += '\r\n\r\n/* jshint ignore:end */';

            return prefix + script + suffix;
          },
          htmlmin: {
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            conservativeCollapse: true,
            removeAttributeQuotes: true,
            removeComments: true,
            removeEmptyAttributes: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true
          },
          module: moduleName
        };
      };

      return {
        desktop: {
          cwd: '<%= yeoman.app %>',
          src: [
            '**/*.html',

            // disregard all mobile related files
            '!state-components-mobile/**/*.html',

            // disregard all quizkick related files
            '!portfolio/animations-demo/quizkick/**/*.html',
            // disregard all static html seo files
            '!static-pages/**/*.html',

            // Everything except for the main html files
            '!index.html',
            '!index-mobile.html'
          ],
          dest: '<%= yeoman.app %>/app/ng-templates/ng-templates.run.js',
          options: getNgTemplatesOptions('HyperionApp')
        },
        mobile: {
          cwd: '<%= yeoman.app %>',
          src: [
            '**/*.html',

            // disregard all dekstop related files
            '!state-components/**/*.html',

            // disregard all quizkick related files
            '!portfolio/animations-demo/quizkick/**/*.html',

            // disregard all static html seo files
            '!static-pages/**/*.html',

            // Everything except for the main html files
            '!index.html',
            '!index-mobile.html'
          ],
          dest: '<%= yeoman.app %>/app/ng-templates/ng-templates-mobile.run.js',
          options: getNgTemplatesOptions('HyperionMobileApp')
        }
      };
    })(),

    cwebp: {
      // Without expand and cwd cwebp won't work!
      hyperion: {
        expand: true,
        cwd: '<%= yeoman.app %>',
        src: 'assets/**/*.{jpg,png}',
        dest: '<%= yeoman.dist %>'
      },
      quizkick: {
        expand: true,
        cwd: '<%= yeoman.app %>',
        src: 'portfolio/animations-demo/quizkick/**/*.{jpg,png}',
        dest: '<%= yeoman.dist %>'
      },
      // There's a problem with cwebp. It doesn't work with empty attributes like -lossless;
      // This should be added at line 33, right before "args.push(options[key]);", inside the cwebp.js file
      // "if (options[key] !== undefined)"
      options: {
        q: 85,
        m: 6,

        mt: undefined
      }
    },

    replace: {
      htaccess: {
        src: '<%= yeoman.dist %>/.htaccess',
        overwrite: true,
        replacements: [{
          from: /\#\@\@\@(.+)\@\@\@\#/gmi,
          to: '$1'
        }]
      },
      html: {
        src: '<%= yeoman.dist %>/*.html',
        overwrite: true,
        replacements: [{
          from: /<\!\-\-\@\@\@(.+)\@\@\@\-\->/gmi,
          to: '$1'
        }]
      },
      scripts: {
        src: '.tmp/concat/scripts/*.js',
        overwrite: true,
        replacements: [{
          from: /\/\*\@\@\@(.+)\@\@\@\*\//gmi,
          to: '$1'
        }]
      },
      styles: {
        src: '.tmp/styles/*.css',
        overwrite: true,
        replacements: [{
          from: /\/\*\@\@\@(.+)\@\@\@\*\//gmi,
          to: '$1'
        }]
      },
      htmlStage: {
        src: '<%= yeoman.dist %>/*.html',
        overwrite: true,
        replacements: [{
          from: /<\!\-\-\@\@\_\_\@\@(.+)\@\@\_\_\@\@\-\->/gmi,
          to: '$1'
        }]
      }
    }
  });

  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'wiredep',
      'filesize',
      'filetransform:preloadableFiles',
      'compass:oneOff',
      'connect:livereload',
      'concurrent:server'
    ]);
  });

  grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

  grunt.registerTask('test', [
    'clean:server',
    'wiredep:test',
    'concurrent:test',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('build', function (target) {
    var tasks = [
      'clean:dist',
      'wiredep',

      'filesize',
      'filetransform:preloadableFiles',

      // Notice how this is added after 'filesize'!
      // Since the webp images are served from the server, the preloder module
      // still thinks that the images are jpg/png. Everything works as expected!
      'cwebp',

      'ngtemplates',
      'useminPrepare',
      'concurrent:dist',
      'concat',
      'copy:dist',
      'replace',
      'cssmin',
      'uglify',
      'filetransform:indexMobile',
      'filerev',
      'usemin',
      'htmlmin'
    ];

    var indexOfReplace = tasks.indexOf('replace');
    if (target === 'stage') {
      tasks[indexOfReplace] = 'replace:htmlStage';
    } else if (target === 'prod') {
      tasks.splice(indexOfReplace + 1, 0, 'replace:htaccess', 'replace:html', 'replace:scripts', 'replace:styles');
      tasks.splice(indexOfReplace, 1);
    } else {
      grunt.log.warn('The `build` task requires a target: `stage` or `prod`');
      return;
    }

    grunt.task.run(tasks);
  });

  grunt.registerTask('fastbuild', [
    'clean:dist',
    'ngtemplates',
    'useminPrepare',
    'concurrent:dist',
    'concat',
    'copy:dist',
    'replace',
    'cssmin',
    'uglify',
    'filetransform:indexMobile',
    'filerev',
    'usemin',
    'htmlmin'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
};
