import { createRouter, createWebHistory } from "vue-router";
import PdfViewer from './components/PdfViewer.vue'
const routes = [

    {
        path: '/',
        component: PdfViewer
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;
