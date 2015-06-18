[![NPM](https://nodei.co/npm/laravel-elixir-karma.png)](https://nodei.co/npm/laravel-elixir-karma/)

## Laravel Elixir Karma Extension

## Install

```
npm install laravel-elixir-karma --save-dev
```

### Usage
```
require('laravel-elixir-karma');

elixir(function(mix) {
    mix.karma();
});
```


I've tried to set some sensible defaults from how I use to structure my files. Let me know if you think it's wrong.
In the meantime override the values:

```
{
    "configFile": process.cwd()+"/karma.conf.js"
    "jsDir": [
        "resources/assets/js/**/*.js", 
        "resources/assets/coffee/**/*.coffee"
    ]
}
```
