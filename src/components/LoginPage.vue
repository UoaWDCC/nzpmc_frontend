<template>
    <v-container
        style="background-color: #ecf0f1; max-width: 500px"
        class="mt-16"
    >
        <v-row>
            <img alt="Vue logo" src="./../assets/nzpmclogo.jpg" />
        </v-row>
        <v-row align="center" justify="center" dense class="mt-4">
            <v-col sm="4" align="end" justify="center" class="mb-3">
                <p>Username</p>
            </v-col>
            <v-col sm="8" align="center" justify="center">
                <v-text-field
                    v-model="username"
                    placeholder="Enter your username here"
                    label="Username"
                    outlined
                    class="mr-10"
                    dense
                />
            </v-col>
        </v-row>
        <v-row align="center" justify="center" dense>
            <v-col sm="4" align="end" justify="center" class="mb-3">
                <p>Password</p>
            </v-col>
            <v-row>
            <v-col sm="8" align="center" justify="center">
                <v-text-field
                    v-model="password"
                    placeholder="Enter your password here"
                    label="Password"
                    type="password"
                    outlined
                    class="mr-10"
                    dense
                />
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <v-col sm="12" align="end" justify="center">
                <v-btn
                    v-on:click="proceed"
                    align="center"
                    justify="center"
                    class="mr-10"
                    x-large
                    >Login</v-btn
                >
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'LoginPage',
    methods: {
        proceed() {
            alert('You have now logged in')
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
    background-color: rosybrown;
    width: 90%;
    margin: auto;
    margin-bottom: 2.5%;
}
h1 {
    background-color: palegreen;
}
p {
    background-color: cyan;
}
h3 {
    margin: 40px 0 0;
    background-color: orchid;
}
ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-evenly;
    margin-right: 12.5%;
    margin-bottom: 3%;
    height: 7%;
}
li {
    display: inline-block;
    margin: 0 10px;
    font-weight: normal;
    font-family: monospace;
    font-size: 200%;

    margin-left: 7%;
}
.loginComponent {
    background-color: #ecf0f1;
    height: 500px;
    width: 600px;
    margin: auto;
}
button {
    background-color: #29bb9d;
    color: #ecf0f1;
    font-weight: bold;
    font-family: monospace;
    font-size: 175%;
    border: none;
    width: 7rem;
    height: 3.5rem;
    margin-top: 8%;
}
button:hover {
    background-color: #23a085;
}
.btnContainer {
    display: flex;
    justify-content: flex-end;
    margin-right: 17%;
    margin-bottom: 5%;
}
input {
    background-color: #c4c4c4;
    border: none;
    width: 50%;
    font-size: 150%;
    font-family: monospace;
}
</style>
