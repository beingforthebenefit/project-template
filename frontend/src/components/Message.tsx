import React from 'react'
import {useQuery, gql} from '@apollo/client'

export const GET_MESSAGE = gql`
  query GetMessage {
    message
  }
`

const Message: React.FC = () => {
  const {loading, error, data} = useQuery(GET_MESSAGE)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return <p>{data.message}</p>
}

export default Message
