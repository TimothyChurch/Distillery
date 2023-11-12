export default defineEventHandler(async (event) => {
    try {
      return await Grain.find({})
    }
    catch (error) {
      return error
    }
  })
  