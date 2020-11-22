class Github {
    constructor() {
        //$ ces clés sont obtenues en créant une application GitHub (API) qui me permettra d'avoir un nombre de recherches illimitées (github.com/settings/developers/OauthApps)
        this.client_id = '09f71e272469771fdfe6';
        this.client_secret = '097e591eac71014d6b60a31f3ebbee54650118f9';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'; // le plus récent en premier
    }

    async getUser(user) {
        //$ https://api.github.com/users/romain-codes on récupère les infos ici, puis pour obtenir l'utilisateur en fonction de ce qu'on tape, on fait :
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}