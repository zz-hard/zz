/*
 * @Author: liuyr 
 * 城市模块API
 * @Date: 2019-12-22 18:54:17 
 * @Last Modified by: liuyr
 * @Last Modified time: 2019-12-22 19:53:09
 */
import axios from '@/utils/axios'
/* 查找数据 */
export async function findAllCity() {
  let res = await axios.get('/City/findAll');
  return res;
}