app.controller("TodoCtrl", function ($scope) {
	$scope.title = 'Angular Todo!';
	$scope.potato = '';
	$scope.varName = '';
	$scope.newTodo='';

	$scope.tasks = [
		{name: "make the bed", type:'home'},
		{name: "eat food", type:'home'},
		{name: "stuff", type:"work"},
		{name: "things", type: "work"}
	];

	$scope.addTodo = function () {
		$scope.tasks.push({name: $scope.newTodo, type:'home'});
		$scope.newTodo = '';
	}

	$scope.removeTodo = (task) => {
		const taskIndex = $scope.tasks.indexOf(task);
		$scope.tasks.splice(taskIndex, 1);
	}

})