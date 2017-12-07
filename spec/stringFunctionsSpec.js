describe("String functions", function() {
  it("returns the length of a string correctly", function() {
    expect(len("")).toBe(0);
    expect(len("abc")).toBe(3);
    expect(len("Foo 123!")).toBe(8);
  });
  it("title for next test", function() {
    expect(2+2).toBe(4);
  });
  it("title for next next test", function() {
    expect(2+2).not.toBe(3);
  });
  it("concatenates strings correctly", function() {
    expect(concatenate("ap","ple")).toBe("apple");
  });
  it("returns first characters correctly", function(){
    expect(left("apple",3)).toBe("app");
  });
  it("returns last characters correctly", function(){
    expect(right("apple",2)).toBe("le");
  });
  it("finds text correctly",function(){
   expect(find("and","candace",1)).toBe(2);
  });
  it("finds text correctly",function(){
    expect(search("and","candace",1)).toBe(2);
  });
  it("finds middle correctly",function(){
    expect(mid("candace",2,3)).toBe("and");
  });
  it("replaces correctly",function(){
   expect(replace("apple",1,3,"ka")).toBe("kale");
  });
 it("gets before text correctly", function(){
  expect(getBeforeText("apple","ple")).toBe("ap");
 });
 it("gets after text",function(){
  expect(getAfterText("apple","ap")).toBe("ple");
 });
 it("gets between text",function(){
  expect(getBetweenText("andayce","c","an")).toBe("day");
 });
 it("substitutes correctly",function(){
  expect(substituteOnce("apple","app","ka")).toBe("kale");
 });
 it ("removes the first and last characters of a string",function(){
  expect(removeEnds("food")).toBe("oo");
 });
 it ("removes first num of args",function(){
  expect(removeArgs(3,"a,b,c,d,e")).toBe("d,e");
 });
 it ("gets an argument in a list",function(){
  expect(getArgNum(1,"foo,12345,bar,molloy,A2")).toBe("foo");
 });
 it ("gets the final argument",function(){
expect(getFinalArg("foo",12345,"bar","molloy","A2")).toBe("A2");
});
