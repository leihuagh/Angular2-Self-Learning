# Add Font Awesome 

## Sources
1. Thanks for Angular2-Leaflet-Starter https://github.com/haoliangyu/angular2-leaflet-starter
2. Thanks for // https://gist.github.com/Turbo87/e8e941e68308d3b40ef6, the creator of this feature

### Steps
1. $ npm install --save font-awesome
2. Make sure you have 
   a. css-loader,
   b. file-loader,
   c: style-loader,
   d: url-loader,
   e: webpack
   in your devDependencies
3. In your webpack.config.js
   ```json
   module.exports = {    
    module: {
        loaders: [
            ......
            // For font-awesome, created by Turbo87:
            // https://gist.github.com/Turbo87/e8e941e68308d3b40ef6
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "file?name=fonts/[name].[ext]" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "file?name=fonts/[name].[ext]" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "file?name=fonts/[name].[ext]" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file?name=fonts/[name].[ext]" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "file?name=fonts/[name].[ext]" }
        ]
    },
    ```
4. In your src/vendor.ts file, add:
   import 'font-awesome/css/font-awesome.min.css';

## Test your icon 
1. I added a home icon to home menu