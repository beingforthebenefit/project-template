import {useQuery} from '@apollo/client'
import {GET_EVENTS} from '../queries/eventQueries'

const EventList = () => {
  const {loading, error, data} = useQuery(GET_EVENTS)

  return (
    <main className="container">
      <section>
        <article>
          <header>
            <h2>Event List</h2>
          </header>
          {loading && <article aria-busy="true"></article>}
          {data?.events.map((event: any) => (
            <article key={event.id}>
              <header>
                <h4>{event.title}</h4>
              </header>
              <p>{event.description}</p>
              <p>{new Date(event.date).toLocaleDateString()}</p>
              <p>{event.location}</p>
            </article>
          ))} 
          {error && (
            <article>
              <p>An error occurred. {error.toString()}</p>
            </article>  
          )}
          {!(data?.events || error) && (
            <article>
              <p>No events found.</p>
            </article>  
          )}
        </article>
      </section>
    </main>
  )
}

export default EventList
