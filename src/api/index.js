import request from '@/utils/request';

export function login(username, password) {
  return request({
    url: '/cas/login',
    method: 'post',
    params: {
      username,
      password
    }
  });
}

export const getUserByToken = token => request({
  url: `/user/getUserByToken?token=${token}`,
  method: 'get'
});

export const getTableList = queryList => request({
  url: `/user/getTableList?current=${queryList.current}&pageSize=${queryList.pageSize}`,
  method: 'get'
});



// 厂商接口
// 新增配置项
// export const getQueryConfig = params => request({
//   url: '/v1/cusConfig/addConfig',
//   method: 'put',
//   params
// });


// 根据厂商ID查询配置项
export const getQueryConfig = params => request({
  url: '/v1/cusConfig/queryConfig',
  method: 'get',
  params
});
