(function(){

    angular
        .module("app")
        .controller("TestingController",TestingController);

    //TestingController.$inject = [''];

    function TestingController(){
        var vm = this;
        vm.name = "info@knoxpo.com";
        

    }

})();