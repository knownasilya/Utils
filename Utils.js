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
  Utilities ment to deal with arrays.

  @namespace Utils.Array
*/
Utils.Array = {};

/**
  Web utilities.

  @namespace Utils.Web
*/
Utils.Web = {};





Utils = (function (utils) {

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
    var output;

    if (results === null) {
      output = "";
    }
    else {
      output = decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    return output;
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

  /**
    Removes the given item from the specified array.

    @param {Array} array - The array from which to remove the item.
    @param {object} item - The item to remove.
    @memberOf Utils.Array
  */
  utils.Array.removeItem = function (array, item) {
    for (var i = array.length - 1; i >= 0; i--) {
      if (array[i] == item) {
        array.splice(i, 1);
      }
    }
  }

  return utils;
})(Utils || {});