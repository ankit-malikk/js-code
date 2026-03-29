//immediately invoked function expressions (IIFE)


(function chai(){
    //named iife
    console.log(`DB CONNECTED`);
    
})();

( () => {
    console.log(`DB CONNECTED TWO ${name}`);
    
} )('ankit')

//iifee means jo immententy excute hoo jayee 
// golobal scope kii pollution ssai problem hoti hai kaiyee barr tho jo declaration koi hatnaa kai liyaa iife kai use
