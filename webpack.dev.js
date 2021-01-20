const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

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
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "Nikolaj Kappler",
            meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' }
        }),

        // When importing a module whose path matches one of the following, just
        // assume a corresponding global variable exists and use that instead.
        // This is important because it allows us to avoid bundling all of our
        // dependencies, which allows browsers to cache those libraries between builds.
        new HtmlWebpackExternalsPlugin({
            externals: [
                {
                    module: 'react',
                    entry: 'https://unpkg.com/react@17/umd/react.production.min.js',
                    global: "React"
                }, {
                    module: 'react-dom',
                    entry: "https://unpkg.com/react-dom@16/umd/react-dom.production.min.js",
                    global: "ReactDOM"
                }, {
                    module: "fonts",
                    entry: {
                        path: "https://fonts.googleapis.com/css?family=Lobster|Raleway",
                        type: "css"
                    }
                }
            ],
            outputPath: ""
        })
    ],
};

module.exports = [
    {
        entry: "./src/index.tsx",
        output: {
            filename: "bundle.js",
            path: __dirname + "/dev"
        },

        ...commonConfig,
    },
    {
        entry: "./src/sidebar/sidebar.ts",
        output: {
            filename: "sidebar.js",
            path: __dirname + "/dev/sidebar"
        },

        ...commonConfig,
    },
    {
        entry: "./src/wip/pathfinding/index.tsx",
        output: {
            filename: "padthfinding.js",
            path: __dirname + "/dev/pathfinding"
        },

        ...commonConfig,
    },
    // {
    //     // plugins: [
    //     //     new CopyWebpackPlugin({
    //     //         patterns: [
    //     //             { from: __dirname + "/src/img", to: __dirname + "/docs/img" }
    //     //         ],
    //     //     }),
    //     // ],
    // }
];