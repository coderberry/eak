module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-ember-template-compiler');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-es6-module-transpiler');

  grunt.initConfig({
    watch: {
      scripts: {
        files: ['index.html', 'app/*.js', 'app/templates/*.hbs'],
        tasks: ['dev'],
        options: {
          interrupt: true,
          debounceDelay: 250
        }
      }
    },
    concat: {
      dist: {
          src: [
            'vendor/jquery/jquery.min.js',
            'vendor/handlebars/handlebars.js',
            'vendor/ember/ember.js',
            'tmp/**/*.js',
            'app/lib/tmpl.min.js'],
          dest: 'app/lib/deps.min.js'
      },
      test: {
          src: [
            'vendor/jquery/jquery.min.js',
            'vendor/handlebars/handlebars.js',
            'vendor/ember/ember.js',
            'vendor/jquery-mockjax/jquery.mockjax.js',
            'tmp/**/*.js',
            'app/lib/tmpl.min.js'],
          dest: 'app/lib/deps.min.js'
      }
    },
    emberhandlebars: {
        compile: {
            options: {
                templateName: function(sourceFile) {
                    var newSource = sourceFile.replace('app/templates/', '');
                    return newSource.replace('.hbs', '');
                }
            },
            files: ['app/templates/*.hbs'],
            dest: 'app/lib/tmpl.min.js'
        }
    },
    transpile: {
      main: {
        type: 'amd',
        files: [{
          expand: true,
          cwd: 'app/',
          src: [
            '!lib/**/*',
            '**/*.js'
          ],
          dest: 'tmp/',
          ext: '.js'
        }]
      }
    }
  });

  grunt.task.registerTask('dev', ['emberhandlebars', 'transpile', 'concat:dist']);
  grunt.task.registerTask('local', ['dev', 'watch']);
  grunt.task.registerTask('deploy', ['emberhandlebars', 'concat:dist']);
  // grunt.task.registerTask('test', ['emberhandlebars', 'concat:test', 'karma']);

};