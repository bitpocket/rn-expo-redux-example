const getResult = a =>
  new Promise((resolve, reject) => {
    if (a === 'OK') {
      resolve(`resolved ${a}`);
    } else {
      reject(`rejected ${a}`);
    }
  });

const result = getResult('OK');

result
  .then(response => {
    console.log(`response is ${response}`);
    return response;
  })
  .then(response => {
    console.log(`response2 is ${response}`)
  });

const result2 = getResult('--');
result2
  .then(response => {
    console.log(`response is ${response}`);
  }, reason => {
    console.log(`reject is ${reason}`)
  })
  .catch(reason => console.log(`reject2 is ${reason}`));
