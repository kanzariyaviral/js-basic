/*let promiseToCleanTheRoom = new Promise(function(resolve, reject) {

    //cleaning the room
  
    let isClean = true;
  
    if (isClean) {
      resolve('Clean');
    } else {
      reject('not Clean');
    }
  
  });
  
  promiseToCleanTheRoom.then(function(fromResolve) {
    console.log('the room is' + fromResolve);
  }).catch(function(fromReject){
      console.log('the room is' + fromReject);
  })
  */
 let cleanroom = function(){
     return new Promise(function(resolve,reject){
         resolve(' clean the room ');
     });
 }; 
 let removegarbage = function(message){
    return new Promise(function(resolve,reject){
        resolve(message + ' remove the garbage ');
    });

 };
 let winicecream = function(message){
     return new Promise(function(resolve,reject){
         resolve(message + ' won the icecream ');
     });
 };
 cleanroom().then(function(result){
     return removegarbage(result)})
     .then(function(result){ return winicecream(result);})
     .then(function(result){
         console.log(' finished '+ result);
     })