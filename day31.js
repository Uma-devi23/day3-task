function getObject(data) {
    const uniqueMarksObj = {};
  
    for (const key in data) {
      const entry = data[key];
      const mark = entry.marks;
  
      if (!(mark in uniqueMarksObj) || entry.age < uniqueMarksObj[mark].age) {
        uniqueMarksObj[mark] = entry;
      }
    }
    const resultObj = {};
    let index = 0;
    for (const mark in uniqueMarksObj) {
      resultObj[index] = uniqueMarksObj[mark];
      index++;
    }
  
    return resultObj;
  }
  const inputObject = {
    0: {age: 18, name: 'john', marks: '400'},
    1: {age: 17, name: 'julie', marks: '400'},
    2: {age: 16, name: 'Robin', marks: '200'},
    3: {age: 16, name: 'Bella', marks: '300'},
    4: {age: 16, name: 'john', marks: '250'},
    5: {age: 15, name: 'julie', marks: '250'}
  };
  
  const result = getObject(inputObject);
  console.log(result);