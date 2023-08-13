<script setup>
import IconLinkedIn from '@/components/icons/IconLinkedIn.vue'
import IconGithub from '@/components/icons/IconGithub.vue'
</script>

<template>
    <footer class="grid md:grid-cols-2 md:gap-4 mt-10 text-white static bottom-0">
        <div class="flex space-x-1">
            <a href="https://www.linkedin.com/in/hendrawan-sulistyanto/" target="_blank">
                <IconLinkedIn class="w-[24px]"/>
            </a>
            <a href="https://github.com/Hendrawanss" target="_blank">
                <IconGithub class="w-[24px]"/>
            </a>
        </div>
        <div class="flex md:justify-end md:my-auto">
            <p>&copy; {{ new Date().getFullYear() }} Hendrawan Sulistyanto.</p>
        </div>
    </footer>
</template>