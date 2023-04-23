
// 用户相关的接口

import request from '@/utils/request'

/**
 * 帐号密码登录
 * @param {String} account - 帐号
 * @param {String} password - 密码
 * @returns promise
 */
export const userAccountLogin = ({ account, password }) => {
  return request('/login', 'post', { account, password })
}

/**
 * 获取手机号的短信验证码
 * @param {String} mobile - 手机号
 * @returns promise
 */
export const userMobileLoginMsg = (mobile) => {
  return request('/login/code', 'get', { mobile })
}

/**
 * 手机号登录
 * @param {String} mobile - 手机号
 * @param {String} code - 短信验证码，默认123456
 * @returns promise
 */
export const userMobileLogin = ({ mobile, code }) => {
  return request('/login/code', 'post', { mobile, code })
}
