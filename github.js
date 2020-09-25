class GitHub {
  constructor(){
    this.client_id = '8407ddb95a522d92c217';
    this.client_secret = '73e066e33efb0089b3013d27b6ca1b120c14881e';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

    async getUser(user){
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

      const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

      const profile = await profileResponse.json();
      const repos = await reposResponse.json()

      return {
        profile,
        repos
      }
    }
  }