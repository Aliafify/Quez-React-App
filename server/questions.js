const express =require('express');
const fs = require('fs')


const Router = express.Router();
let data = fs.readFileSync("TestData.json"); // get data from json file
const questions = JSON.parse(data);

// words end point

Router.get("/words", getQuestions);
function getQuestions(req, res) {
  try { 
    const words = questions.wordList;
    const random = shuffle(words);
    res.send(random);
  } catch (err) {
    console.log(err);
  }
} 

//shuffle function select random 10 Questions include at least one noun ,verb , adverb, and adjective
function shuffle(array) {
  let currentIndex = array.length;
  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  let newArr = [];
  newArr.push(array.find((a) => a.pos == "noun"));
  newArr.push(array.find((a) => a.pos == "adverb"));
  newArr.push(array.find((a) => a.pos == "adjective"));
  newArr.push(array.find((a) => a.pos == "verb"));

  for (let i = 0; i < array.length; i++) {
    if ((newArr.indexOf(array[i]) === -1) & (newArr.length != 10)) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
// rank end point

Router.post('/rank', getRank);
function getRank(req, res) {
  try {     
    const scoreList = questions.scoresList;
    const score = req.body.score;
    let rank=null;
    if (score !== undefined) {
      const r = scoreList.filter(s => s < score).length / scoreList.length * 100
       rank=r.toFixed(2);
    }
    res.send({ rank: rank }); 
 res.status(200)
  } catch (err) {
    console.error(err);
   
  }
} 

module.exports=Router;  