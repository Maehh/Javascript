const friends = ['Maria', 'Bolo', 'Viiv']
const num = ['1', '2', '3', '4', '5', '6']
friends.push('Marcos')
friends.unshift('Piopo')
friends.splice(2, 0, 'Verso')
console.log(friends)
console.log(friends.indexOf('Bolo'))
console.log(friends.includes('Bolo'))
console.log(friends.pop())
console.log(friends.shift())

// friends.lenght = 0
const all = num.concat(friends)
console.log(all)
const allJoin = friends.join(1)
console.log(allJoin)

const tempPositive = num.every(value => value >= 0)
const onlyPositive = num.filter(value => value >= 0)
console.log(tempPositive)

const movies = [
    {id: 1, movieName: 'Dejavu'},
    {id: 2, movieName: 'Back to the future'},
    {id: 3, movieName: 'Matrix'},
]
console.log(movies.find(movie => {return movie.movieName == 'Dejavu'}))

