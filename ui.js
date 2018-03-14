//UI Class

class UI {
    constructor() {
        //HTML element with id profile
        this.profile = document.getElementById('profile');
    }
    //show profile method(display profile in ui)
    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary" btn-block">View profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public gists: ${user.public_gists}</span>
                        <span class="badge badge-success">Followers: ${user.followers}</span>
                        <span class="badge badge-info">Following: ${user.following}</span>
                        <br></br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest repos</h3>
            <div id="repose"></div>
        `;
    }
    //clear profile method
    clearProfile() {
        this.profile.innerHTML = '';
    }
    //show alert method
    showAlert(message, className) {
        //clear any remaining alerts
        this.clearAlert();
        //create div 
        const div = document.createElement('div');
        //add class
        div.className = className;
        //add text 
        div.appendChild(document.createTextNode(message));
        //insert
            //get parent
                const container = document.querySelector('.searchContainer');
                //get search box
                const search = document.querySelector('.search');
                //insert alert
                container.insertBefore(div, search);//put error before search  
                
        //timeout after 3 sec
        setTimeout(() => {
            this.clearAlert();
        }, 3000);//3 sec
    }
    //clear alert message
    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        //check if there is an error
        if(currentAlert) {
            //remove error
            currentAlert.remove();
        }
    }
}