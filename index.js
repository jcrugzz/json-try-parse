'use strict';

module.exports = function tryParse(data) {
  var json;

  try {
    json = JSON.parse(data);
  } catch (ex) {}

  return json;
};
