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
        imagemin: {                          // Task
		    // static: {                          // Target
		    //   options: {                       // Target options
		    //     optimizationLevel: 3,
		    //     use: [mozjpeg()]
		    //   },
		    //   files: {                         // Dictionary of files
		    //     'dist/img.png': 'src/img.png', // 'destination': 'source'
		    //     'dist/img.jpg': 'src/img.jpg',
		    //     'dist/img.gif': 'src/img.gif'
		    //   }
		    // },
		    dynamic: {                         // Another target
		      files: [{
		        expand: true,                  // Enable dynamic expansion
		        cwd: 'img',                   // Src matches are relative to this path
		        src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
		        dest: 'img/'                  // Destination path prefix
		      }]
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
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.registerTask('deploy', [ 'ftp-deploy' ]);
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.registerTask('default', ['imagemin']);
	grunt.registerTask('default', tasks);
};