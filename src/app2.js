//create a const called newApp, will be used to mount later
const newApp = Vue.createApp({
        data() {
            return {
                //return all items needed
            
            //title
             title: 'List of Favorite Albums',

             //category
             category: 'album',

             //arr of favorite items. doing albums
             favItems: [

                //album 1
                {
                    id: 1,
                    name: 'X 100PRE'
                },

                //album 2
                {
                    id: 2,
                    name: 'Oasis'
                },

                //album 3
                {
                    id: 3,
                    name: 'YHLGMDLG'
                },

                //album 4
                {
                    id: 4,
                    name: 'El Ultimo Tour Del Mundo'
                },

                //album 5
                {
                    id: 5,
                    name: 'Un Verano Sin Ti'
                },

                //album 6
                {
                    id: 6,
                    name: 'nadie sabe lo que va a pasar mañana'
                },
             ],

             //auto set selec items to null
             selectedItem: null,

             //no new item first, set to blank
             newItemName: "",

             //set new item added to false to begin
              newItemAdded: false,

              //button label
               addButtonLabel: "Add to List",

               //no added item name to begin
               addedItemName: "",
            }
        },

        //methods
        methods: {

            //display favorite items method
            displayFavorite() {

                //if there isnt a selected item
                if (!this.selectedItem) {

                    //set it to no items selected
                    this.selectedItem = this.favItems[0];
                  } else {

                    //grab the index of the selected item, will be used in the par
                    const currentIndex = this.favItems.indexOf(this.selectedItem);
                    const nextIndex = (currentIndex + 1) % this.favItems.length;

                    this.selectedItem = this.favItems[nextIndex];
                  }
            },

            //update btn func
            updateButton() {

                //if there is a new item
                if (this.newItemName) {

                    //change the btn label
                    this.addButtonLabel = `Add ${this.newItemName} to List`;
                  } else {

                    //if no added, keep to normal text
                    this.addButtonLabel = "Add to List";
                  }
            },

            //added item to list func
            addItemToList() {

                //new item will take the arr length and add one to it
                const newItem = {
                    id: this.favItems.length + 1,

                    //name would be the name of the new item
                    name: this.newItemName,
                  };

                  //push new item to favItems arr
                  this.favItems.push(newItem);

                  //clear the new item
                  this.newItemName = "";

                  //change new item added to true
                  this.newItemAdded = true;

                  //replace the added item to new item and add the name
                  this.addedItemName = newItem.name;
            },
          },   
        
})

// mount id myList to be controlled
newApp.mount('#myList');