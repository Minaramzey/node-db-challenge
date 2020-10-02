
  exports.seed = function(knex) {

    return knex('tasks').insert([
      {task_desc: "fight the racoons in the back yard", project_id: 1},
      {task_desc: "hide from raccons in the back yard", project_id: 2}
    ])   
  };