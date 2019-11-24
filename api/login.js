const { baseUrl } = require('./baseApi.js');
const { request } = require('../utils/util.js');

export const login = (info) => {
  return request(baseUrl + "/weixin/getAccountByCode", info, 'Get')
}