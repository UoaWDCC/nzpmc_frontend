<template>
    <v-data-table
        :headers="headers"
        :items="users"
        sort-by="calories"
        class="elevation-1"
    >
        <template v-slot:top>
            <v-dialog v-model="dialogEdit" max-width="500px">
                <v-card>
                    <v-card-title>
                        <span class="h5">Edit Item</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field
                                        v-model="editedItem.name"
                                        label="Name"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field
                                        v-model="editedItem.email"
                                        label="Email"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field
                                        v-model="editedItem.year"
                                        label="Year Level"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field
                                        v-model="editedItem.quizzes"
                                        label="Associated Quiz(s)"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="close">
                            Cancel
                        </v-btn>
                        <v-btn color="blue darken-1" text @click="save">
                            Save
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                    <v-card-title class="=h5" align="centre">
                        Delete this item?
                    </v-card-title>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="closeDelete">
                            Cancel
                        </v-btn>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="deleteItemConfirm"
                        >
                            OK
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2 material-icons" @click="editItem(item)">
                edit
            </v-icon>
            <v-icon small @click="deleteItem(item)"> delete </v-icon>
        </template>
        <template v-slot:no-data>
            <v-btn color="primary" @click="initialize"> Reset </v-btn>
        </template>
    </v-data-table>
</template>

<script>
export default {
    data: () => ({
        dialogEdit: false,
        dialogDelete: false,
        headers: [
            {
                text: 'Name',
                align: 'start',
                value: 'name',
            },
            { text: 'Email', value: 'email' },
            { text: 'Year Level', value: 'year' },
            { text: 'Associated Quiz(s)', value: 'quizzes' },
            { text: 'Actions', value: 'actions', sortable: false },
        ],
        users: [
            {
                name: 'Daniel',
                email: 'daniel@gmail.com',
                year: 6,
                quizzes: 3,
            },
            {
                name: 'Will',
                email: 'will@gmail.com',
                year: 8,
                quizzes: 24,
            },
            {
                name: 'CZ',
                email: 'cz@gmail.com',
                year: 12,
                quizzes: 6,
            },
        ],
        editedIndex: -1,
        editedItem: {
            name: '',
            email: '',
            year: 0,
            quizzes: 0,
        },
        defaultItem: {
            name: '',
            email: '',
            year: 0,
            quizzes: 0,
        },
    }),

    watch: {
        dialogEdit(val) {
            val || this.close()
        },
        dialogDelete(val) {
            val || this.closeDelete()
        },
    },

    created() {
        this.initialize()
    },

    methods: {
        editItem(item) {
            this.editedIndex = this.users.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogEdit = true
        },

        deleteItem(item) {
            this.editedIndex = this.users.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },

        deleteItemConfirm() {
            this.users.splice(this.editedIndex, 1)
            this.closeDelete()
        },

        closeEdit() {
            this.dialogEdit = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        closeDelete() {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.users[this.editedIndex], this.editedItem)
            } else {
                this.users.push(this.editedItem)
            }
            this.closeEdit()
        },
    },
}
</script>
