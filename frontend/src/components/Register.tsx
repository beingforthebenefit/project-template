import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {REGISTER} from '../queries/userQueries'
import {useNotification} from '../contexts/NotificationContext'

const Register: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [register] = useMutation(REGISTER)
  const {showNotification} = useNotification()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await register({variables: {email, password}})
      showNotification('User registered successfully!', 'success')
    } catch (err) {
      showNotification('Error registering user', 'error')
    }
  }

  return (
    <main className="container">
      <section>
        <article>
          <header>
            <hgroup>
              <h2>Register</h2>
              <p>Fill in the form below to create your account</p>
            </hgroup>
          </header>
          <form onSubmit={handleRegister}>
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
              autoComplete="new-password"
            />

            <button type="submit" className="primary">
              Register
            </button>
          </form>
        </article>
      </section>
    </main>
  )
}

export default Register
