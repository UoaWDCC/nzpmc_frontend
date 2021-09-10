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
                                        v-model="editedItem.displayName"
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
                                        v-model="editedItem.yearLevel"
                                        label="Year Level"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="closeEdit">
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
    </v-data-table>
</template>

<script>
import { usersQuery } from '../gql/queries/user'
import { EditUserMutation } from '../gql/mutations/user'
import { DeleteUserMutation } from '../gql/mutations/user'

export default {
    data: () => ({
        dialogEdit: false,
        dialogDelete: false,
        headers: [
            {
                text: 'Name',
                align: 'start',
                value: 'displayName',
            },
            { text: 'Email', value: 'email' },
            { text: 'Year Level', value: 'yearLevel' },
            { text: 'Actions', value: 'actions', sortable: false },
        ],
        users: [],
        editedIndex: -1,
        editedItem: {
            name: '',
            email: '',
            year: 0,
        },
        defaultItem: {
            name: '',
            email: '',
            year: 0,
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
    apollo: {
        users: {
            query: usersQuery,
        },
    },
}
</script>
