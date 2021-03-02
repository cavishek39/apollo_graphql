const { gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    tracksForHome: [Track!]!
  }

  type Track {
    id: ID!
    title: String!
    thumbnail: String
    author: Author!
    length: Int
    modulesCount: Int
  }

  type Author {
    id: ID!
    name: String!
    profileImage: String
  }
`
module.exports = typeDefs
