<template>
    <v-app>
        
    </v-app>
</template>

<script>
    name: 'Catalog'
    export default {
        data: () => {
            products: [
                {id: 1, type: 'set', name: 'Хагиваки', price: 1500},
                {id: 2, type: 'set', name: 'Калимикс', price: 2000},
                {id: 3, type: 'set', name: 'Императорский', price: 3000},
                {id: 4, type: 'roll', name: 'Калифорния', price: 400},
                {id: 5, type: 'roll', name: 'Филадельфия', price: 650},
                {id: 6, type: 'roll', name: 'Жареный с угрем', price: 300},
                {id: 7, type: 'other', name: 'Васаби', price: 15},
                {id: 8, type: 'other', name: 'Имбирь', price: 10},
                {id: 8, type: 'drink', name: 'Кока-кола', price: 10}
            ]
        }
    }
</script>

<style lang="scss" scoped>

</style>