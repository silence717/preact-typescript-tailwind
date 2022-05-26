// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = (config, env, helpers) => {
    Object.assign(config, { resolve: {
        ...config.resolve,
        alias: {
            ...config.resolve.alias,
            components: path.resolve(__dirname, 'src/components'),
            scripts: path.resolve(__dirname, 'src/scripts')
        }
    }})
    // console.log(config)
    const postCssLoaders = helpers.getLoadersByName(config, 'postcss-loader');
    postCssLoaders.forEach(({ loader }) => {
        const plugins = loader.options.plugins;
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        plugins.unshift(require('tailwindcss'));
    });
    return config;
};