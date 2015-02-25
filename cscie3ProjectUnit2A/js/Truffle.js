'use strict';

var Truffle = (function() {
  var _logAll = false;
  var _logFailures = false;
  
  var getLogAll = function() {
    return (_logAll) ? true : false;
  }
  
  var getLogFailures = function() {
    return (_logFailures) ? true : false;
  }
  
  var getLogLevel = function() {
    if (_logAll) {
      return "logAll";
    } else if (_logFailures) {
      return "logFailures"
    } else {
      return false;
    }
  }
  
  var setLogAll = function(value) {
    if (value === false || value === true) {
      _logAll = value;
      return true;
    }
  }
  
  var setLogFailures = function(value) {
    if (value === false || value === true) {
      _logFailures = value;
      return true;
    }
  }
  
  var assert = function(assertion, message) {
    if (assertion) {
      if (_logAll) {
        console.log("PASSED: "+message);
      }
    } else {
      if (_logFailures) {
        console.log("FAILED: "+message);
      }
    }
  };
  
  return {
    getLogAll: getLogAll,
    getLogFailures: getLogFailures,
    getLogLevel: getLogLevel,
    setLogAll: setLogAll,
    setLogFailures: setLogFailures,
    assert: assert
  };
  
})();