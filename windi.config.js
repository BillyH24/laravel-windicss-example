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