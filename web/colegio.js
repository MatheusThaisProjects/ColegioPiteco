(function(){
	var app = angular.module('colegio-directives', []);

	app.directive("menuTabs", function(){
		return {
			restrict: "E",
			templateUrl: "menu-tabs.html",
			controller: function(){
				this.tab = 1;

				this.isSet = function(checkTab){
					return this.tab === checkTab;
				}

				this.setTab = function(activeTab){
					this.tab = activeTab;
				}
			},
			controllerAs: "tab"
		};
	});

	app.directive("homeDescription", function(){
		return {
			restrict: 'E',
			templateUrl: "home-description.html"
		};
	});	

	app.directive("infraDescription", function(){
		return {
			restrict: 'E',
			templateUrl: "infra-description.html"
		};
	});

	app.directive("infantilDescription", function(){
		return {
			restrict: 'E',
			templateUrl: "infantil-description.html"
		};
	});

	app.directive("fundamentalDescription", function(){
		return {
			restrict: 'E',
			templateUrl: "fundamental-description.html"
		};
	});

	app.directive("medioDescription", function(){
		return {
			restrict: 'E',
			templateUrl: "medio-description.html"
		};
	});

	app.directive("contatoDescription", function(){
		return {
			restrict: 'E',
			templateUrl: "contato-description.html"
		};
	});

})();