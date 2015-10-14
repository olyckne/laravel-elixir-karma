var gulp = require('gulp');
var elixir = require('laravel-elixir');
var karma = require('karma').server;
var _ = require('underscore');
var gutils = require('gulp-util');

var task = elixir.Task;

elixir.extend('karma', function(args) {
    if (! _.contains(['watch', 'tdd'], gutils.env._)) return;

    var defaults = {
        configFile: process.cwd()+'/karma.conf.js',
        jsDir: ['resources/assets/js/**/*.js', 'resources/assets/coffee/**/*.coffee'],
        autoWatch: true,
        singleRun: false
    };

    var options = _.extend(defaults, args);

    var isStarted = false;

    new task('karma', function() {
        if( ! isStarted && (_.contains(['watch', 'tdd'], gutils.env._))) {
            karma.start(options);
            isStarted = true;
        }
    }).watch(options.jsDir, 'tdd');
});

