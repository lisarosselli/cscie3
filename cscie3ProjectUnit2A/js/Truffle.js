/*
 * Truffle
 * Super-simple lightweight assertion helper
 *
 * @author  L.Rosselli
 *
 */

var Truffle = (function() {
  /*
   * _logLevel
   * holds the level of logging you would like
   * 0: no logging
   * 1: log all (successes and failures)
   * 2: log only failures
   */
  var _logLevel = 0;
  var _history = []; // TODO
  var _hasConsole = false;
  var _truffleStyle = 'background-color:#dcc6ad; color:black';
  var _failStyle = 'background: #E52325; color: #FFDFE5';
  var _passStyle = 'background: #6DC066; color: #F5F5F5';
  
  if (window.console) {
    _hasConsole = true;
  }
  
  var logLevel = function() {
    return _logLevel;
  };
  
  var showTruffleLevel = function() {
    if (_hasConsole) {
      console.log('%cTruffle.logLevel set to: '+_logLevel, _truffleStyle);
    }
  }
  
  var setLogLevel = function(value) {
    var level = Number.parseInt(value);
    if ((typeof level === 'number') && level <= 2 && level >= 0) {
      _logLevel = level;
      showTruffleLevel();
      return true;
    }
    return false;
  };
  
  var hasConsole = function() {
    return _hasConsole;
  }
  
  var clearHistory = function() {
    _history = [];
  };
  
  var assert = function(assertion, message) {
    var errStr;
    var err = new Error();
    var a = err.stack.indexOf("\)");
    errStr = err.stack.substr(a);
    a = errStr.indexOf("a");
    errStr = errStr.substr(a);
    a = errStr.indexOf("\)");
    errStr = errStr.substr(0,(a+1)); 
    // TODO
    // the above needs work, only works in chrome
    // and it's a mess here
    
    if (assertion) {
      if (_logLevel === 1 && _hasConsole) {
        console.log('%cPASS: '+message+" : "+errStr, _passStyle);
      }
    } else {
      if ((_logLevel === 1 || _logLevel === 2) && _hasConsole) {
        console.log('%cFAIL: '+message+" : "+errStr, _failStyle);
      }
    }
  };
  
  return {
    showTruffleLevel: showTruffleLevel,
    logLevel: logLevel,
    hasConsole: hasConsole,
    setLogLevel: setLogLevel,
    clearHistory: clearHistory,
    assert: assert
  };
  
})();