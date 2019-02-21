

myApp.factory('mainService', ['$http','$q',function($http,$q) {
    var REST_SERVICE_URI = 'http://localhost:8018/ACGRestService/';

    var REST_SERVICE_URI_ACCESSPOINT = 'http://localhost:8018/ACGRestService/accesspoint/';
    var REST_SERVICE_URI_ACCESSGRP = 'http://localhost:8018/ACGRestService/accessgroup/';

    var REST_SERVICE_URI_SourceApp= 'http://localhost:8018/ACGRestService/sourceapp/';
    var factory = {
        fetchAllUsers: fetchAllUsers,

     /*   accessPointSearch: accessPointSearch*/




    };


    function fetchAllUsers() {
        var deferred = $q.defer();
        $http.get(REST_SERVICE_URI)
            .then(
                function (response) {
                    deferred.resolve(response.data);
                },
                function(errResponse){
                    console.error('Error while fetching Users');
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }


   factory.accesspsearch= function (accesspointid,applicationname) {
        var deferred = $q.defer();
        $http.get( REST_SERVICE_URI_ACCESSPOINT+accesspointid+'/'+applicationname)
            .then(

                function (response) {
                    deferred.resolve(response.data);
                    console.log(response.data);
                },
                function(errResponse){


                    alert("No records found");
                    console.error('Error while fetching Users');
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }

    factory.accessGrpsearch= function (accessgroupid,applicationname) {
        var deferred = $q.defer();
        $http.get(REST_SERVICE_URI_ACCESSGRP+accessgroupid+'/'+applicationname)
            .then(

                function (response) {
                    deferred.resolve(response.data);
                    console.log(response.data);
                },
                function(errResponse){


                    alert("No records found");
                    console.error('Error while fetching Users');
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }






    factory.sourceappUsers= function (username,applicationname) {
        var deferred = $q.defer();
        $http.get(REST_SERVICE_URI_SourceApp+username+'/'+applicationname)
            .then(

                function (response) {
                    deferred.resolve(response.data);
                    console.log(response.data);
                },
                function(errResponse){


                    alert("No records found");
                    console.error('Error while fetching Users');
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }

























return factory;

}]);
/*
  /* $scope.accesspoint = response.data;*/
/*
Accesspoint.save({},accesspoint,success,failure);
      var data=Accesspoint.get({accesspointid:accesspoint.accesspointid},function(){

var accesspoint= data.accesspoint;
console.log(accesspoint);
console.log(data);
success(data);
*/


/*
factory.accesspsearch= function (accesspointid,applicationname) {
    var deferred = $q.defer();
    $http.get(REST_SERVICE_URI+accesspointid)
        .then(

            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){


                alert("No records found");
                console.error('Error while fetching Users');
                deferred.reject(errResponse);
            }
        );
    return deferred.promise;
}

*/
