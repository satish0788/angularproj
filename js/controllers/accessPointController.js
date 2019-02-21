
myApp.controller("accessPointController", ['$scope', 'mainService', function($scope, mainService) {



    var self = this;
   /* self.accesspoint = {
        accesspointid: '',
        accesspointcode: '',
        applicationname:'',
        accesspointdesc: '',
        accesstype: '',
        status: ''
    };
*/


    $scope.accesspoints=[];
    self.accesspointi='';
    self.applicationnam='';


    /*console.log($scope.accesspoint.accesspointid);*/
    $scope.accesssearch=function (accesspointi,applicationname) {

        self.accesspointi=accesspointi;
        self.applicationnam=applicationname;

        mainService.accesspsearch( self.accesspointi,self.applicationnam)
            .then(

                function(d) {
                    $scope.accesspoints=d;

                    console.log($scope.accesspoints);


                },

                function (errResponce) {
                    console.error('error in fetching');

                }
            );
    }




} ] );