<template>
    <div>
        <v-row>
            <v-col>
                <h2 class="mt-5 mb-6 text-center">Каталог</h2>
            </v-col>
        </v-row>
        <v-row>
            
            <ProductsCard 
                v-for="product in products"
                :key="product.id"
                :product="product"
            />
        </v-row>
    </div>
</template>

<script>
    import ProductsCard from '@/components/ProductsCard.vue';
    export default {
        name: 'Catalog',
        components: { ProductsCard },
        data() {
            return {
                products: [
                    {id: 1, type: 'set', name: 'Хагиваки', price: 1500},
                    {id: 2, type: 'set', name: 'Калимикс', price: 2000},
                    {id: 3, type: 'set', name: 'Императорский', price: 3000},
                    {id: 4, type: 'roll', name: 'Калифорния', price: 400},
                    {id: 5, type: 'roll', name: 'Филадельфия', price: 650},
                    {id: 6, type: 'roll', name: 'Жареный с угрем', price: 300},
                    {id: 7, type: 'other', name: 'Васаби', price: 15},
                    {id: 8, type: 'other', name: 'Имбирь', price: 10},
                    {id: 9, type: 'drink', name: 'Кока-кола', price: 10}
                ]
            }
        } 
            
    }
</script>

<style lang="scss" scoped>

</style>