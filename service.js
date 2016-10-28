function HerbService(){
 var baseUrl = "http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=";

    this.getData = function(id, cb){
      return new Promise(function(resolve, reject) {
          $.get(baseUrl + id).then(resolve).catch(reject);
      })
    }
}
        


        



    


 



