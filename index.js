const axios = require('axios');
const readLine = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
/**
 * @param {These is the array that will be iterated by the function} arrayOfPlayers 
 * @param {The number that will be compared with the sum of the inches of the two players} numberToCompare
 */
const compare = (arrayOfPlayers, numberToCompare) => {
  arrayOfPlayers.forEach((player,index) => {
    arrayOfPlayers.reduce((acc, playerToCompare) => {
      Number(player.h_in) + Number(playerToCompare.h_in) === Number(numberToCompare)
        ? console.log( player.first_name + ' ' +   player.last_name +  '   ------   ' + playerToCompare.first_name +' ' + playerToCompare.last_name): '';
    },index);
    arrayOfPlayers.splice(index,1)
  });
}; 
axios
  .get('https://mach-eight.uc.r.appspot.com/')
  .then((response) => {
    playersList = response.data.values
    readLine.question('Pulgadas: ', (n) => {
      const start = process.hrtime();
      compare(playersList, n);
      const end = process.hrtime(start);
      console.log(`Tiempo de ejecución ${end} ms`);
    });
  })
  .catch((e) => console.error(e));