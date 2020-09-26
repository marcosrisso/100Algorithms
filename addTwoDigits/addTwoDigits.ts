function addTwoDigits(n: any): number {
  const nums = n.toString().split('');

    return nums.reduce((a: string, b: string) => {
        return parseInt(a) + parseInt(b);
    });

}

console.log(addTwoDigits(29));








function addTwoDigits2(n: any): number {
  const nums = n.toString().split('');

    return parseInt(nums[0]) + parseInt(nums[1]);
}

console.log(addTwoDigits2(29));