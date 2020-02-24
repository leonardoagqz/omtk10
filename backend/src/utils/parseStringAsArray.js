//import { model } from "mongoose";

//transformar string num Array

module.exports = function parseStringAsArray(arrayAsString){
    return arrayAsString.split(',').map(tech => tech.trim());
}