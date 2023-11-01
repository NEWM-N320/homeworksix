//create a const called newApp, will be used to mount later
const newApp = Vue.createApp({
        data() {
            return {
             title: 'List of Favorite Albums',
             category: 'album',
             favItems: [
                {
                    id: 1,
                    name: 'X 100PRE'
                },
                {
                    id: 2,
                    name: 'Oasis'
                },
                {
                    id: 3,
                    name: 'YHLGMDLG'
                },
                {
                    id: 4,
                    name: 'El Ultimo Tour Del Mundo'
                },
                {
                    id: 5,
                    name: 'Un Verano Sin Ti'
                },
                {
                    id: 6,
                    name: 'nadie sabe lo que va a pasar mañana'
                },
             ],
             selectedItem: null,
             newItemName: "",
              newItemAdded: false,
               addButtonLabel: "Add to List",
               addedItemName: "",
            }
        },
        methods: {
            displayFavorite() {
                if (!this.selectedItem) {
                    this.selectedItem = this.favItems[0];
                  } else {
                    const currentIndex = this.favItems.indexOf(this.selectedItem);
                    const nextIndex = (currentIndex + 1) % this.favItems.length;
                    this.selectedItem = this.favItems[nextIndex];
                  }
            },
            updateButton() {
                if (this.newItemName) {
                    this.addButtonLabel = `Add ${this.newItemName} to List`;
                  } else {
                    this.addButtonLabel = "Add to List";
                  }
            },
            addItemToList() {
                const newItem = {
                    id: this.favItems.length + 1,
                    name: this.newItemName,
                  };
                  this.favItems.push(newItem);
                  this.newItemName = "";
                  this.newItemAdded = true;
                  this.addedItemName = newItem.name;
            },
          },   
        
})

// mount id myList to be controlled
newApp.mount('#myList');