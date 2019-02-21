myApp.controller("loginController",function ($scope,$location) {

    $scope.submit=function () {

        console.log("in submit function");

        var username= $scope.username;
        var password=$scope.password;
        if($scope.username== 'admin'&& $scope.password=="admin"){


            console.log("here in if");
            $location.path('/userHome');


        }else {

            alert("wrong stuff");
        }

    }

});

