import { defineMongooseModel } from '#nuxt/mongoose'

export const Ingredient = defineMongooseModel({
    name: "Ingredient",
    schema: {
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
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
        inventory_unit: {
            type: String,
        },
        price_unit: {
            type: Number,
            required: true
        }
    }
})
