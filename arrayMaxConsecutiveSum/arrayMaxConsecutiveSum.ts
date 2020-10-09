function arrayMaxConsecutiveSum(inputArray: number[], count: number): number {

        let sum = 0;
        let maxResult = 0;

        for ( let i = 0; i < count; i++ ) {
            sum += inputArray[i];
        }

        maxResult = sum;

        for ( let i = count; i < inputArray.length; i++ ) {
            sum -= inputArray[i - count];
            sum += inputArray[i];
        
                if ( sum > maxResult ) {
                    maxResult = sum;
                }
        }
        return maxResult;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));