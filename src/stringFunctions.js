/** 
Given a string as an input, len returns the number of characters in the string
*@param {string} text string to get the length of
*@return{number}number of characters 
*/
let len=text=>text.length
/**
Given two strings as inputs, concatenate returns the two strings joined together
*@param{string}text1 one of the strings being concatenated
*@param{string}text2 second string being concatenated
@return{string} the two strings joined together
*/
let concatenate=(text1,text2)=>text1+text2;
/**
Given a string and number as inputs, left returns the first number of characters
*@param{string}text string to get the first characters of
*@param{number}numChars the number of characters that needs to be returned
*@return{string} the first numChars of the text
*/
let left=(text,numChars)=>text.substring(0,numChars);
/**
Given a string and number as inputs, right returns the last number of characters
*@param{string}text string to get the last characters of
*@param{number}numChars the number of characters that needs to be returned
*@return{string} the last numChars of the text
*/
let right=(text,numChars)=>text.substring(text.length-numChars);
/**
Given strings findText and withinText, find returns where the first occurence of the findText is located in the withinText starting at a start number
*@param{string}findText string that needs to be found in withinText
*@param{string}withinText string that the findText is being found in
*@param{number}startNum place to start looking for the findText
*@return{number} where the findText first occurs in the withinText
*/
let find=(findText,withinText,startNum)=>(withinText.indexOf(findText,startNum))+1;
/**
Given strings findText and withinText, search returns where the first occurence of the findText is located in the withinText starting at a start number. This function ignores case
*@param{string}findText string that needs to be found in withinText
*@param{string}withinText string that the findText is being found in
*@param{number}startNum place to start looking for the findText
*@return{number} where the findText first occurs in the withinText
*/
let search=(findText,withinText,startNum)=>(withinText.toLowerCase()).indexOf(findText.toLowerCase(),startNum)+1;
/**
let mid=(text,startNum,numChars)=>text.substring(startNum-1,startNum+numChars-1);
let replace=(oldText,startNum,numChars,newText)=>newText+(oldText.substring(startNum+numChars-1));
/**
Given a string and a substring, getBeforeText gets the part of the string before the substring
*@param{string}text string that the substring is located in
*@param{string}sub substring of the text
*@return{string} characters in the text before the sub
*/
let getBeforeText=(text,sub)=>text.substring(0,text.indexOf(sub));
/**
Given a string and a substring, getAfterText gets the part of the string after the substring
*@param{string}text string that the substring is located in
*@param{string}sub substring of the text
*@return{string} characters in the text after the sub
*/
let getAfterText=(text,sub)=>text.substring(text.indexOf(sub)+sub.length);
/**
Given a string and two substrings, getBetweenText gets the string in between both substrings
*@param{string}text string the substrings are located in
*@param{string}beforeSub the string that comes after the string we are looking for 
*@param{string}afterSub the string before the string we are looking for
*@return the string in between afterSub and beforeSub
*/
let getBetweenText=(text,beforeSub,afterSub)=>getAfterText(getBeforeText(text,beforeSub),afterSub);
/**
Given three strings,text,oldText and newText, substituteOnce substitutes the oldText in the text with the newText
*@param{string}text string the oldText is located in
*@param{string}oldText string that is being replaced 
*@param{string}newText string that is being substituted for the oldText
*@return{string} text with oldText replaced with newText
*/
let substituteOnce=(text,oldText,newText)=>getBeforeText(text,oldText)+newText+getAfterText(text,oldText);
/**
Given a string as an input, getFunctionName returns the name of the function
*@param{string}text string the function is located inside of
*@return{string} the name of the function
*/
let getFunctionName=text=>getBeforeText(text,"(")
/**
Given a postitive integer and a list of arguments separated by commas as inputs, removeArgs removes the first number of arguments from the list of arguments
*@param{number}num number of arguments that needs to be removed
*@param{}args list of arguments
*@return{} list of arguments with the first num of arguments removed
*/
let removeArgs=(num,args)=>{
	let removeFirstArg=list=>getAfterText(list,",");
	if (num===0) return args;
	else return removeFirstArg(removeArgs(num-1,args));
};
/**
Given a positive integer and a list of arguments separated by commas,getArgNum returns the argument at the number position
*@param{number}num the position of the argument you are trying to get
*@param{}args the list of arguments separated by commas
*@return the num argument in the list of arguments
*/
let getArgNum=(num,args)=>{
	let getArgument=list=>getBeforeText(list,",");
	if (num===1) return getArgument(args);
	else return getArgument(getArgNum(num-1,args));
};
let getFinalArg=(args)=>getArgNum(args.length-1);
/**
Given a string and a number, removeLastChars removes the last number of characters of the string
*@param{string}text string that will have characters removed from it
*@param{number}numChars the number of characters being removed from the string
*@return the text with numChars number of characters removed from the end of the string
*/
let removeLastChars=(text,numChars)=>text.substring(0,text.length-numChars);
/**
Given a string and a number, removeFirstChars removes the first number of characters of the string
*@param{string}text string that will have characters removed from it
*@param{number}numChars the number of characters being removed from the string
*@return the text with numChars number of characters removed from the beginning of the string
*/
let removeFirstChars=(text,numChars)=>text.substring(numChars,text.length);
/**
Given a string, removeEnds removes the first and last characters from the string
*@param{string}text string that the characters will be removed from
*@return text with the first and last characters removed from it
*/
let removeEnds=text=>removeFirstChars(removeLastChars(text,1),1);

