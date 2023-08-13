import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStoreData = defineStore('data', {
  state: () => ({
    data: ref({
      home: {
        educations: [
          {
              school: 'Bina Nusantara University',
              degree: 'Bachelor\'s Degree',
              field: 'Informatics Engineering',
              start_date: '2020',
              end_date: '2022',
              grade: '3.78',
              description: ''
          },
          {
              school: 'State Polytechnic Of Semarang',
              degree: 'Diploma 3',
              field: 'Informatics Engineering',
              start_date: '2016',
              end_date: '2019',
              grade: '3.73',
              description: ''
          }
        ],
        name: 'Hendrawan Sulityanto',
        address: 'Klaten Regency, Central Java, Indonesia',
        title_resume: 'Software Engineer (web-based)',
        job_duration: '2019 - present',
        title_freelancer: 'Freelancer',
        freelance_duration: '2018 - present',
        job: 'Backend Engineer - YUKK Indonesia',
        description: 'I am a web-based software engineer. I have developed more than 15 types of web-based applications as business solutions during my professional career. I am a fast learner, able to work under pressure and have good leadership skills. I have several sports hobbies such as swimming, soccer, badminton, and running and another hobbies like planting trees and raising fishs.'
      },
      experiences: {
        job: [
            {
                company: 'PT. YUKK Kreasi Indonesia',
                position: 'Backend Developer',
                job_duration: 'July 2022 - Present',
                description: ''
            },
            {
                company: 'PT. Media Telekomunikasi Mandiri',
                position: 'IT Support',
                job_duration: 'January 2021 - June 2022',
                description: ''
            },
            {
                company: 'PT. Kinarya Alihdaya Mandiri',
                position: 'IT Support',
                job_duration: 'September 2019 - December 2020',
                description: ''
            },
        ],
        auxiliary: [
            {
                company: 'PT. Milenial Sukses Berdikari',
                position: 'Backend Engineer',
                job_duration: 'April 2022 - June 2022',
                description: ''
            }
        ],
        skills: [
            {
                field: 'Back-End',
                techs: 'PHP, Laravel, Code Igniter'
            },
            {
                field: 'Front-End',
                techs: 'Vue.JS, Alpine.Js, Javascript'
            },
            {
                field: 'SQL Database',
                techs: 'MySQL, PostgreSQL'
            },
            {
                field: 'Version Control',
                techs: 'Git'
            },
            {
                field: 'OS',
                techs: 'Windows, Linux (Ubuntu)'
            },
            {
                field: 'Other Programing Languages',
                techs: 'Java, Python'
            },
            {
                field: 'Software',
                techs: 'Docker, Talenta'
            },
            {
                field: 'Task Management',
                techs: 'Monday'
            },
        ]
      },
      projects: [
        {
            name: 'Dashboard',
            company: 'YUKK Indonesia',
            contribution_date: 'Jul 2022 - Present',
            url: 'https://dashboard.yukk.co.id/',
            feature_contributions: [
                'Money Transfer Feature',
                'Inbound Feature',
            ],
        },
        {
            name: 'Official Website',
            company: 'YUKK Indonesia',
            contribution_date: 'Jul 2022 - Present',
            url: 'https://yukk.co.id/id',
            feature_contributions: [
                'All Feature',
            ],
        },
        {
            name: 'Official Website',
            company: 'Hydrogen Business Desk (HBD) ',
            contribution_date: 'Apr 2022 - Jun 2022',
            url: 'https://www.hydrogen-indonesia.id/',
            feature_contributions: [
                'Content Management System Feature'
            ],
        },
        {
            name: '10 Private Business Solution Website',
            company: 'Telkomsel Regional 3',
            contribution_date: 'Sept 2019 - Jun 2022',
            url: '',
            feature_contributions: [],
        },
      ]
    })
  }),
  actions: () => {
    // 
  }
})
