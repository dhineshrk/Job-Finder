import { createRouter,createWebHistory } from 'vue-router'
import HomeView from '@/views/homeView.vue'
import JobView from '@/views/jobView.vue';
import notFoundView from '@/views/notFoundView.vue';
import JobsView from '@/views/JobsView.vue';
import addJobView from '@/views/addJobView.vue';
import editJobView from '@/views/editJobView.vue';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobView,
        },
        {
            path: '/job/:id',
            name: 'job',
            component: JobsView,
        },
        {
            path: '/jobs/add',
            name: 'add-job',
            component: addJobView,
        },
        {
            path: '/jobs/edit/:id',
            name: 'edit-job',
            component: editJobView,
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: notFoundView,
        },
    ],
});

export default router;