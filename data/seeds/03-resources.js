exports.seed = function(knex) {

    return knex('resource').insert([
      {name: "fighting stick", desc: "stick for fighting", project_id:1},
      {name: "hiding table", desc: "hide under table",project_id:2 }
    ]) 
  };