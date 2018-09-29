angular.module("myTodoApp", []).controller("myTodoCtrl", ['$scope',
function ($scope) {

        //A model holding tasks
        $scope.taskList = [
            {
                done: true,
                task: 'Tee valms TODO list'
            },
            {
                done: false,
                task: 'Kasta lilli'
            }
        ];

        //Function for adding task to the task list
        $scope.addTask = function (task) {
            $scope.taskList.push({
                done: false,
                task: task
            });

            // Cleared task form every time(no previous task text)
            $scope.newTask = ""
        };

        // Get the percentage of done tasks
        $scope.getTotalTodos = function () {
            return $scope.taskList.filter(function (task) {
                return task.done;
            }).length;
        };

        // Clear completed tasks
        $scope.clearCompleted = function () {
            var completedTasks = $scope.taskList;
            $scope.taskList = [];
            angular.forEach(completedTasks, function (task) {
                if (!task.done) $scope.taskList.push(task);
            })
        }
    }
]);


angular.module("myApp", []).controller("myCtrl", function ($scope) {
    $scope.sources = [
        {
            "nr": 1,
            "link": "https://www.w3schools.com/angular/default.asp",
            "name": "w3schools"
        }, {
            "nr": 2,
            "link": "http://www.learn-angular.org/",
            "name": "Learn-angular.org"
        },
        {
            "nr": 3,
            "link": "https://www.codecademy.com/learn/learn-angularjs",
            "name": "Codecademy"
        },
        {
            "nr": 4,
            "link": "https://angular.io/guide/architecture",
            "name": "Angulari koduleht",
        },
        {
            "nr": 5,
            "link": "https://www.udemy.com/the-complete-angular-master-class/?siteID=Fh5UMknfYAU-YixLYcT8G4qND.HzkIboXA&LSNPUBID=Fh5UMknfYAU",
            "name": "Udemy",
        },
        {
            "nr": 6,
            "link": "https://thinkster.io/a-better-way-to-learn-angularjs",
            "name": "thinkster"
        },
        {
            "nr": 7,
            "link": "nolink",
            "name": "Youtube"
        }
    ]
});

