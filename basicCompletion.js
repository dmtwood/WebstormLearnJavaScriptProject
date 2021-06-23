let favoriteAnimals = ['dog', 'cat', 'unicorn'];

function pickAnimal(arr) {
    const rnd = arr.length * Math.random();
    return arr[Math.floor(rnd)];
}

console.log(pickAnimal(favoriteAnimals));
