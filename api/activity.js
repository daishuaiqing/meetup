const { baseUrl } = require('./baseApi.js');
const { request } = require('../utils/util.js');

export const getActivityList = (info) => {
  return request(baseUrl + "/activity/activityPage", info, 'POST')
}