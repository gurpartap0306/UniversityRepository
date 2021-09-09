'use strict';

var mongoose = require('mongoose'), 
University = mongoose.model('Universities');

module.exports = {
    list_all_universities : function(req, res){
        University.find({}, function(err,university) {
            if (err)
            res.send(err);
            res.json(university);            
        });
    },
    create_a_university : function(req,res) {
        var new_university = new University(req.body);
        new_university.save(function(err,university){
            if (err)
            res.send(err);
            res.json(university);
        });
    },
    list_a_university : function(req,res) {
        University.findOne({name : req.params.universityName}, function(err,university){
            if(err)
            res.send(err);
            res.json(university);
        });
    },
    delete_a_university : function(req,res){
        University.deleteOne({
            name: req.params.universityName
        }, function(err,university){
            if(err)
            res.send(err);
            res.json({message: 'Universtiy deleted successfully'});
        });
    }
};