//Service for the Todo App
// js.service.todo.js

angular.module('myTodoService',[])

.factory('Todos', function($http) {
        return {
            get : function() {
                return $http.get('/api/todos');
            },
            create : function(todoData) {
                return $http.post('/api/todos', todoData);
            },
            put: function(todoInstance){
            	return $http.put('/api/todos/' + todoInstance._id,todoInstance);
            },
            delete : function(id) {
                return $http.delete('/api/todos/' + id);
            }
    	}
	});