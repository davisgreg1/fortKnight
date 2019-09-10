const { RESTDataSource } = require('apollo-datasource-rest')

const API_ENDPOINTS = {
  BR_NEWS: '',
  STW_NEWS: 'stw_motd/get'
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
      time,
      title
    }))
  }

  async getSaveTheWorldNews () {
    const { data } = await this.get(API_ENDPOINTS.STW_NEWS)
    return data.map(({ body, image, time, title }) => ({
      body,
      time,
      title
    }))
  }
}
