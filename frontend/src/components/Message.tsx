import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_MESSAGE = gql`
  query GetMessage {
    message
  }
`;

const Message: React.FC = () => {
  const { loading, error, data } = useQuery(GET_MESSAGE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <div>{data.message}</div>;
};

export default Message;
