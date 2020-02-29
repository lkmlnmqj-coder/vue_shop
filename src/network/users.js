import { request } from './request'

/**
 * 获取用户数据
 * @param {String} query 查询参数,默认为null
 * @param {Number} pagenum 当前页码
 * @param {Number} pagesize 每页显示条数
 */
export function getUserList ({ query, pagenum, pagesize }) {
  return request({
    url: '/users',
    method: 'get',
    params: {
      query,
      pagenum,
      pagesize
    }
  })
}

/**
 * 修改用户状态
 * @param {Object} userInfo 用户对象
 */
export function changeUserState(userInfo) {
  return request({
    url: 'users/' + userInfo.id + '/state/' + userInfo.mg_state,
    method: 'put',
  })
}

// 按id查询用户
export function queryUser(id) {
  return request({
    url: '/users/' + id,
    method: 'get',
  })
}

// 添加新用户
export function addUser({ username, password, email, mobile }) {
  return request({
    url: '/users',
    method: 'post',
    data: {
      username: username,
      password: password,
      email: email,
      mobile: mobile
    }
  })
}

// 修改用户
export function editUser({ id, email, mobile }) {
  return request({
    url: '/users/' + id,
    method: 'put',
    data: {
      email: email,
      mobile: mobile
    }
  })
}

// 删除用户
export function deleteUserById(id) {
  return request({
    url: '/users/' + id,
    method: 'delete'
  })
}

/** 页面状态 */
export class DataPaging {
  constructor(queryInfo, total) {
    this.pagenum = queryInfo.pagenum
    this.pagesize = queryInfo.pagesize
    this.total = total
  }
}
