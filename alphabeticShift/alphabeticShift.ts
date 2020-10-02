function alphabeticShift(inputString: string): string {
    const alphabet: String[] = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    let input = inputString.split('');

    for (let i = 0; i < inputString.length; i++) {
        let index = 0;

        if (input[i] !== 'z') {
            index = alphabet.indexOf(inputString[i]) + 1;
        }
        input[i] = alphabet[index];
    }
    return input.join('');
}

console.log(alphabeticShift('crazy'));


// alternative solution with objects

function alphabeticShift2(inputString: string): string {
    const alphabet = {
        'a': 'b',
        'b': 'c',
        'c': 'd',
        'd': 'e',
        'e': 'f',
        'f': 'g',
        'g': 'h',
        'h': 'i',
        'i': 'j',
        'j': 'k',
        'k': 'l',
        'l': 'm',
        'm': 'n',
        'n': 'o',
        'o': 'p',
        'p': 'q',
        'q': 'r',
        'r': 's',
        's': 't',
        't': 'u',
        'u': 'v',
        'v': 'w',
        'w': 'x',
        'x': 'y',
        'y': 'z',
        'z': 'a'
    };

    let input = inputString.split('');

        for (let i = 0; i < input.length; i++) {
            console.log(input[i]);
            input[i] = alphabet[input[i]];

        }
    
    return input.join('');
}

console.log(alphabeticShift2('crazy'));