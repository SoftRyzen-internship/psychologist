const { GraphQLClient, gql } = require('graphql-request');

export const query = gql`
  query MyQuery {
    allNews(orderBy: _createdAt_DESC) {
      id
      title
      text
      image {
        alt
        url
      }
      _publishedAt
    }
  }
`;

export const getNewsList = () => {
  const endpoint = 'https://graphql.datocms.com/';
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      'content-type': 'application/json',
      authorization: 'Bearer ' + process.env.DATOCMS_API_KEY,
    },
  });
  const news = graphQLClient.request(query);
  return news;
};
