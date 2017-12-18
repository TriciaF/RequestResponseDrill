'use strict';



// Request and response object drills
// ==================================

const express = require('express');
const app = express();

app.get('/:adj1/:adj2/:adj3/:adverb/:name/:place/:noun', (req, res) => {
  const { adjective1, adjective2, adjective3, adverb, name, noun, place } = req;

  res.send({ adjective1, adjective2, adjective3, adverb, name, noun, place });
});


// listen for requests :)
app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080}`));