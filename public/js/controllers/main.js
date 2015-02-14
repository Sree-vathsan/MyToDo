//Service for the Todo App
// js.controllers.main.js

angular.module('myTodoController',[])
    //Leverage Todo Service Factory
    .controller('mainController', function($scope, $http, Todos){
        $scope.formData = {};

        //GET - Get all the results promised by get at service and render them on page load
        Todos.get()
            .success(function(data) {
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });

        //CREATE - When new entry added, use the service and add them to db
        $scope.createTodo = function(){
            if(!$.isEmptyObject($scope.formData)){
                Todos.create($scope.formData)
                     .success(function(data) {
                     $scope.formData = {}; // clear the form so our user is ready to enter another
                     $scope.todos = data;
                     console.log(data);
                    })
                     .error(function(data) {
                     console.log('Error: ' + data);
                    });
            }
        }

        //UPDATE - When check box event occurs, use the put service and update the entry
        $scope.updateCompletedTodo = function(todoInstance){
            //console.log("In controller "+todoInstance._id+!todoInstance.completed);
            todoInstance.completed = !todoInstance.completed;
            Todos.put(todoInstance)
                 .success(function(data) {
                 $scope.todos = data;
                 console.log(data);
                 })
                 .error(function(data) {
                 console.log('Error: ' + data);
                 });
        }

        //DELETE - Leverage the delete service to remove the entry from db
        $scope.deleteTodo = function(id) {
            Todos.delete(id)
                 .success(function(data){
                    $scope.todos = data;
                    console.log(data);
                 })
                 .error(function(data) {
                    console.log('Error: ' + data);
                 });
        }
    });