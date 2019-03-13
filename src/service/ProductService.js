import * as contentful from 'contentful'

const client = contentful.createClient({
  space: process.env.REACT_APP_CONTENFULL_SPACE_ID,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
})

export async function getOneProduct(id) {
  return await client.getEntries({
      'sys.id': id,
      content_type: 'book',
  })
}