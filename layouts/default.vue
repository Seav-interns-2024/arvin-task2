<script>
export default {
    methods: {
        notif() {
            alert('You have 0 Notifications for now')
        }
    }
}
</script>

<template>
    <div>
        <title>Straw Hats</title>
        <header class="shadow-sm bg-black h-24">
            <nav class="container mx-auto pl-4 pr-4 flex justify-between items-center h-full">
                <NuxtLink to="/">
                    <img src="/assets/images/onePiece.png" class="h-28 md:h-32 w-auto pl-1" alt="Logo"> 
                </NuxtLink>
                <button @click="notif" class="pl-4">
                    <img src="/assets/images/notification.png" class="h-8 w-auto" alt="Notif Logo" style="filter: invert(100%);">
                </button>
            </nav>
        </header>

        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>
</template>


<style scoped>

</style>
