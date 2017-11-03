// a is a set of set of alternatives to multiplicate.
function cartProd (a){
	var S = [[]];
	var ss = [[]];
	var swap = [];
	

	
	for (i=0;i<a.length;i++){
		S = ss;
		for (j=0;j<a[i].length;j++){
			for (k=0;k<S.length;k++){
				swap = S[k].push(a[i][j]);
				ss.push(S[k]);
			}
			//swapp!!!
		}
	}
		
	return S;
}


function addSet(arr, set){
	arr.forEach(function f(curr, inded, array){
		curr.push
	});
}