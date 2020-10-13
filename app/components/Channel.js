import Radio from 'backbone.radio';

const data = {};

if (!data.hasOwnProperty('Channel')) {
  data.Channel = Radio.channel('main-channel');
}

module.exports = data.Channel;
