<template>
    <!-- <div align="center">
        <v-container style="background-color: #ecf0f1; max-width: 400px">
            <v-container style="background-color: #c1c1c1; max-width: 400px">
                <h3><b>Are you sure you want to submit?</b></h3>
            </v-container>
            <p style="padding: 15px 0px">
                You will not be able to redo any questions after you submit.
            </p>
            <v-btn
                style="
                    margin-right: 10px;
                    color: white;
                    background-color: #09b683;
                "
                x-large
            >
                Yes
            </v-btn>
            <v-btn
                style="
                    margin-left: 10px;
                    color: white;
                    background-color: #ff7069;
                "
                x-large
            >
                No
            </v-btn>
        </v-container>
    </div> -->
    <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
                Submit
            </v-btn>
        </template>

        <v-card>
            <v-card-title class="text-h5 grey lighten-2">
                Are you sure you want to submit?
            </v-card-title>

            <v-card-text>
                You will not be able to redo any questions after you submit.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="dialog = false"> No </v-btn>
                <v-btn
                    color="primary"
                    text
                    to="/submission"
                    @click="submitQuiz"
                >
                    Yes
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { SubmitUserQuizMutation } from '../gql/mutations/submission'
export default {
    data() {
        return {
            dialog: false,
        }
    },
    methods: {
        submitQuiz() {
            console.log('hi')
        },
    },
}
</script>
