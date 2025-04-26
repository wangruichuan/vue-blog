import request  from "./request";
// √
export async function getProjectsApi(){
  return request.get('/api/project')
}
