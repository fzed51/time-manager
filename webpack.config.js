const genConf = require("@fzed51/webpack-config");

const conf = genConf({
  useReact: true,
  useTypescript: true
});

conf.module.rules.push({
  test: /\.mp3$/i,
  use: [
    {
      loader: "url-loader",
      options: { name: "media/[hash].[ext]" }
    }
  ]
});

module.exports = conf;
