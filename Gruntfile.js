module.exports = function(grunt) {

  grunt.initConfig({
    clean:{
      build:{
        src:["dist"]
      }
    },
    copy:{
      main:{
        files:[
          {flatten:true, expand: true, src: ['src/js/**/*'], dest: 'dist/', filter: 'isFile'}
        ]
      }
    },

    uglify: {
      my_target: {
        files: {
          'dist/inject-plugin.min.js': ['src/js/inject-plugin.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');


  grunt.registerTask('build', ['clean','copy','uglify']);



};
