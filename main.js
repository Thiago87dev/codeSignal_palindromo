// minha solução
function solution(inputString) {
    const contrario = inputString.split('').reverse().join('')
    return inputString === contrario
}

//melhor solução
const solution2 = inputString => inputString === inputString.split('').reverse().join('');

//solução com ...spreed
const solution3 = inputString => inputString === [...inputString].reverse().join('')  

