<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <h1>{{title}}</h1>
        <p><h1>Affter computed : {{lowerCaseTitle}}</h1></p>
        <button class="btn btn-primary" v-on:click="show">Show</button>
        <p v-if="showParagragh">
          Tincidunt integer eu augue augue nunc elit dolor, luctus placerat scelerisque euismod, iaculis eu lacus nunc mi elit, vehicula ut laoreet ac, aliquam sit amet justo nunc tempor, metus vel.
        </p>
      </div>
      <div class="col-md-12">
        <ul>
          <li v-for="(menu,i) in menus">{{menu}} {{i}}</li>
        </ul>
        <ul>
          <li v-for="(student,i) in students">{{student.name}} {{i}}</li>
        </ul>
      </div>
      <div class="col-md-12">
        <p>You are developer?</p>
        <p v-if="check">Yes, I am</p>
        <p v-else>No, I am a teacher</p>
        <button v-on:click="check = !check" class="btn btn-danger">Change condition</button>
      </div>
      <div class="col-md-12">
        <!-- gan class do voi quan ly do, Neu click do thi tra ve true -->
        <div class="square" @click="managerRed = !managerRed" v-bind:class="{red: managerRed}"></div>
        <div class="square" v-bind:class="{red: managerRed}"></div>
        <div class="square" v-bind:class="color"></div>
        <input type="text" class="form-control" v-model="color" value="" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <input type="text" v-on:input="valueChange" class="form-control" />
        <p v-once>{{context}} - {{showPost()}}</p>
        <a v-bind:href="link">Facebook.com</a>
        <hr />
        <button v-on:click="clickTangGiaTri" class="btn btn-primary">Click</button>
        <p>{{dem}}</p>
      </div>
      <div class="col-md-12">
        <input type="text" v-model="name" />
        <p>{{name}}</p>
      </div>
      <div class="col-md-12">
        <p>Value A: {{increaseA}}</p>
        <p>Value B: {{increaseB}}</p>
        <p>Value A1: {{increaseA1()}}</p>
        <p>Value B1: {{increaseB1()}}</p>
        <button v-on:click="a++" class="btn btn-primary">ClickA</button>
        <button v-on:click="b++" class="btn btn-primary">ClickB</button>

      </div>
      <div class="col-md-12">
        <p>{{point}}</p>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    components: {

    },
    data() {
      return {
        title: 'The vue js Instance',
        showParagragh: false,
        students: [
          { name: 'Henry', age: 23, gender: 'Male' },
          { name: 'Ryan', age: 23, gender: 'Male' },
          { name: 'Peter', age: 23, gender: 'Male' },
        ],
        menus: ['Home', 'Abount', 'Contact'],
        check: true,
        managerRed: false,
        color: 'blue',
        context: 'Hello Henry, How are you today',
        link: 'https://www.facebook.com/sy.betu',
        dem: 0,
        name: 'Hello',
        a: 0,
        b: 0,
        point: 'You have 7 points',
      }
    }
    ,
    methods: {
      show: function () {
        this.showParagragh = true
        this.updateTitle("The vue js Instance(Update)");
        console.log(this.$refs);
      },
      updateTitle: function (title) {
        this.title = title;
      }
      ,
      valueChange: function (event) {
        this.context = event.target.value;
      },
      sayHello: function () {
        return this.context;
      },
      showPost: function () {
        this.context = 'Im fine';
        return this.context;
      },
      clickTangGiaTri: function () {
        this.dem++;
      },
      increaseA1: function () {
        console.log("Call function a(methods)");
        return this.a;
      },
      increaseB1: function () {
        console.log("Call function b(methods");
        return this.b;
      }
    },
    computed: {
      lowerCaseTitle: function () {
        return this.title.toLowerCase();
      },
      increaseA: function () {
        console.log("Call function a");
        return this.a;
      },
      increaseB: function () {
        console.log("Call function b");
        return this.b;
      },
      divClasses: function () {
        return {
          red: this.managerRed,
          blue: !this.managerRed,
        }
      }
    },
    watch: {
      title: function (value) {
        alert("Title changed, new value" + value);
      }
    }
  }
</script>
