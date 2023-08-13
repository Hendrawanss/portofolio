<script setup>
import { storeToRefs } from 'pinia';
import { useStoreData } from '../../stores/data';

const emit = defineEmits(['pageName'])
const storeData = useStoreData()

const { data } = storeToRefs(storeData)

emit('pageName', 'Experience')

</script>

<template>
    <div class="grid gap-6 text-white">
        <div class="md:grid md:grid-cols-2 md:gap-3 min-h-max">
            <div class="grid gap-4 place-content-stretch content-start">
                <h1 class="text-xl">Work Experience</h1>
                <el-timeline>
                    <el-timeline-item v-for="job in data.experiences.job" :timestamp="job.job_duration" placement="top">
                        <el-card>
                            <p class="text-lg font-medium">{{ job.company }}</p>
                            <p>{{ job.position }}</p>
                            <p>{{ job.description }}</p>
                        </el-card>
                    </el-timeline-item>
                </el-timeline>
            </div>
            <div class="grid gap-4 place-content-stretch content-start">
                <h1 class="text-xl">Auxiliary Work</h1>
                <el-timeline>
                    <el-timeline-item v-for="job in data.experiences.auxiliary" :timestamp="job.job_duration" placement="top">
                        <el-card>
                            <p class="text-lg font-medium">{{ job.company }}</p>
                            <p>{{ job.position }}</p>
                            <p>{{ job.description }}</p>
                        </el-card>
                    </el-timeline-item>
                </el-timeline>
            </div>
        </div>

        <div class="grid gap-3">
            <h1 class="text-xl">Skills</h1>
            <el-table :data="data.experiences.skills" :scrollbar-always-on="true" border style="width: 100%" stripe :show-header="false" :highlight-current-row="true">
                <el-table-column prop="field" />
                <el-table-column prop="techs" />
            </el-table>
        </div>

    </div>

</template>

<style scoped>
/*  */
</style>