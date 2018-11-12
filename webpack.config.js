const commonConfig = {

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json", "less"]
    },

    module: {
        rules: [
            // compiles Less to CSS
            { test: /\.less$/, use: ["style-loader", "css-loader?url=false", "less-loader"] },

            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "three": "THREE",
    }
};

module.exports = [{
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    ...commonConfig,
}, {
    entry: "./src/wip/home.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist/wip"
    },

    ...commonConfig,
}];