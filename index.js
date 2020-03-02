// add solution here
// var musicians = [];
// var instruments =[];



function theBeatlesPlay(musicians, instruments)
{ 
  var output = [];
  for(var i = 0; i <musicians.length; i++)
  {
    output[i] = musicians[i]+" plays "+ instruments[i];
  }
  return output;
}

function johnLennonFacts(facts)
{
  var output = [];
  var i = 0;
  while(i < facts.length)
  {
    output[i] = facts[i] + "!!!";
    i++
  }
  return output;
}

function iLoveTheBeatles(number)
{
  var output = [];
  var input = number;
  var i = 0;
  do
  {
    output[i] = "I love the Beatles!";
    i++
  }
  while(i < number);
  
  
  
}