
myApp.controller("accessGroupController", ['$scope', 'mainService', function($scope, mainService) {



    var self = this;

    $scope.accessGroups=[];
    self.accessgroupi='';
    self.applicationnam='';


    /*console.log($scope.accesspoint.accesspointid);*/
    $scope.accessGrpSearch=function (accessgroupi,applicationname) {

        self.accessgroupi=accessgroupi;
        self.applicationnam=applicationname;

        mainService.accessGrpsearch( self.accessgroupi,self.applicationnam)
            .then(

                function(d) {
                    $scope.accessGroups=d;


                },

                function (errResponce) {
                    console.error('error in fetching');

                }
            );
    }




} ] );