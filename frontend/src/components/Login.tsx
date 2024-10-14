import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {useNotification} from '../contexts/NotificationContext'
import {LOGIN} from '../queries/userQueries'

const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [login] = useMutation(LOGIN)
  const {showNotification} = useNotification()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const {data} = await login({variables: {email, password}})
      localStorage.setItem('token', data.login)
      showNotification('User logged in successfully!', 'success')
    } catch (err) {
      showNotification('Error logging in', 'error')
    }
  }

  return (
    <main className="container">
      <section>
        <article>
          <header>
            <hgroup>
              <h2>Login</h2>
              <p>Enter your credentials to access your account</p>
            </hgroup>
          </header>
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              autoFocus
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />

            <button type="submit" className="primary">
              Login
            </button>
          </form>
        </article>
      </section>
    </main>
  )
}

export default Login
