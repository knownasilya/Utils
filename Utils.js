/* Utilities */

/**
  Utilities module.

  @namespace Utils
*/
var Utils = {};

/**
  General helper utilities.

  @namespace Utils.General
*/
Utils.General = {};

/**
  Web utilities.

  @namespace Utils.Web
*/
Utils.Web = {};





Utils = (function(utils) {

  /**
    To get the browser's search input use window.location.search for the url
    parameter.  
    Returns the value of the parameter, or an empty string.

    @param {string} url - The url to parse.
    @param {string} name - Name of the paramater of which you want the value.
    @returns {string} - The value of the given parameter, if the parameter/value 
      exists.
    @memberOf Utils.Web
  */
  utils.Web.getParameterByName = function (url, name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(url);

    if (results == null) {
      return "";
    }
    else {
      return decodeURIComponent(results[1].replace(/\+/g, " "));
    }
  }

  /**
    Performs a check wether the given object has any properties.

    @param {Object} obj - Object to check for properties.
    @returns {boolean} - True if properties exist, otherwise false.
    @memberOf Utils.General
  */
  utils.General.hasProperties = function (obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return true;
      }
    }
    return false;
  }
  return utils;
})(Utils || {});