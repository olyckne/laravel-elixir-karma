var gulp = require('gulp');
var elixir = require('laravel-elixir');
var karma = require('karma').server;
var _ = require('underscore');

var task = elixir.Task;

elixir.extend('karma', function(args) {
    var defaults = {
        configFile: process.cwd()+'/karma.conf.js',
        jsDir: ['resources/assets/js/**/*.js', 'resources/assets/coffee/**/*.coffee']
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

