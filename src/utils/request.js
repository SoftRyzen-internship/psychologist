const { GraphQLClient, gql } = require('graphql-request');

export const query = gql`
  query MyQuery {
    allNews {
      newsDetail {
        id
        articleTitle(markdown: true)
        articleText(markdown: true)
        articleImage {
          title
          alt
          url
        }
      }
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
}
