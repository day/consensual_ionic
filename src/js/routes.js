angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.home', {
    url: '/home',
    views: {
      'tab6': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.agenda', {
    url: '/agenda',
    views: {
      'tab7': {
        templateUrl: 'templates/agenda.html',
        controller: 'agendaCtrl'
      }
    }
  })

  .state('saturdaySept16th', {
    url: '/saturday_sept_16th',
    templateUrl: 'templates/saturdaySept16th.html',
    controller: 'saturdaySept16thCtrl'
  })

  .state('tabsController.people', {
    url: '/people',
    views: {
      'tab5': {
        templateUrl: 'templates/people.html',
        controller: 'peopleCtrl'
      }
    }
  })

  .state('tabsController.settings', {
    url: '/settings',
    views: {
      'tab8': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/agenda')


});