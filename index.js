require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const gitHubData = {
    "login": "bappabarik",
    "id": 61709328,
    "node_id": "MDQ6VXNlcjYxNzA5MzI4",
    "avatar_url": "https://avatars.githubusercontent.com/u/61709328?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/bappabarik",
    "html_url": "https://github.com/bappabarik",
    "followers_url": "https://api.github.com/users/bappabarik/followers",
    "following_url": "https://api.github.com/users/bappabarik/following{/other_user}",
    "gists_url": "https://api.github.com/users/bappabarik/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/bappabarik/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/bappabarik/subscriptions",
    "organizations_url": "https://api.github.com/users/bappabarik/orgs",
    "repos_url": "https://api.github.com/users/bappabarik/repos",
    "events_url": "https://api.github.com/users/bappabarik/events{/privacy}",
    "received_events_url": "https://api.github.com/users/bappabarik/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Bappa Barik",
    "company": null,
    "blog": "",
    "location": "Medinipur, West Bengal, India",
    "email": null,
    "hireable": null,
    "bio": "Just another beginner trying to write some code",
    "twitter_username": "bappabarik354",
    "public_repos": 38,
    "public_gists": 0,
    "followers": 7,
    "following": 7,
    "created_at": "2020-03-02T19:00:33Z",
    "updated_at": "2024-07-21T12:03:10Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('@bappabarik')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at codebeetles</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Chai aur code</h2>')
})

app.get('/github', (req, res) => {
    res.json(gitHubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})