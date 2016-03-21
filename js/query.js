;(function(root){
function searchToJson(){
    var search = root.location.search;
    if (!search){
        return undefined;
    }else{
        search = search.substr(1);
        var searchJson = {};
        var searchArr = search.split('&');
        for(var i = 0 , len = searchArr.length ; i < len ; i++){
            var tempArr = searchArr[i].split('=');
            searchJson[tempArr[0]] = tempArr[1];
        }
        return searchJson;
    }
}
function getSearchParam(param){
    var searchJson = searchToJson();
    if(Object.prototype.toString.call(searchJson) === "[object Object]" && searchJson[param]){
        return searchJson[param];
    }else{
        return '';
    }
}
var outPut = {
        getSearchParam:getSearchParam
    }
    if (typeof exports !== 'undefined' || (typeof module !== 'undefined' && module.exports)){
        module.exports = outPut;
    }else if(typeof define === 'function' && define.amd){
        define('query', [], function(){
            return outPut;
        });
    }else if(typeof define === 'function' && define.cmd){
        define(function(){
            return outPut;
        })
    }else{
        root.query = outPut;
    }
})(window);