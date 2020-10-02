const db = require("../db-config");

module.exports = {
  findProject,
  findResource,
  findTasks,
  addProject,
  addResource,
  addTask,
  findById

};


//list of projects
function findProject() {
  return db('projects');
}

//list of resources
function findResource() {
  return db('resource');
}

//list of tasks w/ project name and desc
function findTasks(project_id) {
  return db('tasks')
    .select('p.name', 'p.project_desc', 't.task_desc')
    .from('projects as p')
    .join('tasks as t', 'p.id', '=', 't.project_id')
    .where('project_id', '=', project_id)
}
//add projects
function addProject(projectData) {
  return db('projects').insert(projectData);
}

//add resources
function addResource(resourceData) {
  return db('resource').insert(resourceData);
}

// adding tasks
function addTask(taskData) {
  return db('tasks').insert(taskData);
}


function findById(id) {
  return db("projects")
    .where({ id })
    .first();
}