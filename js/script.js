const { createApp } = Vue;

createApp({
    data(){
        return{
            task: "",
            todoTasks: [],
        }
    },
    methods: {
        addNewTask(){
            const newActivity = {};
            newActivity.task = this.task.trim();
            newActivity.done = false;
            this.todoTasks.push(newActivity)
        }
    }
}).mount(app);