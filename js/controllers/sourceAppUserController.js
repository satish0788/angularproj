
    myApp.controller("sourceAppUserCtrl", ['$scope', 'mainService', function($scope, mainService) {



        var self = this;



        $scope.SourceAppUsers=[];
        self.username='';
        self.applicationname='';


        /*console.log($scope.accesspoint.accesspointid);*/
        $scope.sourceAppUsers=function (username,applicationname) {

            self.username=username;
            self.applicationname=applicationname;

            mainService.sourceappUsers( self.username,self.applicationname)
                .then(

                    function(d) {
                        $scope.SourceAppUsers=d;



                    },

                    function (errResponce) {
                        console.error('error in fetching');

                    }
                );
        }




    } ] );