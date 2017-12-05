let len=text=>text.length
let concatenate=(text1,text2)=>text1+text2;
let left=(text,numChars)=>text.substring(0,numChars);
let right=(text,numChars)=>text.substring(text.length-numChars);
let find=(findText,withinText,startNum)=>(withinText.indexOf(findText,startNum))+1;
let search=(findText,withinText,startNum)=>(withinText.toLowerCase()).indexOf(findText.toLowerCase(),startNum)+1;
let replace=(oldText,startNum,numChars,newText)=>newText+(oldText.substring(startNum+numChars-1));
let mid=(text,startNum,numChars)=>text.substring(startNum-1,startNum+numChars-1);
let getBeforeText=(text,sub)=>text.substring(0,text.indexOf(sub));
let getAfterText=(text,sub)=>text.substring(text.indexOf(sub)+sub.length);
let getBetweenText=(text,beforeSub,afterSub)=>getAfterText(getBeforeText(text,beforeSub),afterSub);
let substituteOnce=(text,oldText,newText)=>getBeforeText(text,oldText)+newText+getAfterText(text,oldText);
let getFunctionName=text=>getBeforeText(text,"(");
let removeArgs=(num,args)=>{
	let removeFirstArg=list=>getAfterText(list,",");
	if (num===0) return args;
	else return removeFirstArg(removeArgs(num-1,args));
};
let getArgNum=(num,args)=>{
let getArgument=list=>getBeforeText(list,",");
if (num===1) return getArgument(args);
else return getArgument(getArgNum(num-1,args));
};
let removeLastChars=(text,numChars)=>text.substring(0,text.length-numChars);
let removeFirstChars=(text,numChars)=>text.substring(numChars,text.length);
let removeEnds=text=>removeFirstChars(removeLastChars(text,1),1);

