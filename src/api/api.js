import qs from 'qs';
import $p from '../plugins/service';

export default {
  getIndexPic(params) {
    return $p.get(`/api/data/%E5%89%8D%E7%AB%AF/10/${params}`);
  },
  getIosPic(params) {
    return $p.get(`/api/data/iOS/10/${params}`);
  },
  getAndroidPic(params) {
    return $p.get(`/api/data/Android/10/${params}`);
  },
  getContent(params) {
    return $p.get(`/api/history/content/3/1?${qs.stringify(params)}`);
  },
};
