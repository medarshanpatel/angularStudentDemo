(function () {

    angular
        .module("app")
        .controller("StudentController", StudentController);

    StudentController.$inject = ['$scope', '$window', '$location', '$routeParams'];
    function StudentController($scope, $window, $location, $routeParams) {

        var vm = this;
        vm.isEditMode = false;
        vm.user = {};
        vm.users = []; //list of students and employess
        vm.emailRegex = '^[a-z0-9]+(\.[a-z0-9-_+]+)*[0-9a-z]+@[a-z0-9-]+(\.[a-z0-9]+)*(\.[a-z]{2,})$';
        vm.mobileNoRegex = '^[0-9](\.{9})+$';
        vm.nameRegexp = '^[a-zA-z](\.{1,})+$';
        vm.addForm = addForm; //Handle form submission
        vm.deleteUser = deleteUser;
        vm.editUser = editUser;
        vm.resetData = resetData;

        init();

        function init(){
            //console.log($location.absUrl());
            if($routeParams.name){
                console.log($routeParams.name);
            }
        }

        function addForm(formObj) {

            if (vm.user.hasOwnProperty("position")) { //edit
                vm.users[vm.user.position] = vm.user;
                resetData();

            } else { //add
                if (formObj.$valid) { //if form is valid   
                    vm.users.push(vm.user);
                    vm.user = {};
                }
            }
        }

        function editUser(objIndex) {
            vm.isEditMode = true;
            vm.user = Object.assign({}, vm.users[objIndex]);
            vm.user.position = objIndex;
        }

        function deleteUser(objIndex) {
            var confAlert = confirm("Are you sure you want to delete ? ");
            if (confAlert === true) {
                vm.users.splice(objIndex, 1);
            }
        }

        function resetData(studentForm) {
            // console.log(studentForm);
            vm.user = {};
            vm.isEditMode = false;
            // studentForm.$setPristine();
            // studentForm.$setUntouched();
            //studentForm.$submitted = false;
        }

    }
})();