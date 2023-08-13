<script setup>
import { storeToRefs } from 'pinia';
import { useStoreData } from '../../stores/data';

const storeData = useStoreData()

const { data } = storeToRefs(storeData)

</script>

<template>
    <div class="text-white space-y-2">
        <h1 class="text-xl">Professional Projects</h1>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div v-for="p in data.projects" :key="p">
                <el-card>
                    <h1 class="text-base font-semibold">{{ p.name }}</h1>
                    <div class="text-sm text-gray-500">
                        <p>{{ p.company }}</p>
                        <p>{{ p.contribution_date }}</p>
                        <div v-if="p.feature_contributions.length > 0">
                            <p class="mt-2 text-black">Feature Contributions:</p>
                            <ul class="ml-4 list-disc">
                                <li v-for="item in p.feature_contributions">
                                    {{ item }}
                                </li>
                            </ul>
                        </div>
                        <div class="mt-5">
                            <a v-if="p.url != ''" :href="p.url" target="_blank" class="flex justify-center text-[12px] border-2 border-gray-400 hover:border-gray-600 hover:bg-slate-200 rounded-full px-2 py-1">
                                Show Project 
                            </a>

                            <a v-else="p.url != ''" target="_blank" class="flex justify-center text-[12px] border-2 border-gray-400 hover:border-gray-600 hover:bg-slate-200 rounded-full px-2 py-1">
                                Private Project 
                            </a>
                        </div>
                    </div>
                </el-card>
            </div>
        </div>
    </div>
</template>