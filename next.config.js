const { join } = require('path')
const withOptimizedImages = require('next-optimized-images')

module.exports = withOptimizedImages({
  sassOptions: {
    includePaths: [join(__dirname, 'src/styles')]
  }
})
