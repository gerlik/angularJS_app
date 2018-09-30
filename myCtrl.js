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
/*LOOKS VERY UGLY BUT WORKS FOR NOW*/
var animate = angular.module('exampleApp', ['ngRoute', 'ngAnimate']);

animate.config(function ($routeProvider) {
    $routeProvider
        .when('/example1', {
            templateUrl: "info.html",
            controller: "exampleCtrl1"
        })
        .when('/code1', {
            templateUrl: "info.html",
            controller: "codeCtrl1"
        })

        .when('/example2', {
            templateUrl: "info.html",
            controller: "exampleCtrl2"
        })
        .when('/code2', {
            templateUrl: "info.html",
            controller: "codeCtrl2"
        })

        .when('/example3', {
            templateUrl: "info.html",
            controller: "exampleCtrl3"
        })
        .when('/code3', {
            templateUrl: "info.html",
            controller: "codeCtrl3"
        })

        .when('/example4', {
            templateUrl: "info.html",
            controller: "exampleCtrl4"
        })
        .when('/code4', {
            templateUrl: "info.html",
            controller: "codeCtrl4"
        })

        .when('/example5', {
            templateUrl: "info.html",
            controller: "exampleCtrl5"
        })
        .when('/code5', {
            templateUrl: "info.html",
            controller: "codeCtrl5"
        })
});

animate.controller("exampleCtrl1", function ($scope, $route) {
    $scope.example = {
        url: 'expl1_1.PNG'
    }
});

animate.controller("exampleCtrl2", function ($scope, $route) {
    $scope.example = {
        url: 'expl1_2.PNG'
    }
});

animate.controller("exampleCtrl3", function ($scope, $route) {
    $scope.example = {
        url: 'expl1_3.PNG'
    }
});

animate.controller("exampleCtrl4", function ($scope, $route) {
    $scope.example = {
        url: 'expl1_4.PNG'
    }
});

animate.controller("exampleCtrl5", function ($scope, $route) {
    $scope.example = {
        url: 'expl1_5.PNG'
    }
});


animate.controller("codeCtrl1", function ($scope, $route) {
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

animate.controller("codeCtrl2", function ($scope, $route) {
    $scope.code =
        '<!DOCTYPE html>\n' +
        '<html>\n' +
        '<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>\n' +
        'style>' +
        'table, th, td {' +
        'border-collapse: collapse;' +
        'border: 1px solid black;' +
        '}' +
        '</style>' +
        '<body>\n' +
        '\n' +
        '<div ng-app="myApp" ng-controller="customersCtrl">\n' +
        '\n' +
        '<table>\n' +
        '<tr ng-repeat="x in names">\n' +
        '<td>{{ x.Name }}</td>\n' +
        '<td>{{ x.Country }}</td>\n' +
        '</tr>\n' +
        '</table>\n' +
        '\n' +
        '</div>\n' +
        '\n' +
        '<script>\n' +
        'var app = angular.module("myApp", []);\n' +
        'app.controller("customersCtrl", function($scope, $http) {\n' +
        '$scope.names = [\n' +
        '   {\n' +
        '       Name: "Madis",\n' +
        '       Country: "Estonia"\n' +
        '   },\n' +
        '   {\n' +
        '       Name: "Karmen",\n' +
        '       Country: "Estonia"\n' +
        '   }\n' +
        ']\n' +
        '});\n' +
        '</script>\n' +
        '\n' +
        '</body>\n' +
        '</html>\n';
});

animate.controller("codeCtrl3", function ($scope, $route) {
    $scope.code =
        '<!DOCTYPE html>\n' +
        '<html>\n' +
        '<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>\n' +
        '<body ng-app="">\n' +
        '\n' +
        '<p>Try leaving the first input field blank:</p>\n' +
        '\n' +
        '<form name="myForm">\n' +
        '<p>Name:\n' +
        '<input name="myName" ng-model="myName" required>\n' +
        '<span ng-show="myForm.myName.$touched && myForm.myName.$invalid">The name is required.</span>\n' +
        '</p>\n' +
        '\n' +
        '<p>Address:\n' +
        '<input name="myAddress" ng-model="myAddress" required>\n' +
        '</p>\n' +
        '\n' +
        '</form>\n' +
        '\n' +
        '<p>We use the ng-show directive to only show the error message if the field has been touched AND is empty.</p>\n' +
        '\n' +
        '</body>\n' +
        '</html>';
});

animate.controller("codeCtrl4", function ($scope, $route) {
    $scope.code =
        '<!DOCTYPE html>\n' +
        '<html>\n' +
        '<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>\n' +
        '<body>\n' +
        '\n' +
        '<div ng-app="myApp" ng-controller="myCtrl">\n' +
        '<p>Use a filter when displaying the array [255, 251, 200]:</p>\n' +
        '\n' +
        '<ul>\n' +
        '<li ng-repeat="x in counts">{{x | myFormat}}</li>\n' +
        '</ul>\n' +
        '\n' +
        '<p>This filter uses a service that converts numbers into hexadecimal values.</p>\n' +
        '</div>\n' +
        '\n' +
        '<script>\n' +
        'var app = angular.module("myApp", []);\n' +
        'app.service("hexafy", function() {\n' +
        'this.myFunc = function (x) {\n' +
        'return x.toString(16);\n' +
        '}\n' +
        '});\n' +
        'app.filter("myFormat",["hexafy", function(hexafy) {\n' +
        'return function(x) {\n' +
        'return hexafy.myFunc(x);\n' +
        '};\n' +
        '}]);\n' +
        'app.controller("myCtrl", function($scope) {\n' +
        '$scope.counts = [255, 251, 200];\n' +
        '});\n' +
        '</script>\n' +
        '\n' +
        '</body>\n' +
        '</html>';

});

animate.controller("codeCtrl5", function ($scope, $route) {
    $scope.code =
        '<!DOCTYPE html>\n' +
        '<html>\n' +
        '<style>\n' +
        'div {\n' +
        'transition: all linear 0.5s;\n' +
        'background-color: lightblue;\n' +
        'height: 100px;\n' +
        'width: 100%;\n' +
        'position: relative;\n' +
        'top: 0;\n' +
        'left: 0;\n' +
        '}\n' +
        '\n' +
        '.ng-hide {\n' +
        'height: 0;\n' +
        'width: 0;\n' +
        'background-color: transparent;\n' +
        'top:-200px;\n' +
        'left: 200px;\n' +
        '}\n' +
        '\n' +
        '</style>\n' +
        '<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>\n' +
        '<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-animate.js"></script>\n' +
        '\n' +
        '<body ng-app="ngAnimate">\n' +
        '\n' +
        '<h1>Hide the DIV: <input type="checkbox" ng-model="myCheck"></h1>\n' +
        '\n' +
        '<div ng-hide="myCheck"></div>\n' +
        '\n' +
        '</body>\n' +
        '</html>';
});
