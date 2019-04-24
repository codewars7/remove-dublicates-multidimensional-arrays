const uniqueUnique = (...arr) => {
  // flattening two dementional array
  let flat = [].concat(...arr)
  console.log(flat[0])
  let unique = flat.filter((item, index, original) => {
    return original.indexOf(item) == index
  })
  return unique;
}

// return unique values/saving numbers in original order
console.log(uniqueUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))
