<template>
    <q-page class="bg-grey-4 column">
        <div class="row q-pa-sm bg-primary">
            <q-input @keyup.enter="newTask" class="col" bg-color="teal-2" filled v-model="newNote"
                placeholder="Add a note">
                <template v-slot:append>
                    <q-item-section>
                        <q-btn @click="newTask" round color="teal-3" glossy text-color="black" icon="add" />
                    </q-item-section>
                </template>
            </q-input>
        </div>
        <q-list separator bordered>
            <q-item class=" animate__animated animate__backInRight" @click="task.done = !task.done" clickable
                :class="{ 'done bg-grey-9': task.done }" v-for="(task, index) in tasks" :key="task.title" v-ripple>
                <q-item-section avatar>
                    <q-checkbox class="no-pointer-events" v-model="task.done" val="teal" color="primary" />
                </q-item-section>
                <q-item-section>
                    <q-item-label>{{ task.title }}</q-item-label>
                </q-item-section>
                <q-item-section v-if="task.done" side>
                    <q-btn @click.stop="deleteTask(index)" round color="teal-3" glossy text-color="black"
                        icon="delete" />
                </q-item-section>
            </q-item>
        </q-list>
    </q-page>
</template>

<script setup>
import 'animate.css';
import { ref } from 'vue';
import { useQuasar } from 'quasar'

defineOptions({
    name: 'Home'
})

const $q = useQuasar();

const newNote = ref([""]);

const tasks = ref([
    {
        id: 1,
        title: "list 1",
        done: false
    },
    {
        id: 2,
        title: "list 2",
        done: false
    },
    {
        id: 3,
        title: "list 3",
        done: false
    }
]);

// функция удаляет элемент списка

function deleteTask(index) {
    this.$q.dialog({
        title: 'Confirm',
        message: 'are you sure you want to delete the note?',
        cancel: true,
        persistent: true
    }).onOk(() => {
        this.tasks.splice(index, 1);
        this.$q.notify('note deleted')
    })
};



function newTask() {
    console.log(newNote.value);

    this.tasks.push({
        title: this.newNote,
        done: false
    })

};






</script>


<style lang="sass">
  .done
     .q-item__label
       text-decoration: line-through
       color: #bbb
     
    
  </style>
