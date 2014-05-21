var app = angular.module('ngLocalizer', ['ngCookies']);

app.factory('Localizer', function($cookies) {
  var dictionary = {};
  return {
    setDictionary: function(aDictionary) {
      dictionary = aDictionary;
    },
    phrase: function(phrase) {
		if(!$cookies.language)
			return phrase;
      var language = $cookies.language.split('-')[0];
      if(dictionary[phrase])
        return dictionary[phrase][language] || phrase;
      else
        return phrase;
    },
  };
});

app.filter('localize', function(Localizer) {
  return function(input) {
    return Localizer.phrase(input);
  };
});
