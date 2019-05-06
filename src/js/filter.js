import Vue from 'vue';

/** 格式化时间戳 */
Vue.filter('formDate', (value) => {
  if (!value) return '';
  const date = new Date(value);
  const yy = date.getFullYear();
  let MM = date.getMonth() + 1;
  MM = MM < 10 ? `0${MM}` : MM;
  let dd = date.getDate();
  dd = dd < 10 ? `0${dd}` : dd;
  let hh = date.getHours();
  hh = hh < 10 ? `0${hh}` : hh;
  let mm = date.getMinutes();
  mm = mm < 10 ? `0${mm}` : mm;
  let ss = date.getSeconds();
  ss = ss < 10 ? `0${ss}` : ss;
  return `${yy}-${MM}-${dd} ${hh}:${mm}:${ss}`;
});
