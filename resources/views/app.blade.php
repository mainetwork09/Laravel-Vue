<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{csrf_token()}}" charset="utf-8">
        <title>Laravel-Vue</title>
        <link href="{{ asset('css/app.css') }}" rel="stylesheet" type="text/css">
    </head>
    <body>
    <div id="app">
        <app-header></app-header>
        <router-view></router-view>
        <footer>by Chonable</footer>
    </div>
    <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
