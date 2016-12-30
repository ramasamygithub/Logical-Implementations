//HigherOrder function- using filter
var Vehicles = [{type: 'LMV', name: 'car'}, {type: 'HMV', name: 'bus'}, {type: 'HMV', name: 'truck'}, {
  type: 'LMV',
  name: 'auto'
}]
var VehicleType = Vehicles.filter(function (vehicle) {
  return vehicle.type === 'HMV';
});
console.log(VehicleType);

//Normal for loop function
var VehicleType=[];
for(var i=0;i<Vehicles.length;i++){
  if(Vehicles[i].type==='LMV'){
    VehicleType.push(Vehicles[i]);
  }
}
console.log(VehicleType);