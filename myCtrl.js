//TODO fix the design, add deletation and edit options, move done tasks elswhere, show percentage or 1/4 tasks done etc
//We have to define our application first
angular.module("todoApp", []).controller("todoController", ['$scope',
                                 function($scope) {
                                     //A model holding tasks
                                     $scope.taskList = [
                                         {done: true,
                                          task: 'Do nothing'
                                         },
                                         {
                                             done: false,
                                             task: 'Show some tasks'
                                         }
                                     ];

                                     //Function for adding task to the task list
                                     $scope.addTask = function(task) {

                                         //I'm pushing a new task to the task list
                                         $scope.taskList.push({
                                             done: false,
                                             task: task
                                         });
                                     };

                                 }
                                ]);