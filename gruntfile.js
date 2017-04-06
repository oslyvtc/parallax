module.exports = function(grunt) {

  grunt.initConfig({ // Вказується конфігурація
   concat: { // злив усіх файлів в один!
      options: {
        separator: ';'
      },
      dist: { // пункти призначення запису файлів
        src: ['app/src/*.js'],
        dest: 'dist/main.js'
      }
    },
    uglify: { // мініфікація
        dist: {
            src: ['dist/main.js'],
            dest: 'dist/main.min.js'
        }
    },
    watch: {
      options: {
        livereload: true
      }
    }    
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
    
  grunt.registerTask('default', ['concat','uglify','watch']); // Реєструєм задачі для виконання!
  grunt.registerTask('dev', ['concat','uglify','watch']); 

};