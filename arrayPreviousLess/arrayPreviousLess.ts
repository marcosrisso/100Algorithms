function arrayPreviousLess(items: number[]): number[] {

        const findResult = [];
        
            for ( let i = items.length - 1;  i >= 0; i-- ) {
                for ( let x = i; x >= 0; x-- ) {
                    if ( items[i] > items[x] ) {
                        findResult.unshift(items[x]);
                        break;
                    } else if ( x === 0 ) {
                        findResult.unshift(-1);
                    }
                }
            }
        return findResult;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));