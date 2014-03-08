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
                    'web/public/js/build/main.min.js': ['web/public/js/bower_components/imager.js/Imager.js', 'web/public/js/lib/scroll.js','web/public/js/lib/contact.js', 'web/public/js/lib/init.js'],
                }
            }
        },
        responsive_images: {
            me: {
                options: {
                    engine: "im",
                    sizes: [{
                        name: "156",
                        width: 156
                    },{
                        name: "156",
                        width: 209,
                        suffix: "-1.3x"
                    },{
                        name: "156",
                        width: 312,
                        suffix: "-2x"
                    }]
                },
                files: [{
                    expand: true,
                    src: ['me.png'],
                    dest: 'web/public/img/me/',
                    cwd: 'web/public/img/'
                }]
            },
            logo: {
                options: {
                    engine: "im",
                    sizes: [{
                        name: "150",
                        width: 150
                    },{
                        name: "150",
                        width: 195,
                        suffix: "-1.3x"
                    },{
                        name: "150",
                        width: 300,
                        suffix: "-2x"
                    }]
                },
                files: [{
                    expand: true,
                    src: ['*.png'],
                    dest: 'web/public/img/logo/min/',
                    cwd: 'web/public/img/logo/'
                }]
            },
            portfolio: {
                options: {
                    engine: "im",
                    sizes: [{
                        name: "370",
                        width: 370
                    },{
                        name: "370",
                        width: 481,
                        suffix: "-1.3x"
                    },{
                        name: "370",
                        width: 740,
                        suffix: "-2x"
                    }]
                },
                files: [{
                    expand: true,
                    src: ['*.png'],
                    dest: 'web/public/img/portfolio/min/',
                    cwd: 'web/public/img/portfolio/'
                }]
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-responsive-images');

    grunt.registerTask('default', ['less', 'watch']);
    grunt.registerTask('compile', ['less', 'uglify', 'responsive_images']);
    
};
