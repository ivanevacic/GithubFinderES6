//Search input
const searchUser = document.getElementById('searchUser');

//Search input event listener
searchUser.addEventListener('keyup', (e) => {   //Listen for each key stroke
    //Get input text
    const userText = e.target.value;    //What ever value is typed it
    //If user input is valid
    if(userText != ''){
        //
        console.log(userText);
    }
});