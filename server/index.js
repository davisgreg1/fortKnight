/* eslint-disable import/first */
require('dotenv').config()
import { ApolloServer, gql } from 'apollo-server'
import { FortniteAPI } from './sources/Fortnite'

const typeDefs = gql`
  type NewsItem {
    title: String,
    body: String,
    image: String,
    time: Int
  }

  type Query {
    battleRoyaleNews: [NewsItem],
    saveTheWorldNews: [NewsItem]
  }
`

const resolvers = {
  Query: {
    battleRoyaleNews: async (_source, _args, { dataSources }) => dataSources.FortniteAPI.getBattleRoyaleNews(),
    saveTheWorldNews: async (_source, _args, { dataSources }) => dataSources.FortniteAPI.getSaveTheWorldNews()
  }
}

const server = new ApolloServer({
  cors: true,
  typeDefs,
  resolvers,
  dataSources: () => ({
    FortniteAPI: new FortniteAPI()
  })
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
