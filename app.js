//Search input
const searchUser = document.getElementById('searchUser');

//Init github class
const github = new Github();

// ui class
const ui = new UI();

//Search input event listener
searchUser.addEventListener('keyup', (e) => {   //Listen for each key stroke
    //Get input text
    const userText = e.target.value;    //What ever value is typed it
    //If user input is valid
    if(userText != ''){
        //Make HTTP call
        github.getUser(userText)
            .then(data => {
                //If there is no user with info as currently typed input
                if(data.profile.message === 'Not Found'){
                    //Show alert
										ui.showAlert('User not found', 'alert alert-danger');
                } else {
										//Show profile
										ui.showProfile(data.profile);
                }
            });
    }	else {
			//Clear profile when deleting input after finding result
			ui.clearProfile();
		}
});