var herbService = new HerbService()
var snapSeed = 5300;
var snap = 3000;
var ranarr = 257;
var ranSeed = 5295;
var ranObj = [];
var ranSeedObj = {};
var snapObj = {};
var snapSeedObj = {};
herbController();
console.log(ranObj)



function herbController(){
    herbService.getObject(snapSeed, setSnapSeed);
    herbService.getObject(snap, setSnap);
    herbService.getObject(ranSeed, setRanSeed);
    herbService.getObject(ranarr, setRan);
    
    function setRan(data) {
        var parsedData = JSON.parse(data);
        ranObj.push(parsedData.item.current.price);
    } 
        // var rPrice = ranObj["Ranarr weed"];
        
    function setRanSeed(data){
        var data = JSON.parse(data);
        ranSeedObj[data.item.name] = data.item.current.price;
        var rsPrice = ranSeedObj["Ranarr seed"]; 
    }
        
    function setSnap(data){
        var data = JSON.parse(data);
        snapObj[data.item.name] = data.item.current.price;
        var sPrice = snapObj["Snapdragon"]
    }
        
    function setSnapSeed(data){
        var data = JSON.parse(data);
        snapSeedObj[data.item.name] = data.item.current.price;
        var ssPrice = snapSeedObj["Snapdragon seed"]
    }
    
    drawPrices();
        
    function drawPrices(){
        var profitElem = $('#profits')
        var template = `<div class="col-xs-6">
                            <h1></h1>
                            <h3></h3>
                        </div>
                        <div class="col-xs-6">
                            <h1></h1>
                            <h3></h3>
                        </div>`
        profitElem.append(template)
    }
}


   

        
        
        
    



   


        

        


    
        
        
      
    
        
    
        
    
        

