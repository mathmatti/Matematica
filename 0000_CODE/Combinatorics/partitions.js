P = '';
 
/*
    printp
        - print out the partitioning scheme s of n elements 
        as: {1, 2, 4} {3}
*/
function printp(s, n) {
    /* Get the total number of partitions. In the exemple above, 2.*/
    var part_num = 1;
    var i;
    for (i = 0; i < n; ++i)
        if (s[i] > part_num)
            part_num = s[i];
 
    /* Print the p partitions. */
	P = P + '[';
    var p;
    for (p = part_num; p >= 1; --p) {
        P = P + '['
		//document.write('[');
        /* If s[i] == p, then i + 1 is part of the pth partition. */
        for (i = 0; i < n; ++i)
            if (s[i] == p){
				P = P + (i+1);
                //document.write(i + 1);
			}
		if (p==1){	
			P = P + ']'
		}
		else{
			P = P + '],'
		}
        //document.write(']');
    }
	
	
	
	P = P + ']'	
	P = P + ',';
    //document.write('<br />');
}
 
/*
    next
        - given the partitioning scheme represented by s and m, generate
        the next
 
    Returns: 1, if a valid partitioning was found
        0, otherwise
*/
function next(s, m, n) {
    /* Update s: 1 1 1 1 -> 2 1 1 1 -> 1 2 1 1 -> 2 2 1 1 -> 3 2 1 1 ->
    1 1 2 1 ... */
    /*int j;
    printf(" -> (");
    for (j = 0; j &lt; n; ++j)
        printf("%d, ", s[j]);
    printf("\\b\\b)\\n");*/
    var i = 0;
    ++s[i];
    while ((i < n - 1) && (s[i] > m[i] + 1)) {
        s[i] = 1;
        ++i;
        ++s[i];
    }
 
    /* If i is has reached n-1 th element, then the last unique partitiong
    has been found*/
    if (i == n - 1)
        return 0;
 
    /* Because all the first i elements are now 1, s[i] (i + 1 th element)
    is the largest. So we update max by copying it to all the first i
    positions in m.*/
    var max = s[i];
    for (i = i - 1; i >= 0; --i)
        m[i] = max;
 
/*  for (i = 0; i &lt; n; ++i)
        printf("%d ", m[i]);
    getchar();*/
    return 1;
}
 
function partitions(n) {
    //var s[16]; /* s[i] is the number of the set in which the ith element
            //should go */
    //var m[16]; /* m[i] is the largest of the first i elements in s*/
	var s = [];
	var m = [];
 
    //var n = 7;
    var i;
    /* The first way to partition a set is to put all the elements in the same
       subset. */
    for (i = 0; i < n; ++i) {
        s[i] = 1;
        m[i] = 1;
    }
	
	P = '[';
    /* Print the first partitioning. */
    printp(s, n);
 
    /* Print the other partitioning schemes. */
    while (next(s, m, n)){
        printp(s, n);
	}
	
	P = P + ']';
	P = P.slice(0,length-2) + P.slice(length-1, length-1);
	P = P + ']';
    return P;
}