myApp.controller('mainController', ['$scope', 'mainService', function($scope, mainService) {



    function fetchAllUsers(){
        mainService.fetchAllUsers()
            .then(
                function(d) {
                    self.users = d;
                },
                function(errResponse){

                }
            );
    }

    }]);

