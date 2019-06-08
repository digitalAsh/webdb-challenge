const db = require('../data/dbConfig.js');

module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
};

function get(id) {
    return db('projects')
        .from('projects')
       .join('actions')
    //    , 'projects.id', 'actions.project.id')
  }
  
  function getById(id) {
    return db('projects')
      .where({ id })
      .first();
  }
  
  function insert(project) {
    return db('projects')
      .insert(project)
      .then(ids => {
        return getById(ids[0]);
      });
  }
  
  function update(id, changes) {
    return db('projects')
      .where({ id })
      .update(changes);
  }
  
  function remove(id) {
    return db('projects')
      .where('id', id)
      .del();
  }