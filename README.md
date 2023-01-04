# Example - Installing Windi CSS on a Laravel Project

> **Disclaimer**
> This is **not an official** guide to installing Windi CSS for a Laravel project, and has not been fully tested.

This example would demonstrate how to install and use Windi CSS in **Laravel 9 (Vite integrated)** by creating a Laravel project from scratch.

### Create Laravel project
(refer to [create project [Laravel]](https://laravel.com/docs/9.x/installation#your-first-laravel-project))
```shell
composer create-project laravel/laravel laravel-windicss-example
cd laravel-windicss-example
npm install
```

### Install Windi CSS
(refer to [Install [Windi CSS]](https://windicss.org/integrations/vite.html#install))
```shell
npm i -D vite-plugin-windicss windicss
```



### Configure `vite.config.js` 
(this file should be located at the root of the project)

```js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

import WindiCSS from 'vite-plugin-windicss' // add this line

export default defineConfig({
    plugins: [
        WindiCSS(), // add this line
        laravel({
            input: [
                'resources/css/app.css', 
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
});
```

### Import `virtual:windi.css` in `resources/js/app.js`
(refer to [Install [Windi CSS]](https://windicss.org/integrations/vite.html#install))
```js
import './bootstrap';
import 'virtual:windi.css'; // add this line
```

### Configure Windi CSS
create `windi.config.js` file in the root of the project.

```js
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: [

      // process all the blade templates inside of the
      // "resouces" folder
      'resources/**/*.blade.php', 

      // or more specifically the blade templates inside of the
      // "resources/view" fodler
      'resources/view/*.blade.php', 

    ],
  }
})
```

### Add Vite directive
add `@vite('resources/js/app.js')` to every blade template that you want to use Windi CSS.

(refer to [Load your scipts and styles [Laravel]](https://laravel.com/docs/9.x/vite#loading-your-scripts-and-styles))

```html
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Laravel</title>

  @vite('resources/js/app.js') <!-- add this line here -->
</head>
<body>

  <!-- add this to test Windi CSS is working -->
  <h1 class="font-bold text-8xl bg-gradient-to-br from-green-500 to-blue-500 bg-clip-text text-transparent">Hello World</h1>

</body>
</html>
```

## Test

Execute the following command at the root directory
```shell
npm run dev
```

Then, open another command prompt to execute the follow command
```shell
php artisan serve
``` 

For more details, please refer to [Running Vite [Laravel]](https://laravel.com/docs/9.x/vite#running-vite).


## License
---
MIT