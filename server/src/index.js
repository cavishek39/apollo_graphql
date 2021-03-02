const { ApolloServer, MockList } = require('apollo-server')
const typeDefs = require('./schema')

/**
 * This object contains functions that provide the mocked data
 * we want the server to return for each queried field.
 */
const mocks = {
  Query: () => ({
    tracksForHome: () => new MockList([6, 9]),
  }),
  Track: () => ({
    id: () => '1',
    title: () => 'GraphQL Tutorials',
    thumbnail: () =>
      'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
    author: () => {
      return {
        name: 'Avishek Chatterjee',
        profileImage:
          'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg',
      }
    },
    length: () => 1210,
    modulesCount: () => 8,
  }),
}
const server = new ApolloServer({
  typeDefs,
  mocks,
})

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `)
})
