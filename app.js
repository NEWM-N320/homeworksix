//first app file for first component

//create a const called app, will be used to mount later
const app = Vue.createApp({
        data() {
            return {
                //return data needed
                //name 
                name: 'Zaydee Dominguez-Chang',

                //course
                course: 'NEWM-N320',

                //assignment name
                assignmentName: 'First Vue Assignment',

                //difficult level
                diffLevel: 3,

                //completed
                completed: false
            }
        },

        //create a method for the due date
        methods: {
                dateDue() {
                //get a new date, date would be the current date (today)
                 var today = new Date();
                 //next week var gets a new date (being today). it takes the time and rounds up to deliver an actual date
                 var nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
                 //return the local date in a string
                 return nextWeek.toLocaleDateString('en-US');
                }
        }
})

// mount id assignments to be controlled
app.mount('#assignments');