MathJax.Hub.Config({
    skipStartupTypeset: true,
    messageStyle: "none",
    "HTML-CSS": {
        showMathMenu: false
    }
});
MathJax.Hub.Configured();


var app = angular.module('windEnergy', []);

 	   var Amhersttownis = "Amherst";
 	   var Amherstnumhouseholds = 300;
       var Amherstcoalplantcapacity = 10;
       var Amherstavgkwhperhousehold = 600000;
       var Amherstcostperkwh = .20;
       var Amherstwindturbinecapacity = 1.2;
       var Amherstwindturbinecost =  3000000;
       var Amherstanswertoproblem1 = (Amherstcoalplantcapacity*1000*8000);
       var Amherstanswertoproblem2 = (Amherstnumhouseholds*Amherstavgkwhperhousehold);
       var Amherstanswertoproblem3 = (Amherstanswertoproblem2*25);
       var Amherstanswertoproblem4 = (10*Amherstwindturbinecost);
       var Amherstanswertoproblem5 = (Amherstanswertoproblem4/Amherstanswertoproblem3).toFixed (2);
       
       var Eugenetownis = "Eugene";
       var Eugenenumhouseholds = 1000;
       var Eugenecoalplantcapacity = 15;
       var Eugeneavgkwhperhousehold = 10000;
       var Eugenecostperkwh = .12;
       var Eugenewindturbinecapacity = 1.2;
       var Eugenewindturbinecost =  2500000;
       var Eugeneanswertoproblem1 = (Eugenecoalplantcapacity*1000*8000);
       var Eugeneanswertoproblem2 = (Eugenenumhouseholds*Eugeneavgkwhperhousehold);
       var Eugeneanswertoproblem3 = (Eugeneanswertoproblem2*25);
       var Eugeneanswertoproblem4 = (10*Eugenewindturbinecost);
       var Eugeneanswertoproblem5 = (Eugeneanswertoproblem4/Eugeneanswertoproblem3).toFixed (2);
       
       var Tiburontownis = "Tiburon";
       var Tiburonnumhouseholds = 2000;
       var Tiburoncoalplantcapacity = 10;
       var Tiburonavgkwhperhousehold = 5000;
       var Tiburoncostperkwh = .30;
       var Tiburonwindturbinecapacity = 1.2;
       var Tiburonwindturbinecost = 3500000;
       var Tiburonanswertoproblem1 = (Tiburoncoalplantcapacity*1000*8000);
       var Tiburonanswertoproblem2 = (Tiburonnumhouseholds*Tiburonavgkwhperhousehold);
       var Tiburonanswertoproblem3 = (Tiburonanswertoproblem2*25);
       var Tiburonanswertoproblem4 = (10*Tiburonwindturbinecost);
       var Tiburonanswertoproblem5 = (Tiburonanswertoproblem4/Tiburonanswertoproblem3).toFixed (2);
       
       var Vashontownis = "Vashon";
       var Vashonnumhouseholds = 500;
       var Vashoncoalplantcapacity = 12;
       var Vashonavgkwhperhousehold = 8000;
       var Vashoncostperkwh = .10;
       var Vashonwindturbinecapacity = 1.2;
       var Vashonwindturbinecost = 3000000
       var Vashonanswertoproblem1 = (Vashoncoalplantcapacity*1000*8000);
       var Vashonanswertoproblem2 = (Vashonnumhouseholds*Vashonavgkwhperhousehold);
       var Vashonanswertoproblem3 = (Vashonanswertoproblem2*25);
       var Vashonanswertoproblem4 = (10*Vashonwindturbinecost);
       var Vashonanswertoproblem5 = (Vashonanswertoproblem4/Vashonanswertoproblem3).toFixed (2);
       
       var Waynetownis = "Wayne";
       var Waynenumhouseholds = 2000;
       var Waynecoalplantcapacity = 15;
       var Wayneavgkwhperhousehold = 10000;
       var Waynecostperkwh = .20;
       var Waynewindturbinecapacity = 1.2
       var Waynewindturbinecost = 2500000
       var Wayneanswertoproblem1 = (Waynecoalplantcapacity*1000*8000);
       var Wayneanswertoproblem2 = (Waynenumhouseholds*Wayneavgkwhperhousehold);
       var Wayneanswertoproblem3 = (Wayneanswertoproblem2*25);
       var Wayneanswertoproblem4 = (10*Waynewindturbinecost);
       var Wayneanswertoproblem5 = (Wayneanswertoproblem4/Wayneanswertoproblem3).toFixed(2);

    
app.directive("mathjaxBind", function() { //<!--http://jsfiddle.net/spicyj/ypqvp/
    return {
        restrict: "A",
        controller: ["$scope", "$element", "$attrs", function($scope, $element, $attrs, InformationService) {
            $scope.$watch($attrs.mathjaxBind, function(value) {
                var $script = angular.element("<script type='math/tex'>")
                    .html(value == undefined ? "" : value);
                $element.html("");
                $element.append($script);
                MathJax.Hub.Queue(["Reprocess", MathJax.Hub, $element[0]]);
            });
        }]
    };
});


app.controller('MyCtrl', function ($scope, $element, InformationService) {
	$scope.info = InformationService;
    $scope.expression1 = $scope.info;//this was THE all important addition!!!!
    
    $scope.showMe = false;
	
	$scope.myFunc = function() {
		$scope.showMe = !$scope.showMe;
	};
	
    
});

/*app.controller('MyCtrl2', function ($scope, $element, InformationService) {
	$scope.info = InformationService;
    $scope.expression2 = $scope.info;//this was THE all important addition!!!!
    
    $scope.showMe2 = false;
	
	$scope.myFunc = function() {
		$scope.showMe2 = !$scope.showMe2;
	};
	
    
});*/

/*app.controller('MyCtrl3', function ($scope, $element, InformationService) {
	$scope.info = InformationService;
    $scope.expression = $scope.info;//this was THE all important addition!!!!
    
    $scope.showMe3 = false;
	
	$scope.myFunc = function() {
		$scope.showMe3 = !$scope.showMe3;
	};
	
    
});*/
 
       
app.controller('LocationListController', function ($scope, InformationService) {
	$scope.order = "place";
	$scope.info = InformationService;

});


app.controller('LocationDetailController', function ($scope, InformationService) {
	$scope.info = InformationService;

});


app.service('InformationService', function () {

	return {
		
		'addLocation': function (location) {
			this.locations.push(location);
		},
	
		'selectedLocation': null,
		'locations': [
			{
				"place": "Amherst, MA",
				"numhouseholds": 300,
				"coalplantcapacity": 10,
				"avgkwhperhousehold": 600000,
				"costperkwh": .20,
				"windturbinecapacity": 1.2,
				"windturbinecost": 3000000,
				"questionone": "\ \\left("+Amherstcoalplantcapacity+"\\ MW\\right) \\times \\left(1,000\\frac{\ kW}{\ MW}\\right) \\times \\left(8,000\\frac{\ hrs}{\ yr}\\right) =\\ "+Amherstanswertoproblem1.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ kWh",
				"questiontwo": "\ \\left("+Amherstnumhouseholds.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ homes\\right) \\times \\left("+Amherstavgkwhperhousehold.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ kWh}{\ home/yr}\\right) =\\ "+Amherstanswertoproblem2.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ kWh}{\ yr}",
				"questionthreeA":"\ \\left("+Amherstanswertoproblem2.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ kWh}{\ yr}\\right) \\times \\left(25\\ years\\right) =\\ "+Amherstanswertoproblem3.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ kWh",
				"questionthreeB": "\ \\left(10\\ turbines\\right) \\times \\left("+Amherstwindturbinecost.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ dollars}{\ turbine}\\right) =\\ "+Amherstanswertoproblem4.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ dollars",
				 "questionthreeC": "\ \\left("+Amherstanswertoproblem4.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ dollars\\right) \\div \\left("+Amherstanswertoproblem3.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ kWh\\right) =\\ "+Amherstanswertoproblem5+"\\frac{\ dollars}{\ kWh}"
			},
			{
				"place": "Eugene, OR",
				"numhouseholds": 1000,
				"coalplantcapacity": 15,
				"avgkwhperhousehold": 1000,
				"costperkwh": .12,
				"windturbinecapacity": 1.2,
				"windturbinecost": 2500000,
				"questionone": "\ \\left("+Eugenecoalplantcapacity+"\\ MW\\right) \\times \\left(1,000\\frac{\ kW}{\ MW}\\right) \\times \\left(8,000\\frac{\ hrs}{\ yr}\\right) =\\ "+Eugeneanswertoproblem1.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ kWh",
				"questiontwo": "\ \\left("+Eugenenumhouseholds.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ homes\\right) \\times \\left("+Eugeneavgkwhperhousehold.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ kWh}{\ home/yr}\\right) =\\ "+Eugeneanswertoproblem2.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ kWh}{\ yr}",
				"questionthreeA":"\ \\left("+Eugeneanswertoproblem2.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ kWh}{\ yr}\\right) \\times \\left(25\\ years\\right) =\\ "+Eugeneanswertoproblem3.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ kWh",
				"questionthreeB": "\ \\left(10\\ turbines\\right) \\times \\left("+Eugenewindturbinecost.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ dollars}{\ turbine}\\right) =\\ "+Eugeneanswertoproblem4.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ dollars",
				 "questionthreeC": "\ \\left("+Eugeneanswertoproblem4.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ dollars\\right) \\div \\left("+Eugeneanswertoproblem3.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ kWh\\right) =\\ "+Eugeneanswertoproblem5+"\\frac{\ dollars}{\ kWh}" 
			
				
			},
			{
				"place": "Tiburon, CA",
				"numhouseholds": 2000,
				"coalplantcapacity": 10,
				"avgkwhperhousehold": 5000,
				"costperkwh": .30,
				"windturbinecapacity": 1.2,
				"windturbinecost": 3500000,
				"questionone": "\ \\left(10\\ MW\\right) \\times \\left(1,000\\frac{\ kW}{\ MW}\\right) \\times \\left(8,000\\frac{\ hrs}{\ yr}\\right) =\\ "+Tiburonanswertoproblem1.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ kWh",
				"questiontwo": "\ \\left("+Tiburonnumhouseholds.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ homes\\right) \\times \\left("+Tiburonavgkwhperhousehold.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ kWh}{\ home/yr}\\right) =\\ "+Tiburonanswertoproblem2.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ kWh}{\ yr}",
				"questionthreeA":"\ \\left("+Tiburonanswertoproblem2.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ kWh}{\ yr}\\right) \\times \\left(25\\ years\\right) =\\ "+Tiburonanswertoproblem3.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ kWh",
				"questionthreeB": "\ \\left(10\\ turbines\\right) \\times \\left("+Tiburonwindturbinecost.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ dollars}{\ turbine}\\right) =\\ "+Tiburonanswertoproblem4.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ dollars",
				 "questionthreeC": "\ \\left("+Tiburonanswertoproblem4.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ dollars\\right) \\div \\left("+Tiburonanswertoproblem3.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ kWh\\right) =\\ "+Tiburonanswertoproblem5+"\\frac{\ dollars}{\ kWh}"
				
			},
			{
				"place": "Vashon, WA",
				"numhouseholds": 500,
				"coalplantcapacity": 12,
				"avgkwhperhousehold": 8000,
				"costperkwh": .10,
				"windturbinecapacity": 1.2,
				"windturbinecost": 3000000,
				"questionone": "\ \\left("+Vashoncoalplantcapacity+"\\ MW\\right) \\times \\left(1,000\\frac{\ kW}{\ MW}\\right) \\times \\left(8,000\\frac{\ hrs}{\ yr}\\right) =\\ "+Vashonanswertoproblem1.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ kWh",
				"questiontwo": "\ \\left("+Vashonnumhouseholds.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ homes\\right) \\times \\left("+Vashonavgkwhperhousehold.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ kWh}{\ home/yr}\\right) =\\ "+Vashonanswertoproblem2.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ kWh}{\ yr}",
				"questionthreeA":"\ \\left("+Vashonanswertoproblem2.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ kWh}{\ yr}\\right) \\times \\left(25\\ years\\right) =\\ "+Vashonanswertoproblem3.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ kWh",
				"questionthreeB": "\ \\left(10\\ turbines\\right) \\times \\left("+Vashonwindturbinecost.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ dollars}{\ turbine}\\right) =\\ "+Vashonanswertoproblem4.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ dollars",
				 "questionthreeC": "\ \\left("+Vashonanswertoproblem4.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ dollars\\right) \\div \\left("+Vashonanswertoproblem3.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ kWh\\right) =\\ "+Vashonanswertoproblem5+"\\frac{\ dollars}{\ kWh}" 
				
			},
			{
				"place": "Wayne, PA",
				"numhouseholds": 2000,
				"coalplantcapacity": 15,
				"avgkwhperhousehold": 1000,
				"costperkwh": .20,
				"windturbinecapacity": 1.2,
				"windturbinecost": 2500000,
				"questionone": "\ \\left("+Waynecoalplantcapacity+"\\ MW\\right) \\times \\left(1,000\\frac{\ kW}{\ MW}\\right) \\times \\left(8,000\\frac{\ hrs}{\ yr}\\right) =\\ "+Wayneanswertoproblem1.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ kWh",
				"questiontwo": "\ \\left("+Waynenumhouseholds.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ homes\\right) \\times \\left("+Wayneavgkwhperhousehold.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ kWh}{\ home/yr}\\right) =\\ "+Wayneanswertoproblem2.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ kWh}{\ yr}",
				"questionthreeA":"\ \\left("+Wayneanswertoproblem2.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ kWh}{\ yr}\\right) \\times \\left(25\\ years\\right) =\\ "+Wayneanswertoproblem3.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ kWh",
				"questionthreeB": "\ \\left(10\\ turbines\\right) \\times \\left("+Waynewindturbinecost.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ dollars}{\ turbine}\\right) =\\ "+Wayneanswertoproblem4.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ dollars",
				 "questionthreeC": "\ \\left("+Wayneanswertoproblem4.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ dollars\\right) \\div \\left("+Wayneanswertoproblem3.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ kWh\\right) =\\ "+Wayneanswertoproblem5+"\\frac{\ dollars}{\ kWh}" 
				
			},
		]
		
	};
});