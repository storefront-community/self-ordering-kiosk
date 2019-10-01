import axios from 'axios'
import { Optional } from '@/models';

export default class OptionalApi {
  constructor() {
    this.locale = ''
  }

  async list(itemGroupId) {
    const path = `${process.env.VUE_APP_API_BASE_URL}/menu/${this.locale}/optionals/${itemGroupId}.json`
    const response = await axios.get(path)

    if (response && response.status === 200) {
      return response.data.optionals.map(params => new Optional(params))
    }

    return null
  }
}
