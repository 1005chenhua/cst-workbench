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

// 用户
export const addTemp = params => request({
  url: '/v1/userConfigInfo/CusUserConfig/add',
  params: params,
  method: 'post'
});
// 个人模板
export const getPersonalTemp = () => request({
  url: '/v1/userConfigInfo/CusUserConfig/queryUserById',
  method: 'get'
});
// 公共模板
export const getPubTemp = () => request({
  url: '/v1/userConfigInfo/CusUserConfig/list',
  method: 'get'
});
// 模板详情
export const getTempDetail = params => request({
  url: '/v1/userConfigInfo/userFunctionInfo/list',
  params: params,
  method: 'get'
});
// echarts
export const getEcharts = params => request({
  url: '/v1/functionInfo/functionInfo/list',
  params: params,
  method: 'get'
});
// 删除
export const deleteTemp = parsms => request({
  url: '/v1/userConfigInfo/CusUserConfig/remove',
  method: 'DELETE',
  params: parsms
});
