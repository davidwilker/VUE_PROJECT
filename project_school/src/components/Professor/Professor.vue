<template>
    <div>
        <titulo texto="Professor" />
        <table>
            <thead>
                <th>Cód.</th>
                <th>Nome</th>
                <th>Alunos</th>
            </thead>
            <tbody v-if="Professores.length">
                <tr v-for="(professor, index) in Professores" :key="index">
                    <td class="colPequeno" style="text-align: center; width: 15%">{{ professor.id }}</td>
                    <router-link v-bind:to="'/Alunos/' + professor.id" tag="td" style=" cursor: pointer">
                        {{ professor.nome }} {{ professor.sobrenome }}
                    </router-link>
                    <td class="colPequeno" style="text-align: center; width: 20%">
                        {{ professor.qdtAlunos }}
                    </td>
                </tr>
            </tbody>
            <tfoot v-else>
                Nenhum professor Encontrado!
            </tfoot>
        </table>
    </div>
</template>

<script>
import Titulo from '../_share/Titulo.vue'

export default {
    components: {
        Titulo
    },
    data() {
        return {
            Professores: [],
            Alunos: []
        }
    },
    created() {
        this.$http
            .get('http://localhost:3000/alunos')
            .then(res => res.json())
            .then(alunos => {
                this.Alunos = alunos;
                this.carregarProfessores();
            })
    },
    props: {

    },
    methods: {
        pegarQtdAlunosProfessor() {
            this.Professores.forEach((professor, index) => {
                professor = {
                    id: professor.id,
                    nome: professor.nome,
                    qdtAlunos: this.Alunos.filter(
                        aluno => aluno.professor.id == professor.id
                    ).length
                }
                this.Professores[index] = professor
            });
        },
        carregarProfessores() {
            this.$http
                .get("http://localhost:3000/professores")
                .then(res => res.json())
                .then(Professor => {
                    this.Professores = Professor
                    this.pegarQtdAlunosProfessor();
                })
        }
    }

}
</script>

<style lang="scss" scoped></style>