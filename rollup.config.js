// rollup.config.js
export default {
    input: 'public/index.js',
    output: {
      file: 'dist/bundle.js',
      format: 'iife',
      globals: {
        'firebase/app': 'app$1',
        'firebase/auth': 'auth$1',
        // Add other globals if needed
      }

    },
    external: ['firebase/app', 'firebase/auth'],
  };
  