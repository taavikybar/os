const axios = require('axios');
const fs = require('fs')

async function api() {
  let url = 'https://testnets-api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=50&collection=cryptopunks'
  const data = await axios.get(url)

  for (const asset of data.data.assets) {
    const dateCreated = asset.asset_contract.created_date
    console.log(dateCreated)
  }

  await fs.writeFileSync('./assets.json', JSON.stringify(data.data.assets))
}

api()