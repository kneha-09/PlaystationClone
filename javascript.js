// function changeMode(){
//     var mybody=document.body;
//     mybody.classList.toggle('myDark');
//     var icon=document.getElementById('icon');
//     icon.onclick=function(){
//         mybody.classList.toggle('myDark');

//     if(mybody.classList.contains('myDark')){
//         icon.src="https://i.ibb.co/10SCHzs/icons8-idea-32.png";
//     }
//     else{
//         icon.src="https://i.ibb.co/MNn6gsG/icons8-idea-26.png";
//     }
// }
// }
var icon=document.getElementById('icon');
    icon.onclick=function(){
        document.body.classList.toggle('myDark');

    if( document.body.classList.contains('myDark')){
        icon.src="https://i.ibb.co/zJn7m1G/icons8-sun-24.png";
    }
    else{
        icon.src="https://i.ibb.co/7V1s1yw/icons8-moon-symbol-30.png";
    }
}
// https://i.ibb.co/7V1s1yw/icons8-moon-symbol-30.png
// https://i.ibb.co/zJn7m1G/icons8-sun-24.png
