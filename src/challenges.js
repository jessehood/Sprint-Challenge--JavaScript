/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  const mapResult = [];
  for (let i = 0; i < elements.length; i++) {
    mapResult.push(cb(elements[i]));
  }
  return mapResult;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let counter = n;
  return (...args) => {
    if (counter > 0) {
      counter--;
      return cb(...args);
    }
    return null;
  };
};

const cacheFunction = cb => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  const cache = {};
  return x => {
    if (x in cache) {
      return cache[x];
    }
    cache[x] = cb(x);
    return cache[x];
  };
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  const chars = str.split('');
  const reverse = arr => {
    if (arr.length < 1) return arr;
    return reverse(arr.slice(1)).concat(arr[0]);
  };
  return reverse(chars).join('');
};

const checkMatchingLeaves = obj => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const flatObjValues = myObj => {
    const vals = Object.keys(myObj).map(key => {
      if (typeof myObj[key] === 'object') return flatObjValues(myObj[key]);
      return myObj[key];
    });
    return [].concat(...vals);
  };
  const values = flatObjValues(obj);
  return values.every(x => values[0] === x);
};


const flatten = elements => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  const flatArr = arr => {
    return arr.reduce((prev, next) => {
      return (Array.isArray(next) ? prev.concat(flatArr(next)) : prev.concat(next));
    }, []);
  };
  return flatArr(elements);
};

module.exports = {
  each,
  map,
  limitFunctionCallCount,
  cacheFunction,
  reverseStr,
  checkMatchingLeaves,
  flatten,
};
