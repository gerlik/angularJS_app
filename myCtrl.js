
angular.module("myTodoApp", []).controller("myTodoCtrl", ['$scope',
                                 function($scope) {
                                     //A model holding tasks
                                     $scope.taskList = [
                                         {done: true,
                                          task: 'Tee valms TODO list'
                                         },
                                         {
                                             done: false,
                                             task: 'Kasta lilli'
                                         }
                                     ];

                                     //Function for adding task to the task list
                                     $scope.addTask = function(task) {
                                         $scope.taskList.push({
                                             done: false,
                                             task: task
                                         });
                                         
                                         // Cleared task form every time(no previous task text)
                                         $scope.newTask = ""
                                     };
                                    
                                     // Get the percentage of done tasks
                                     $scope.getTotalTodos = function(){
                                         var total = $scope.taskList;
                                         $scope.taskList = [];
                                         angular.forEach(total, function(task){
                                            if(task.done)
                                                total++;
                                        })
                                         return total;
                                     };
                                     
                                     // Clear completed tasks
                                     $scope.clearCompleted = function(){
                                         var completedTasks = $scope.taskList;
                                         $scope.taskList = [];
                                         angular.forEach(completedTasks, function(task){
                                             if (!task.done) $scope.taskList.push(task);
                                         })
                                            
                                     }
                                 }
                                ]);