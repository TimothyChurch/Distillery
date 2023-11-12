import { defineMongooseModel } from '#nuxt/mongoose'

export const Grain = defineMongooseModel({
    name: "Grain",
    schema: {
        name: {
            type: String,
            required: true
        },
        vendor: {
            type: String,
        },
        price: {
            type: Number,
            required: true
        },
        purchase_unit: {
            type: String,
            required: true
        },
        price_per_lb: {
            type: Number,
            required: true
        }
    }
})
