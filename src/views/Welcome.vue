<template>
    <v-container>
        <v-row class="justify-center">
            <v-col class="col-12 col-xl-8">
                <v-card style="padding: 16px" elevation="2" outlined>
                    <v-row>
                        <v-col class="col-12">
                            <img
                                style="max-width: 100%; width: 300px"
                                class="d-block mx-auto"
                                alt="NZPMC Logo"
                                src="../assets/logo.png"
                            />
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
        <v-row class="justify-center">
            <v-col class="col-12 col-xl-8">
                <v-card style="padding: 16px" elevation="2" outlined>
                    <v-row>
                        <v-col class="col-12 col-md-6">
                            <h1>Kia ora!</h1>
                            <p>
                                Welcome to the New Zealand Physics and
                                Mathematics Competition 2021. Please ensure you
                                have watched the introduction video before you
                                start.
                            </p>
                        </v-col>
                        <v-col class="col-12 col-md-6">
                            <iframe
                                style="width: 100%; min-height: 320px"
                                src="https://www.youtube.com/embed/Des5TrztWRU"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="col-12 text-center">
                            <v-btn to="/exam" large color="primary"
                                >I'm ready!</v-btn
                            >
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {}
</script>
