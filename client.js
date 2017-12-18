'use strict';
/* global $ */


let MAD_LIB_WORDS = [{
  adj1: '',
  adj2: '',
  adj3: '',
  adverb: '',
  name: '',
  place: '',
  noun: ''
}];


const URL = 'https://my-app.glitch.me/?adjective1=red&adjective2=spikey&adjective3=effective&adverb=rapidly&name=Joe&noun=bungee%20cord&place=Kansas';

let index = 0;


$(function() {
  console.log('hi world from javascript');
});

function madLibTemplate(item) {
  return `<p>There's a ${item.adj1} new ${item.name} in {place} and everyone's talking. Stunningly ${item.adj2} and ${item.adverb} ${item.adj3}, all the cool kids know it. However, ${item.name} has a secret - ${item.name}'s a vile vampire.
  
  Will it end with a bite, or with a stake through the ${item.noun}?</p>`;
}

function renderMadLib() {
  let question = madLibTemplate(MAD_LIB_WORDS[index]);

  $('#questions').html(question);
}

function httpGetRequest() {
  var request = new XMLHttpRequest();
  request.open('GET', URL);
  request.responseType = 'text';
  console.log(request.response);
  request.send();
}