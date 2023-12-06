import Vue from "vue";
import Router from "vue-router";
import Alunos from './components/Aluno/Alunos.vue'
import AlunoDetalhe from './components/Aluno/AlunoDetalhe.vue'
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
                path: '/Alunos/:prof_id',
                nome: 'Alunos',
                component: Alunos
            },
            {
                path: '/Alunosall',
                nome: 'Alunos',
                component: Alunos
            },
            {
                path: '/AlunoDetalhe/:id',
                nome: 'AlunoDetalhe',
                component: AlunoDetalhe
            },
            {
                path: '/Sobre',
                nome: 'Sobre',
                component: Sobre
            }
        ]
    }
)