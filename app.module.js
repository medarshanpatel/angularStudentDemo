(function () {

    angular.module("app", [ /* Include additional modules */
        "checklist-model",
        "ngMessages",
        "ngRoute"
    ])
        .config(config)
        .run(run);

    config.$inject = ["$routeProvider", "$locationProvider"];

    function config($routeProvider, $locationProvider) {

        $locationProvider.hashPrefix(''); // remove `!` from url
        // $locationProvider.html5Mode({enabled: true});      

        $routeProvider
            .when("/", {
                templateUrl: "home.html"
            })
            .when("/students", {
                templateUrl: "student/form.html",
                controller: "StudentController",
                controllerAs: "studentVm"
            })
            .when("/testingform", {
                templateUrl: "testing/testing.html",
                controller: "TestingController",
                controllerAs: "testingVm"
            })
        //.otherwise("/");
    }

    run.$inject = [];
    function run() {
        // console.log("run");
    }

})();