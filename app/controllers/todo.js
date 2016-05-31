app.controller("TodoCtrl", function ($scope, $http) {
	$scope.title = 'Angular Todo!';
	$scope.potato = '';
	$scope.varName = '';
	$scope.newTodo ='';
	$scope.taskType = '';
	$scope.selectedTodo= '';

	// $scope.tasks = [
	// 	{name: "make the bed", type:'home'},
	// 	{name: "eat food", type:'home'},
	// 	{name: "stuff", type:"work"},
	// 	{name: "things", type: "work"}
	// ];

	// $http({
	// 	method: 'GET',
	// 	url: '/data/tasks.json',
	// }).then((data) => {
	// 	$scope.tasks = data.tasks;
	// });

  $http.get('/data/tasks.json')
    .then((response) => {
      console.log("response", response);
      $scope.tasks = response.data.tasks;
  })

  // to post data
  // $http.post('/data/tasks.json', {data: "what I'm sending"})
  //   .then((response) => {
  //     console.log("response", response);
  //     $scope.tasks = response.data.tasks;
  // })

	$scope.addTodo = function () {
		const taskType = $scope.homeTask ? "home" : "work";
		$scope.tasks.push({name: $scope.newTodo, type: $scope.taskType});
		$scope.newTodo = '';
	}

	$scope.removeTodo = (task) => {
		const taskIndex = $scope.tasks.indexOf(task);
		if (taskIndex >= 0) {
			$scope.tasks.splice(taskIndex, 1);
		}
	}


})