var express = require('express');
var router = express.Router();

var taskList = [
	{id : 1, name : 'Watch Jason Bourne', isCompleted : false},
	{id : 2, name : 'Fix that bug', isCompleted : true}
];

/* GET tasks list page. */
router.get('/', function(req, res, next) {
	var completedCount = taskList.reduce(function(result, task){
		return task.isCompleted ? ++result : result;
	},0);
	var viewModel = { list : taskList, completedCount : completedCount };

  	res.render('tasks/list',viewModel);

});

router.get('/new', function(req, res, next){
	res.render('tasks/new');
});

router.post('/new', function(req, res, next){
	var newTaskName = req.body.newTaskName;

	var newId = taskList.reduce(function(result, task){
		return result > task.id ? result : task.id;
	},0)+1;

	var newTask = {
		id : newId,
		name : newTaskName,
		isCompleted : false
	};

	taskList.push(newTask);
	res.redirect('/tasks');
});

router.get('/toggle/:id', function(req, res, next){
	var taskId = parseInt(req.params.id, 10);
	var task = taskList.filter(function(t){
		return t.id === taskId;
	})[0];
	task.isCompleted = !task.isCompleted;
	res.redirect('/tasks');
})

module.exports = router;