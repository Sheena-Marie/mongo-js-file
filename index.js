/* jshint esversion: 6 */

const mongoose = require('mongoose');

// connect to mongo db using mongoose.
mongoose.connect('mongodb://localhost/test');

// create a local database object

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
console.log("connected!");
});

// desigining the database (and creating) schema for the collection
const gotCharacterSchema = mongoose.Schema({
  name: String,
  age: { type: Number, min: 18, max: 65 }
});


// making a class object of the character and making a model (or using) and requiring Schema
const GOTCharacter = mongoose.model('Character', gotCharacterSchema);

// create new character using class and give it stuff.
const character = new GOTCharacter;
character.name = "Sansa Stark";
character.age = 24;


// save to the database
character.save(function (err, character) {
  if (err) return console.error(err);
  console.log(character.name + " save to db");
});
