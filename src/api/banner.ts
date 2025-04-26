import request  from "./request";
// √
export async function getBanners(){
  return request.get('/api/banners')
}
