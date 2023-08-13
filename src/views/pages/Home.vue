<script setup>
import { useStoreData } from '../../stores/data'
import { storeToRefs } from 'pinia'

const emit = defineEmits(['pageName'])
const storeData = useStoreData()

const { data } = storeToRefs(storeData)

emit('pageName', 'Home')

</script>

<template>
    <div class="space-y-3 md:grid md:grid-cols-2 md:gap-3 text-white min-h-max">
        <div class="grid gap-4">
            <div class="grid gap-4 md:gap-0 md:flex md:space-x-5">
                <img src="/profile.jpg" alt="profile-pic" class="border-4 border-white rounded-3xl w-[162px] h-[124px]">
                <div class="space-y-1">
                    <h1 class="text-xl">{{ data.home.name }}</h1>
                    <p class="text-md">{{ data.home.job }}</p>
                    <p class="text-md text-slate-300">{{ data.home.address }}</p>
                </div>
            </div>
            <div class="grid gap-1 md:grid-cols-2">
                <div>
                    <p class="text-md">{{ data.home.title_resume }}</p>
                    <p class="text-md text-slate-300">{{ data.home.job_duration }}</p>
                </div>
                <div>
                    <p class="text-md">{{ data.home.title_freelancer }}</p>
                    <p class="text-md text-slate-300">{{ data.home.freelance_duration }}</p>
                </div>
            </div>
            <div class="grid gap-1">
                <h1 class="text-xl">Description</h1>
                <p class="text-justify">{{ data.home.description }}</p>
            </div>
        </div>
        <div>
            <div class="grid gap-4">
                <h1 class="text-xl">Education</h1>
                <el-timeline>
                    <el-timeline-item v-for="edu in data.home.educations" :timestamp="edu.start_date + ' - ' + edu.end_date" placement="top">
                        <el-card>
                            <p class="text-lg font-medium">{{ edu.school }}</p>
                            <p>{{ edu.degree + ', ' + edu.field }}</p>
                            <p>Grade: {{ edu.grade }}</p>
                            <p>{{ edu.description }}</p>
                        </el-card>
                    </el-timeline-item>
                </el-timeline>
            </div>
        </div>
    </div>

</template>

<style scoped>
    /*  */
</style>