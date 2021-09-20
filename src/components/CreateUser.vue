<template>
    <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
            <div class="text-center">
                <v-btn color="primary" fab small v-bind="attrs" v-on="on">
                    <v-icon class="material-icons">add</v-icon>
                </v-btn>
            </div>
        </template>
        <v-card elevation="2" class="pa-6">
            <h1 class="mb-2">Create User</h1>
            <v-form ref="userForm" v-model="formIsValid">
                <v-row dense>
                    <v-col class="col">
                        <v-text-field
                            label="First Name"
                            v-model="firstName"
                            :rules="[rules.required]"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row dense>
                    <v-col>
                        <v-text-field
                            label="Last Name"
                            v-model="lastName"
                            :rules="[rules.required]"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row dense>
                    <v-col>
                        <v-text-field
                            label="Email"
                            v-model="email"
                            :rules="[rules.required]"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row dense>
                    <v-col>
                        <v-text-field
                            label="Year Level"
                            type="number"
                            v-model="yearLevel"
                            :rules="[rules.required]"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="d-flex justify-space-around mt-3">
                        <v-btn
                            color="primary"
                            :disabled="!formIsValid"
                            :loading="creating"
                            @click="create"
                        >
                            <v-icon left class="material-icons">
                                create
                            </v-icon>
                            Create
                        </v-btn>

                        <v-btn color="error" @click="cancel"> Cancel </v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </v-card>
    </v-dialog>
</template>

<style>
.v-time-picker-title {
    justify-content: center !important;
}
</style>

<script>
import { AddUserMutation } from '../gql/mutations/user'
import { usersQuery } from '../gql/queries/user'

export default {
    data() {
        return {
            dialog: false,
            firstName: null,
            lastName: null,
            yearLevel: null,
            email: null,
            userForm: null,
            formIsValid: null,
            creating: false,
            rules: {
                required: (value) => !!value || 'Required.',
            },
        }
    },
    methods: {
        reset() {
            this.firstName = null
            this.lastName = null
            this.yearLevel = null
            this.email = null
            this.$refs.userForm.resetValidation()
        },
        cancel() {
            this.dialog = false
            this.creating = false
            this.reset()
        },
        create() {
            this.creating = true
            this.$apollo
                .mutate({
                    mutation: AddUserMutation,
                    variables: {
                        addUserInput: {
                            firstName: this.firstName,
                            lastName: this.lastName,
                            email: this.email,
                            yearLevel: this.yearLevel,
                        },
                    },
                    update: (store, { data: { addUser } }) => {
                        const data = store.readQuery({ query: usersQuery })
                        data.users.push(addUser)
                        store.writeQuery({ query: usersQuery, data })
                    },
                })
                .then(() => {
                    this.dialog = false
                    this.creating = false
                    this.$emit('notification', this.firstName, this.lastName)
                    this.reset()
                })
        },
    },
}
</script>
