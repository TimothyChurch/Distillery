export default defineEventHandler(async (event) => {
    console.log('here')
    const body = await readBody(event)
    console.log(body)
    try {
      return await new Grain(body).save()
    }
    catch (error) {
      return error
    }
  })