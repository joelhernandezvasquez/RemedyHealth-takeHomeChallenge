const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()
    server.use(express.json())

    server.post('/api/guestbook', (req, res, next) => {
      // A POSTED REQUEST HERE
      try {
        const { name, message } = req.body.data
        const fs = require('fs')
        // STEP 1: Reading JSON file
        const posts = require('./posts.json')

        // defining a new post
        const post = {
          name: name,
          message: message
        }

        //STEP 2: Adding new data to users object
        posts.push(post)

        fs.writeFile('posts.json', JSON.stringify(posts), err => {
          // Checking for errors
          if (err) throw err
          res.status(200).json({ message: req.data }) // Success
        })
        res.status(200).json({ msg: 'success' })
      } 
      catch (err) {
        console.error(err)
        res.status(500).json({ msg: 'internal server error' })
      }
    })

    server.get('/guestbook', (req, res, next) => {
      try {
        const posts = require('./posts.json')
        res.json(posts)
      } 
      catch (err) {
        console.error(err)
        res.status(500).json({ msg: 'internal server error' })
      }
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
