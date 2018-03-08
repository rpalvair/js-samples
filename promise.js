var increment = function(input) {
	return new Promise(function(resolve,reject) {
    	if(input < 0) {
        	reject("n'accepte pas les nombres inférieurs");
        } else {
        	resolve(input + 1);
        }
    });
}

console.log(increment(-1).then(valeur => console.log(`value = ${valeur}`)).catch(error => console.log(`erreur = ${error}`)));
