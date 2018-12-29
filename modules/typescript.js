export default function () {
  this.nuxt.options.extensions.push('ts');
  this.extendBuild(config => {
    config.module.rules.push({
      test: /\.tsx?$/,
      loader: 'ts-loader',
      options: {
        appendTsSuffixTo: [/\.vue$/]
      }
    });

    config.resolve.extensions.push('.ts');
  });
}
