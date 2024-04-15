<template>
  <div id="app" v-drag-and-drop:options="options">
    <h1 class="title">Todo</h1>
    <ul>
      <li v-for="group in groups " :key="group.id">
        <span>
          <h2 class="group_name">{{ group.name }}</h2>
        </span>
        <vue-draggable-group v-model="group.items" :groups="groups" :data-id="group.id" @change="onGroupsChange">
          <ul class="drag-list" :data-id="id">
            <li class="item-list" v-for="item in group.items" :key="item.id" :data-id="item.id">
              <div>{{ item.title }}</div>
            </li>
          </ul>
        </vue-draggable-group>

      </li>
    </ul>
  </div>
</template>
<script>


export default {
  name: 'App',
  data() {
    return {
      groups: [
        {
          id: 1,
          name: "Todoes",

          items: [
            { id: 1, title: "todo-1", groupId: 1 },
            { id: 2, title: "todo-2", groupId: 1 },
            { id: 3, title: "todo-3", groupId: 1 },



          ]
        },
        {
          id: 2,
          name: "In progress",
          items: [
            { id: 4, title: "todo-4", groupId: 2 },
            { id: 5, title: "todo-5", groupId: 2 },
            { id: 6, title: "todo-6", groupId: 2 },
          ]


        },
        {
          id: 3,
          name: "Done",
          items: [
            { id: 7, title: "todo-7", groupId: 3 },
            { id: 8, title: "todo-8", groupId: 3 },
            { id: 9, title: "todo-9", groupId: 3 },
          ]


        }
      ],

      options: {
        dropzoneSelector: ".drag-list",
        draggableSelector: ".item-list"
      }

    }
  },
  methods: {
    onGroupsChange(e) {
      console.log({ e });
    }
  }


}
</script>

<style scoped>
.title {
  margin-bottom: 20px;
}

#app {
  width: 100%;
  max-width: 1100px;
  margin: auto;
  padding: 10px;
}

li {
  padding: 20px 10px;
  border: 1px solid rgb(207, 207, 207);
  margin-bottom: 10px;
}

.group_name {
  margin-bottom: 15px;

}
</style>
