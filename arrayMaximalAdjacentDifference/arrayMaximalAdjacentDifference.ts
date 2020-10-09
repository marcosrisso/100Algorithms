function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    let maxDiff = Math.abs(inputArray[0] - inputArray[1]);

    for ( let i = 0; i < inputArray.length; i++ ) {
        let absoluteDiff = Math.abs(inputArray[i - 1] - inputArray[i]);
        maxDiff = absoluteDiff > maxDiff ? absoluteDiff : maxDiff;
    }

        return maxDiff;

}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));



// alternative solution

function arrayMaximalAdjacentDifference2(inputArray: number[]): number {

	var max = -1;
    var temp;
	for (var i = 0; i < inputArray.length - 1; i++)
      {
		temp = Math.abs(inputArray[i] - inputArray[i + 1]);
		max = Math.max(max, temp);
	  }
	return max;
}

console.log(arrayMaximalAdjacentDifference2([2, 4, 1, 0]));
