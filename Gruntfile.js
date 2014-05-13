module.exports = function(grunt) {
	'use strict';
	var gruntConfig = {
		pkg: grunt.file.readJSON('package.json'),
		min: {
			dist: {
				src: ['src/assets/js/scripts.js'],
				dest: 'src/assets/js/scripts.min.js'
			}
		},
        cssmin: {
            dist: {
                src: ['src/assets/css/style.css'],
                dest: 'src/assets/css/style.min.css'
            }
        },
        // uncomment for use less and comment cssmin configs
		// less: {
  //           development: {
  //               options: {
  //                   yuicompress: true
  //               },
  //               files: {
  //                   "./src/assets/css/all.min.css":
  //                   ["./src/assets/css/less/main.less"]
  //               }
  //           }
  //       },
		rsync: {
			dist: {
				src: './src/',
				dest: './dist',
				recursive: true,
				syncDest: true,
				exclude: ['main.*', 'less']
			},
            // uncomment and config
			deploy: {
				src: './dist/',
				dest: '/public_html/testegrunt',
				host: 'mrawebc@mraweb.com.br',
				recursive: true,
				syncDest: true
			}
		}
	};
	grunt.initConfig(gruntConfig);

	var keys = Object.keys(gruntConfig);
	var tasks = [];

	for(var i = 1, l = keys.length; i < l; i++) {
		tasks.push(keys[i]);
	}

	grunt.loadNpmTasks('grunt-yui-compressor');
	grunt.loadNpmTasks('grunt-rsync');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
    // uncomment for use less
	// grunt.loadNpmTasks('grunt-contrib-less');
	grunt.registerTask('default', tasks);
};