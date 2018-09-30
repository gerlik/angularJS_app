/*TODO APP*/
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

/*RESOURCES*/
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

/*EXAMPLES*/
function openTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


var animate = angular.module('exampleApp', ['ngRoute', 'ngAnimate']);

animate.config(function ($routeProvider) {
    $routeProvider
        .when('/example', {
            templateUrl: "info.html",
            controller: "exampleCtrl"
        })
        .when('/code', {
            templateUrl: "info.html",
            controller: "codeCtrl"
        })
});

animate.controller("exampleCtrl", function ($scope, $route) {
    $scope.example = [
        {
            url: 'expl1_2.PNG'
        },
        {
            url: 'expl1_1.PNG'
        }
    ]
});

animate.controller("codeCtrl", function ($scope, $route) {
    $scope.code =
        '<!DOCTYPE html>\n' +
        '<html>\n' +
        '<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>\n' +
        '<body>\n' +
        '\n' +
        '<div ng-app="">\n' +
        '\n' +
        '<p>Input something in the input box:</p>\n' +
        '<p>Name : <input type="text" ng-model="name" placeholder="Enter name here"></p>\n' +
        '<h1>Hello {{name}}</h1>\n' +
        '\n' +
        '</div>\n' +
        '' +
        '</body>\n' +
        '</html>';
});


