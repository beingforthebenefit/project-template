import React from 'react'
import Message from './Message'

const Dashboard: React.FC = () => {
  return (
    <main className="container">
      <div className="grid">
        <section>
          <article>
            <header>
              <h2>Dashboard</h2>
            </header>
            <p>Welcome to the dashboard!</p>
            <button className="primary">Get Started</button>
            <button className="secondary">Learn More</button>
          </article>
        </section>
        <section>
          <article>
            <Message />
          </article>
        </section>
      </div>
    </main>
  )
}

export default Dashboard
