import React from 'react'

const Contact: React.FC = () => {
  return (
    <main className="container">
      <section>
        <article>
          <header>
            <hgroup>
              <h2>Contact Us</h2>
              <p>
                If you have any questions, feel free to reach out to us. We
                would love to hear from you.
              </p>
            </hgroup>
          </header>
          <form>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              autoComplete="name"
              autoFocus
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              autoComplete="email"
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Write your message"
              required
            />

            <button type="submit" className="primary">
              Send
            </button>
          </form>
        </article>
      </section>
    </main>
  )
}

export default Contact
