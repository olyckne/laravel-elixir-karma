var gulp = require('gulp');
var elixir = require('laravel-elixir');
var karma = require('karma').server;
var _ = require('underscore');

elixir.extend('karma', function(args) {
    var defaults = {
        configFile: process.cwd()+'/karma.conf.js',
        jsDir: ['resources/assets/js/**/*.js', 'resources/assets/coffee/**/*.coffee']
    };

    var options = _.extend(defaults, args);

    var isStarted = false;

    gulp.task('karma', function() {
        if( ! isStarted) {
            karma.start(options);
            isStarted = true;
        }
    });

    this.registerWatcher('karma', options.jsDir, 'tdd');

    return this.queueTask('karma');
});

