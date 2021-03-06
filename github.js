//Github connection class
class Github {
    constructor() {
        //Github OAuth info
        this.client_id = '9d39dd84ac8c2bb31dde';
        this.client_secret = '42c3ec61610834a3a4f207cdcc98281bd9f06416';
        //max numbers of repos given
        this.repos_count = 5;
        //sort->latest one first
        this.repos_sort = 'created: asc';
    }
    //Method to fetch user
    async getUser(user) {
        //Get profile info from github api for currently searched user
            //With our OAuth info so we have unlimited 'calls' to github's api
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        //Get profile repositories
            //Based on our parameters
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        //Format data we get from API in JSON format
        const profile = await profileResponse.json();
        const repos = await reposResponse.json();
        //Return data in JSON format
        return {
            profile,    //Possible to do like this if they have the same name(profile: profile)
            repos 
        }
    }
}