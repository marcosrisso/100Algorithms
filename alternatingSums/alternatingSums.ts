function alternatingSums(persons: number[]): number[] {

    let teamOne = 0;
    let teamTwo = 0;

    persons.forEach((element, index) => {
        if (index % 2 === 0) {
            teamOne += element;
        } else {
            teamTwo += element;
        }
    });

        return [teamOne, teamTwo];

}

console.log(alternatingSums([50, 60, 60, 45, 70]))