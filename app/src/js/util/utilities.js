export function findProject(projectId, projectArr){
  return projectArr.filter((project) => project.id === projectId)[0]
}
