<template>
  <div class="loginComponent" >
    <img alt="Vue logo" src="./../assets/nzpmclogo.jpg">
    <!-- <h1>{{ msg }}</h1> -->
    <ul>
      <li>Username</li>
      <input v-model="username" placeholder="">
    </ul>
    <ul>
        <li>Password</li>
      <input v-model="password" placeholder="" type="password">
    </ul>
    <div  class="btnContainer">
    <button  v-on:click="proceed">Login</button>
    </div>
  </div>
</template>


<script>
export default {
  name: 'LoginPage',
  props: {
    msg: String
  },
  methods: {
      proceed() {
          alert("You have now logged in")
      }
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
    background-color: rosybrown;
    width: 90%;
    margin: auto;
}
h1 {
    background-color: palegreen;
}
p {
   background-color:cyan;
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
  margin-right: 5%;
  margin-bottom: 5%;
  margin-left: 5%;
  background-color: lightblue;
  height: 7%;
}
li {
  display: inline-block;
  margin: 0 10px;
  background-color: lightcoral;
  font-weight: normal;
  font-family: monospace;
  font-size: 200%;
}
/* a {
  color: #42b983;
} */
.loginComponent {
    background-color: #ecf0f1;
    height: 500px;
    width: 600px;
    margin: auto;
    
 
}
button {
    background-color: #29BB9D;
    color: #ecf0f1;
    font-weight: bold;
    font-family: monospace;
    font-size: 150%;
    border: none;
    width: 6rem;
    height: 3rem;
    
}
button:hover {
    background-color: #23A085;
}
.btnContainer {
    display: flex;
    justify-content: flex-end;
    background-color: yellow;
    margin-right: 20%;
    margin-bottom: 5%;

}
input {
    background-color: #c4c4c4;
    border: none;
    width: 50%;

}
</style>
