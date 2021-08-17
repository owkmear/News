const express = require('express')
const app = express()
const Cookies = require('cookies')

// TODO: add NODE_ENV file
const ARTIFICIAL_DELAY = 1000
const PORT = '4500'
const PROJECT_NAME = 'Coininfo'
const EXPIRES_COOKIE = 14 * 24 * 60 * 60 * 1000 // 14 days

app.use(express.json())
app.use(Cookies.express())
app.use(function (req, res, next) {
  setTimeout(next, ARTIFICIAL_DELAY)
})

// Uncomment to disable security
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
  next()
})

class DBContext {
  database = []
  constructor() {
    this.database.push({
      username: 'Michael',
      email: 'Michael@gmail.com',
      password: '1234'
    })
    this.database.push({
      username: 'John',
      email: 'John@gmail.com',
      password: 'qwerty'
    })
  }

  haveUser(email, password) {
    for (const user of this.database)
      if (user.email === email && user.password === password) return user
    return false
  }

  checkUser(email) {
    for (const user of this.database) if (user.email === email) return true
    return false
  }

  createUser(username, email, password) {
    this.database.push({ username, email, password })
  }
}

let DB = new DBContext()

app.get('/ping', function (req, res) {
  console.log('Post /ping')
  res.type('json')
  res.header('Content-Type', 'text/html; charset=utf-8')
  res.send('pong')
})

app.post('/api/v1/login', function (req, res) {
  console.log('Post /api/v1/login')
  res.type('json')
  res.header('Content-Type', 'text/html; charset=utf-8')
  const { email, password } = req.body
  let answer = null
  const user = DB.haveUser(email, password)
  if (user) {
    answer = {
      success: true,
      data: {
        email: user.email,
        username: user.username
      }
    }
    let expiresDate = new Date()
    expiresDate.setTime(expiresDate.getTime() + EXPIRES_COOKIE)
    req.cookies.set(`${PROJECT_NAME}_email`, user.email, {
      expires: expiresDate
    })
    req.cookies.set(`${PROJECT_NAME}_username`, user.username, {
      expires: expiresDate
    })
    req.cookies.set(`${PROJECT_NAME}_isLogined`, 'true', {
      expires: expiresDate
    })
  } else {
    answer = {
      success: false
    }
  }
  res.send(answer)
})

app.post('/api/v1/isLogined', function (req, res) {
  console.log('Post /api/v1/isLogined')
  res.type('json')
  res.header('Content-Type', 'text/html; charset=utf-8')

  const email = req.cookies.get(`${PROJECT_NAME}_email`)
  const username = req.cookies.get(`${PROJECT_NAME}_username`)
  const isLogined = req.cookies.get(`${PROJECT_NAME}_isLogined`)

  let answer = null
  if (isLogined) {
    answer = {
      success: true,
      data: {
        email: email,
        username: username
      }
    }
  } else {
    answer = {
      success: false
    }
  }

  res.send(answer)
})

app.post('/api/v1/logout', function (req, res) {
  console.log('Post /api/v1/logout')
  res.type('json')
  res.header('Content-Type', 'text/html; charset=utf-8')
  let answer = {
    success: true
  }

  let expiresDate = new Date()
  expiresDate.setTime(0)
  req.cookies.set(`${PROJECT_NAME}_email`, 'Michael@gmail.com', {
    expires: expiresDate
  })
  req.cookies.set(`${PROJECT_NAME}_username`, 'Michael', {
    expires: expiresDate
  })
  req.cookies.set(`${PROJECT_NAME}_isLogined`, 'true', {
    expires: expiresDate
  })

  res.send(answer)
})

app.post('/api/v1/registration', function (req, res) {
  console.log('Post /api/v1/registration')
  res.type('json')
  res.header('Content-Type', 'text/html; charset=utf-8')
  const { username, email, password } = req.body
  let answer = null
  const haveUser = DB.checkUser(email)
  if (!haveUser) {
    DB.createUser(username, email, password)
    answer = {
      success: true,
      data: {
        email: email,
        username: username
      }
    }
    let expiresDate = new Date()
    expiresDate.setTime(expiresDate.getTime() + EXPIRES_COOKIE)
    req.cookies.set(`${PROJECT_NAME}_email`, email, {
      expires: expiresDate
    })
    req.cookies.set(`${PROJECT_NAME}_username`, username, {
      expires: expiresDate
    })
    req.cookies.set(`${PROJECT_NAME}_isLogined`, 'true', {
      expires: expiresDate
    })
  } else {
    answer = {
      success: false
    }
  }
  res.send(answer)
})

app.listen(PORT, () => {
  console.log(`Server start on port ${PORT}`)
})

const stdin = process.openStdin()
stdin.addListener('data', function (data) {
  let input = data.toString().trim().toLowerCase()

  if (input.slice(0, 1) === 's' && input.length > 2) {
    console.log('command:')
    console.log(app[input.split(' ')[1]])
  } else {
    switch (input) {
      case 'db':
        break
      case 'time':
        break
      default:
        console.log('Unknown command: ' + input)
    }
  }
})
