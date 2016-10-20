function HerbService(){
 var baseUrl = "http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=";


    this.getObject = function(id, cb){
        $.get(baseUrl + id, cb);

    }
    
}


 



