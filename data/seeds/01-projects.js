exports.seed = function(knex) {

    return knex('projects').insert([
      {name: "Garden", project_desc: "Plant Flowers"},
      {name: "Coding", project_desc: "Create personal projects"}
    ]) 
  };