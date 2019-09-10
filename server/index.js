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

  type WeaponStats {
    dps: String,
    hit_body: String,
    hit_head: String,
    firerate: String,
    magazinesize: String,
    reloadtime: String,
    ammocost: String
  }
  
  type WeaponItem {
    identifier: String,
    name: String,
    rarity: String,
    vaulted: Int,
    image: String,
    stats: WeaponStats
  }

  type Query {
    battleRoyaleNews: [NewsItem],
    saveTheWorldNews: [NewsItem],
    getAllWeapons: [WeaponItem]

  }
`

const resolvers = {
  Query: {
    battleRoyaleNews: async (_source, _args, { dataSources }) => dataSources.FortniteAPI.getBattleRoyaleNews(),

    saveTheWorldNews: async (_source, _args, { dataSources }) => dataSources.FortniteAPI.getSaveTheWorldNews(),
    
    getAllWeapons: async (_source, _args, { dataSources }) => 
    dataSources.FortniteAPI.getAllWeapons()
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
