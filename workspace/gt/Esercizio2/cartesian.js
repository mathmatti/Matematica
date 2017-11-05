// a is a set of set of alternatives to multiplicate.
function cartProd (a){
	var S = [];

	while ((item = a.pop())!==undefined) {
		S = multiplySet(S, item);
	}
		
	return S;
}




function multiplySet(s1, s2){
	return s1.concat(s2);

}

function cartesianProducOf(arr)
{
    return arr.reduce(function(a,b){
        return a.map(function(x){
            return b.map(function(y){
                return x.concat(y);
            })
        }).reduce(function(a,b){ return a.concat(b) },[])
    }, [[]])
}



