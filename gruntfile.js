module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                options: {
                    //paths: ["../client/public/less"]
                    compress: true,
                    cleancss: true
                },
                files: {
                    "web/public/styles/main.css" : "web/public/less/main.less"
                }
            }
        },
        watch: {
            less: {
                files: "web/public/less/*.less",
                tasks: ["less"],
                options: {
                    interrupt: true
                }
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: ["web/public/styles/main.css"]
            }
        },
        uglify: {
            options: {
                mangle: true
            },
            my_target: {
                files: {
                    'web/public/js/build/main.min.js': ['web/public/js/lib/scroll.js','web/public/js/lib/contact.js', 'web/public/js/lib/init.js'],
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less', 'watch']);
    grunt.registerTask('compile', ['less', 'uglify']);
    
};
