<script setup lang="ts">
import { ref } from 'vue';
import { useTaskStore } from '~/store/tasks';
import { storeToRefs } from 'pinia';

const reveal = ref(false);
const dialog = ref(false);

const task = ref({
  title: ref(''),
  desc: ref(''),
  date: ref(''),
  time: ref(''),
});

const taskStore = useTaskStore();
const { addValueToTasksList } = taskStore;
const { taskList } = storeToRefs(taskStore)

const addTaskToList = () => {
  taskStore.addValueToTasksList(task.value);

  task.value = {
    title: '',
    desc: '',
    date: '',
    time: '',
  };
  dialog.value = false;
};  

interface TasksStore {
  addValueToTasksList(value: { email: string; password: string }): void;
  filtersList: string[];
};

</script>



<template>
  <div v-for="task in taskList" :key="task.title">
    <v-card class="mx-auto my-8" elevation="16" max-width="344">
      <v-card-item>
        <v-card-title>
          {{ task.title }}
        </v-card-title>

        <v-card-subtitle>
          {{ task.date }} / {{ task.time }}
        </v-card-subtitle>
      </v-card-item>

      <v-card-text>
        {{ task.desc }}
      </v-card-text>
    </v-card>
  </div>

  <div class="pa-4 text-center">
    <v-dialog v-model="dialog" max-width="600">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn class="text-none font-weight-regular" prepend-icon="mdi-plus" text="Add Task" variant="tonal"
          v-bind="activatorProps"></v-btn>
      </template>

      <v-card prepend-icon="mdi-plus" title="Add Task">
        <v-card-text>
          <v-row dense>
            <v-col cols="12" md="4" sm="6">
              <v-text-field label="Task Title" required hint="What to do?" v-model="task.title"></v-text-field>
            </v-col>

            <v-col cols="12" md="8" sm="6">
              <v-text-field hint="How to Accomplish" label="Description" v-model="task.desc" required></v-text-field>
            </v-col>

            <v-col cols="12" md="4" sm="6">
              <v-text-field hint="When will do?" label="Date" v-model="task.date" required type="date">
              </v-text-field>
            </v-col>
            <v-col cols="12" md="4" sm="6">
              <v-text-field label="Time" hint="When will start?" v-model="task.time" required type="time"></v-text-field>
            </v-col>
          </v-row>

          </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Close" variant="plain" @click="dialog = false"></v-btn>

          <v-btn color="primary" text="Add" variant="tonal" @click.prevent="addTaskToList"></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>