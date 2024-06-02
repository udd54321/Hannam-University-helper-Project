module.exports = {
  root: true,
  extends: '@react-native',
  'linebreak-style': [
    'error',
    require('os').EOL === '\r\n' ? 'windows' : 'unix',
  ],
  'prettier/prettier': ['error', {endOfLine: 'auto'}],
};
