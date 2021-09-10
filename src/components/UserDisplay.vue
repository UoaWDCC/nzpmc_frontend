<template>
    <v-data-table
        :headers="headers"
        :items="users"
        sort-by="displayName"
        class="elevation-1"
        show-group-by
    >
        <template v-slot:top>
            <v-dialog v-model="dialogEdit" max-width="800px">
                <v-card>
                    <v-card-title>
                        <span class="h5">Edit Item</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="6" md="3">
                                    <v-text-field
                                        v-model="editedItem.firstName"
                                        label="First Name"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="3">
                                    <v-text-field
                                        v-model="editedItem.lastName"
                                        label="Last Name"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="3">
                                    <v-text-field
                                        v-model="editedItem.email"
                                        label="Email"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="3">
                                    <v-text-field
                                        type="number"
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
            <!-- Delete functionality not implemeted in backend -->
            <v-icon small disabled @click="deleteItem(item)"> delete </v-icon>
        </template>
    </v-data-table>
</template>

<script>
import { usersQuery } from '../gql/queries/user'
import { EditUserMutation } from '../gql/mutations/user'
// Delete functionality not implemeted in backend
// import { DeleteUserMutation } from '../gql/mutations/user'

export default {
    data: () => ({
        dialogEdit: false,
        dialogDelete: false,
        headers: [
            {
                text: 'Name',
                align: 'start',
                value: 'displayName',
                groupable: false,
            },
            { text: 'Email', value: 'email', groupable: false },
            { text: 'Year Level', value: 'yearLevel' },
            {
                text: 'Actions',
                value: 'actions',
                sortable: false,
                groupable: false,
            },
        ],
        users: [],
        editedIndex: -1,
        editedItem: {
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            yearLevel: 0,
        },
        defaultItem: {
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            yearLevel: 0,
        },
    }),

    watch: {
        dialogEdit(val) {
            val || this.closeEdit()
        },
        dialogDelete(val) {
            val || this.closeDelete()
        },
    },

    methods: {
        editItem(item) {
            this.editedIndex = this.users.indexOf(item)
            this.editedItem = { ...item }
            this.dialogEdit = true
        },

        deleteItem(item) {
            this.editedIndex = this.users.indexOf(item)
            this.editedItem = { ...item }
            this.dialogDelete = true
        },

        deleteItemConfirm() {
            this.users.splice(this.editedIndex, 1)
            this.closeDelete()
        },

        closeEdit() {
            this.dialogEdit = false
            this.$nextTick(() => {
                this.editedItem = { ...this.defaultItem }
                this.editedIndex = -1
            })
        },

        closeDelete() {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = { ...this.defaultItem }
                this.editedIndex = -1
            })
        },

        save() {
            if (this.editedIndex > -1) {
                this.users[this.editedIndex] = { ...this.editedItem }
            } else {
                this.users.push(this.editedItem)
            }
            this.$apollo.mutate({
                mutation: EditUserMutation,
                variables: {
                    editUserInput: {
                        id: this.editedItem.id,
                        firstName: this.editedItem.firstName,
                        lastName: this.editedItem.lastName,
                        displayName:
                            this.editedItem.firstName +
                            ' ' +
                            this.editedItem.lastName,
                        email: this.editedItem.email,
                        yearLevel: this.editedItem.yearLevel,
                    },
                },
            })
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
