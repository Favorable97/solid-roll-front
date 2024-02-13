<template>
    <v-col cols="2">
        <v-card>
            <v-card-title class="justify-center">
                {{ product.name }}
            </v-card-title>
            <v-card-subtitle>
                {{ this.price }}
            </v-card-subtitle>
            <v-card-text>123</v-card-text>
        </v-card>
    </v-col>
</template>

<script>
    export default {
        name: 'ProductsCard',
        props: {
            product: {
                type: Object,
                default: {}
            }
        },
        computed: {
            price() {
                return `Цена ${this.product.price}р.`
            }
        }  
    }
</script>

<style lang="scss" scoped>

</style>