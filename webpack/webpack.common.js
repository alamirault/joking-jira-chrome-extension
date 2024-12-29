const webpack = require("webpack");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const srcDir = path.join(__dirname, "..", "src");

module.exports = {
    entry: {
        configuration_pop_up: path.join(srcDir, 'configuration/ConfigurationPopUp.tsx'),
        background: path.join(srcDir, 'background.ts'),
        sprint_goal_as_title: path.join(srcDir, 'alteration/sprintGoalAsTitle.ts'),
        disable_emoji_autocomplete: path.join(srcDir, 'alteration/disableEmojiAutocomplete.ts'),
        force_display_copy_link: path.join(srcDir, 'alteration/forceDisplayCopyLink.ts'),
    },
    output: {
        path: path.join(__dirname, "../dist/js"),
        filename: "[name].js",
    },
    optimization: {
        splitChunks: {
            name: "vendor",
            chunks(chunk) {
              return chunk.name !== 'background';
            }
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: ".", to: "../", context: "public" }],
            options: {},
        }),
    ],
};
