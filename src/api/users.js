import request from '../utils/request'

/**
 * 后面的每次请求都是需要携带token的
 */
export const findUserList = (name) => {
  return request({
    url: "/test",
    method: 'post',
    params: {
      name 
    }
  })
} 
 