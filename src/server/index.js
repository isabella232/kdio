import path from 'path'
import config from 'config'
import express from 'express'

import useMiddlewares from './use-middlewares'

import client, { handleResponse } from './koding-client'

import * as authController from './controllers/auth'
import * as usersController from './controllers/users'
import * as templatesController from './controllers/templates'

const PUBLIC_PATH = path.join(__dirname, '../../public')

const app = useMiddlewares(express())

// auth related routes
app.post('/api/auth/login', authController.postLogin)
app.get('/api/auth/whoami', authController.getWhoami)

// user related routes
app.get('/api/users/:username', usersController.getProfile)
app.get('/api/users/:username/templates/:slug', usersController.getTemplate)
app.get('/api/users/:username/templates', usersController.getTemplates)
app.get('/api/users/:username/credentials', usersController.getCredentials)
app.post('/api/users/:username', usersController.postProfile)

// search templates
app.get('/api/templates', templatesController.searchTemplates)

// serve public folder statically.
app.use(express.static(PUBLIC_PATH))

// we want all the routes other than routes starts with `/api/` to be handled by
// our clientside router. So send index.html for each request.
app.get('*', (req, res) => res.sendFile(`${PUBLIC_PATH}/index.html`))

app.listen(config.get('app.port'), () => {
  console.log(`running on: ${config.get('app.port')}`)
})
