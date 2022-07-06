<template>
    <div>
        <h2 class="text-h5 mb-4">Images</h2>

        <div class="d-flex flex-wrap align-stretch" style="gap: 16px">
            <v-sheet
                rounded
                outlined
                style="max-width: 150px"
                v-for="(image, index) in images"
                :key="index"
            >
                <img
                    :src="image.imageURI"
                    style="width: 150px; height: 150px; object-fit: cover"
                />

                <div class="pa-2">
                    <h3 class="text-h6 mb-2">Image 1</h3>

                    <p>dnwjsfeefneo</p>
                </div>
            </v-sheet>

            <v-dialog
                align="center"
                v-model="dialog"
                max-width="500"
                persistent
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        outlined
                        style="width: 150px; height: 150px"
                        v-bind="attrs"
                        v-on="on"
                    >
                        <v-icon left class="material-icons"> add </v-icon>
                        Add
                    </v-btn>
                </template>

                <v-card>
                    <v-form :disabled="loading" @submit.prevent="upload">
                        <v-toolbar color="primary" dark>
                            <h3>Upload File</h3>
                        </v-toolbar>

                        <div class="pa-4">
                            <v-file-input
                                accept="image/*"
                                label="File input"
                                v-model="file"
                            ></v-file-input>
                        </div>

                        <v-alert
                            type="error"
                            v-if="showError"
                            class="my-3 mx-4"
                            @click="showError = false"
                            style="cursor: pointer"
                        >
                            {{ error }}
                        </v-alert>

                        <v-card-actions class="justify-end">
                            <v-btn large text @click="dialog = false">
                                Cancel
                            </v-btn>

                            <v-btn
                                type="submit"
                                color="primary"
                                large
                                :loading="loading"
                                :disabled="file === null || loading"
                            >
                                <v-icon left class="material-icons">
                                    upload
                                </v-icon>
                                Upload
                            </v-btn>
                        </v-card-actions>
                    </v-form>
                </v-card>
            </v-dialog>
        </div>
    </div>
</template>

<script>
import { ImageMutation } from '@/gql/mutations/adminQuiz'
import { ImageQuery } from '@/gql/queries/adminQuiz'

export default {
    data() {
        return {
            dialog: false,
            loading: false,
            file: null,

            success: null,
            showSuccess: false,
            error: null,
            showError: false,
        }
    },

    watch: {
        error(val) {
            this.showError = !!val
        },

        dialog() {
            // Reset form
            this.file = null
            this.error = null
        },
    },

    methods: {
        // Upload the file
        upload() {
            this.error = null
            this.loading = true

            this.$apollo
                .mutate({
                    mutation: ImageMutation,
                    variables: {
                        input: {
                            questionID: this.$route.params.questionId,
                            image: this.file,
                        },
                    },
                    context: {
                        hasUpload: true,
                    },
                })
                .then(() => {
                    this.dialog = false
                    this.$apollo.queries.images.refetch() // Refetch images
                })
                .catch((error) => {
                    // Error
                    this.error = error.message
                })
                .finally(() => {
                    // Finally
                    this.loading = false
                })
        },
    },

    apollo: {
        images: {
            query: ImageQuery,
            variables() {
                return {
                    questionId: this.$route.params.questionId,
                }
            },
            update: (data) => {
                return data.image
            },
        },
    },
}
</script>
