var gulp = require('gulp');
var elixir = require('laravel-elixir');
var karma = require('karma').server;
var _ = require('underscore');
var gutils = require('gulp-util');

var task = elixir.Task;

function isTddOrWatchTask() {
    return gutils.env._.indexOf('watch') > -1 || gutils.env._.indexOf('tdd') > -1;
}

elixir.extend('karma', function(args) {
    if (! isTddOrWatchTask()) return;

    var defaults = {
        configFile: process.cwd()+'/karma.conf.js',
        jsDir: ['resources/assets/js/**/*.js', 'resources/assets/coffee/**/*.coffee'],
        autoWatch: true,
        singleRun: false
    };

    var options = _.extend(defaults, args);

    var isStarted = false;

    new task('karma', function() {
        if( ! isStarted) {
            karma.start(options);
            isStarted = true;
        }
    }).watch(options.jsDir, 'tdd');
});
