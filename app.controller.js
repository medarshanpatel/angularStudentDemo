(function () {

    angular.module("app")
        .controller("AppController", AppController);

    AppController.$inject = [];
    function AppController() {

        var vm = this;
        vm.name = "Darshan";

        init();
        function init() {
            console.log("Welcome to Angular Demo");
        }
        

    }

})();