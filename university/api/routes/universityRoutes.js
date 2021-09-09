'use strict';

module.exports=function(app){
    var universityList = require('../controllers/universityController');

    app.route('/universities')
    .get(universityList.list_all_universities)
    .post(universityList.create_a_university);


    app.route('/universities/:universityName')
    .get(universityList.list_a_university)
    .delete(universityList.delete_a_university);
    
}
