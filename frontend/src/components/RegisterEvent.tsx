import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {useNotification} from '../contexts/NotificationContext'
import {REGISTER_EVENT} from '../queries/eventQueries'

const RegisterEvent: React.FC = () => {
  const [eventId, setEventId] = useState('')
  const [registerEvent] = useMutation(REGISTER_EVENT)
  const {showNotification} = useNotification()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await registerEvent({variables: {eventId: parseInt(eventId)}})
      showNotification('Registered for event successfully!', 'success')
    } catch (err) {
      showNotification('Error registering for event', 'error')
    }
  }

  return (
    <main className="container">
      <section>
        <article>
          <header>
            <hgroup>
              <h2>Register for Event</h2>
              <p>Enter the event ID to register</p>
            </hgroup>
          </header>
          <form onSubmit={handleRegister}>
            <label htmlFor="eventId">Event ID</label>
            <input
              type="number"
              id="eventId"
              name="eventId"
              placeholder="Enter the event ID"
              value={eventId}
              onChange={(e) => setEventId(e.target.value)}
              required
              autoFocus
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

export default RegisterEvent
