const { RESTDataSource } = require('apollo-datasource-rest')

const API_ENDPOINTS = {
  BR_NEWS: 'br_motd/get',
  STW_NEWS: 'stw_motd/get',
  WEAPONS: 'weapons/get'
}

export class FortniteAPI extends RESTDataSource {
  constructor () {
    super()
    this.baseURL = 'https://fortnite-api.theapinetwork.com/'
  }

  willSendRequest (request) {
    request.headers.set('Authorization', process.env.FORTNITE_API_KEY)
  }

  async getBattleRoyaleNews () {
    const { data } = await this.get(API_ENDPOINTS.BR_NEWS)
    return data.map(({ body, image, time, title }) => ({
      body,
      image,
      time,
      title
    }))
  }

  async getSaveTheWorldNews () {
    const { data } = await this.get(API_ENDPOINTS.STW_NEWS)
    return data.map(({ body, image, time, title }) => ({
      body,
      image,
      time,
      title
    }))
  }

  async getAllWeapons () {
    const { data } = await this.get(API_ENDPOINTS.WEAPONS)
    return data.entries.map(({ identifier, name, rarity, image, vaulted, stats }) => ({
      identifier,
      name,
      rarity,
      image,
      vaulted,
      stats
    }))
  }
}
