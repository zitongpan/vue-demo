import axios from 'axios';
import { Message } from 'element-ui';
import Store from '../vuex/store';

const $p = axios.create({
  timeout: 10000,
});
$p.interceptors.request.use((config) => {
  Store.commit('UPDATA_LOADING', true);
  return config;
}, (error) => {
  Store.commit('UPDATA_LOADING', false);
  return Promise.reject(error);
});
$p.interceptors.response.use((data) => {
  Store.commit('UPDATA_LOADING', false);
  Message({
    message: '加载成功',
    type: 'success',
  });
  return data;
}, (error) => {
  Message({
    message: '加载失败',
    type: 'error',
  });
  Store.commit('UPDATA_LOADING', false);
  return Promise.reject(error);
});
export default $p;
