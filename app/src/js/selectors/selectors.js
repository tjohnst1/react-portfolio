import { createSelector } from 'reselect'

function findProject(projects, projectId){
  return projectArr.filter((project) => project.id === projectId)[0]
}

const getProjects = (store) => store.projects
const getSelectedProject = (store) => store.selectedProject
const getCurrentRoute = store => store.currentRoute

const getFilteredProjects = createSelector(
  getProjects, getSelectedProject,
  (projects, projectId) => findProject(projects, projectId)
)

export const portfolio = createSelector(
  getFilteredProjects,
  getSelectedProject,
  getCurrentRoute,
  (filteredProjects, selectedProject, currentRoute) => {
    return { filteredProjects, selectedProject, currentRoute }
  }
)
