export default {
    root: 'src',  // Pointing to the src folder where index.html is
    base: process.env.NODE_ENV === 'development' ? '/' : '/data-structures-visualizer/',
    build: {
      outDir: '../dist'  // Output the build files to the root directory's dist folder
    }
  };
  