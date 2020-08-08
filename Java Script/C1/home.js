//challenge 1:Yours age in Days
function ageInDays(){
var birthyear = prompt('What is the year you were born');
var ageInDayss = (2018-birthyear)*365;
var h1 =document.createElement('h1');
var textAnswer =document.createTextNode('you are ' + ageInDayss + ' days old');
h1.setAttribute('id','ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);

}
function reset(){
    document.getElementById('ageInDays').remove();
}