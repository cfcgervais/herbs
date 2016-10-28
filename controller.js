var herbService = new HerbService()
var snapSeed = 5300;
var snap = 3000;
var ranarr = 257;
var ranSeed = 5295;
var ranObj;
var ranSeedObj;
var snapObj;
var snapSeedObj;

Promise.all([
    herbService.getData(snap, setSnap),
    herbService.getData(snapSeed, setSnapSeed),
    herbService.getData(ranarr, setRan),
    herbService.getData(ranSeed, setRanSeed)
]).then(ready)

function ready(data) {
    setSnap(data[0])
    setSnapSeed(data[1])
    setRan(data[2])
    setRanSeed(data[3])
    ranObj = ranObj.split(',').join('');
    ranSeedObj = ranSeedObj.split('k').join('00').split('.').join('');
    snapObj = snapObj.split(',').join('');
    snapSeedObj = snapSeedObj.split('k').join('00').split('.').join('');
    parseInt(ranObj, 10)
    parseInt(snapObj, 10)
    parseInt(ranSeedObj, 10)
    parseInt(snapSeedObj, 10)
    var ranTotal = ranObj * 43;
    var snapTotal = snapObj * 43;
    var ranSeedTotal = ranSeedObj * 6;
    var snapSeedTotal = snapSeedObj * 6;
    var snapProf = snapTotal - snapSeedTotal;
    var ranProf = ranTotal - ranSeedTotal;

    function k(stuff){
        return stuff > 999 ? (stuff/1000).toFixed(1) + 'k' : stuff
    }
    snapProf = k(snapProf);
    ranProf = k(ranProf);
    
    cardElem = $('#profits');
    var template = '';
    template = `<div class="row">
                    <div class="col-xs-6">
                        <div class="card">
                            <h1>Snapdragons</h1>
                            <h3>${snapProf} profit/run</h3>
                        </div>
                    </div>
                    <div class="col-xs-6">
                        <div class="card">
                            <h1>Ranarrs</h1>
                            <h3>${ranProf} profit/run</h3>
                        </div>
                    </div>
                </div>`
    cardElem.append(template)              
}

function setRan(data) {
    var parsedData = JSON.parse(data);
    var ranData = parsedData.item.current.price;
    ranObj = ranData;
}

function setRanSeed(data) {
    var parsedData = JSON.parse(data);
    var ranSeedData = parsedData.item.current.price;
    ranSeedObj = ranSeedData
}

function setSnap(data) {
    var parsedData = JSON.parse(data);
    var snapData = parsedData.item.current.price;
    snapObj = snapData
}

function setSnapSeed(data) {
    var parsedData = JSON.parse(data);
    var snapSeedData = parsedData.item.current.price;
    snapSeedObj = snapSeedData
}


    

    



 




    
    
    




























































