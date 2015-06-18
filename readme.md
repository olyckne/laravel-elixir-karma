## Laravel Elixir Karma Extension


### Usage
```
require('laravel-elixir-karma');

elixir(function(mix) {
    mix.karma();
});
```


I've tried to set some sensible defaults from how I use to structure my files. Let me know if you think it's wrong.
In the meantime override the values:

``` json
{
    configFile: './karma.conf.js',
    jsDir: [
        'resources/assets/js/**/*.js', 
        'resources/assets/coffee/**/*.coffee'
    ]
}
```