const getUser = async(username) => {
    const resUser = await fetch('https://api.github.com/users/'+ username)
    const user = await resUser.json()

    const resRepos = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
    const originalRepos = await resRepos.json()

    const dontShowRepos = ['Walber2903/modulos-e-testes']
    const dontShowFilter = repo => dontShowRepos.indexOf(repo.full_name) < 0
    const isNotForked = repo => !repo.fork
    const extractData = repo => ({
        id: repo.id,
        full_name: repo.full_name,
        language: repo.language,
        description: repo.description
    })

    const repos = originalRepos
                    .filter(isNotForked)
                    .filter(dontShowFilter)
                    .map(extractData)

    return{
        repos, user
    }
}

export default getUser