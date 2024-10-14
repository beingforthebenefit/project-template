import React from 'react'

const Services: React.FC = () => {
  const services = [
    {title: 'Service 1', description: 'Description of service 1'},
    {title: 'Service 2', description: 'Description of service 2'},
    {title: 'Service 3', description: 'Description of service 3'},
  ]

  return (
    <main className="container">
      <section>
        <article>
          <header>
            <h2>Our Services</h2>
          </header>
          <div className="grid">
            {services.map((service, index) => (
              <article key={index}>
                <header>
                  <h3>{service.title}</h3>
                </header>
                <p>{service.description}</p>
                <footer>
                  <a href="#" className="secondary">Learn More</a>
                </footer>
              </article>
            ))}
          </div>
        </article>
      </section>  
    </main> 
  )
}

export default Services
