import Vue from "vue";
import Router from "vue-router";
import Alunos from './components/Aluno/Alunos.vue'
import Professor from './components/Professor/Professor.vue'
import Sobre from './components/Sobre/Sobre.vue'

Vue.use(Router);

export default new Router(
    {
        routes: [
            {
                path: '/professores',
                nome: 'Professores',
                component: Professor
            },
            {
                path: '/Alunos',
                nome: 'Alunos',
                component: Alunos
            },
            {
                path: '/Sobre',
                nome: 'Sobre',
                component: Sobre
            }
        ]
    }
)