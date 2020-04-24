## `vue directives`
v-on -> to listen to an event (from html to vuejs)
"v-on:" can be replaced with a shorthand -> "@"

v-bind -> to bind (from vuejs to html)
"v-bind:" can be replaced with a shorthand -> ":"

v-model -> two way binding (from html to vuejs and vice-versa)

v-if -> this can be used to provide conditional expressions.
v-else -> is the else condition when the v-if condition is false.
v-else-if -> only available on higher version of vuejs
v-show -> similar to v-if, but useful when you don't want to detach the element (it would be hidden with css)
v-for -> for looping

´ref´ -> can be used to get some value from an html element.

v-text -> to put just text
v-html -> to put valid html  (beware of using this with cross site scripting and malicious attack).

customer directives can be created using Vue.directive().

## `vue instance`
below, the keywords are el, data, methods...
new Vue({
    el: '#sampleid',
    props: {

    },
    data: {

    },
    methods: {

    },
    computed: {

    },
    watch: {

    },
    components: {

    },
    render: {

    },
    directives: {

    },
    filters: {

    },
    mixins: {

    }
})

#### `data`
- it is the private memory of each component where you can store any variables you need

#### `props`
- props are how you pass this data from a parent component down to a child component

#### `computed`
- the functions inside ´computed´ (or computed properties as they are called) gets called by itself, as the properties used inside changes. 
- They are calculations that will be cached based on their dependencies and will only update when needed.
- more optimal than ´watch´.
- need to run synchornously.

#### `watch`
- can be used when computed is not possible.
- the property name of a watch must match one of the properties used inside the data field.
- this is another way to check if something changed on a data property and perform some action in response to that change.
- can also run asyncronously (so can use any async methods inside the logic)

#### `components`
- these are used to define local components instead of a single global component.
- for global component defenition, we can use Vue.component() method.

#### `render`
- useful for adding a vuejs template (like rendering a App.vue file)

#### `directives`
- to register local directives

## `npm`
npm install -g vue-cli
vue init webpack-simple my-first-app -> create a sample project using vue-cli
npm install -> to install all depens in package.json
npm run dev -> to run the app

(in case if npm run does nothing)
npm config get ignore-scripts -> if this is true, then run following,
npm config set ignore-scripts false

npm run build -> build in order to deploy the app in prod

## `component`
- used for reusing components or parts.
- when you write a vue component, the data must be a function instead of just a property (this is to make sure state is different in each copy of component).
- el property doesn't work inside a component.
- the first arg of Vue.component() is tag name, 2nd arg is a vue instance.

#### `component communication`
- parent -> child communication is done via props. Parent would pass the value to the props in the component tag and child component can use it as a property in its template.
- child can communicate back to parent via,
    1. custom events - ie, child will create and $emit a custom event, which the parent can listen to and then use the event data as $event.
    2. callbacks - ie, parent will pass the callback function again as a param to the child (of type Funtion), and then child can call this callback function when needed to send some event back.
- generally speaking, one child to another child communication is not possible directly, it has to be routed via the parent, child1 -> parent -> child2
    - since this can get quiet complex when there are so many children, we can use an eventBus (which is a vue instance) and pass the custom events via this eventBus directly from child1 -> child2
    - for bigger application, vuex could be used as the eventStore instead of the eventBus
@TODO: need to do the sample app for component communication section + do the practice assignment.

#### `passing content with slot`
- by using `<slot></slot>` in child component template.
- parent can pass in any html inside the component tag of child.
- the styling, the javascript, vue and every other data processing like string interpolation is applied to the html by the `parent and not the child`.

#### `using multiple named slot`
- on child, you specify the name
```
    <slot name="title"></slot>
    <slot name="content"></slot>
```
- on parent, you specify the slot
```
    <h1 slot="title">My Title</h1>
    <p slot="content">My Content</p>
```
- unnamed slot will be considered as the default slot.

#### `dynamic component in template`
- done using tag `<component :is="selectedComponent"></component>` where `selectedComponent` is a data property that holds the name of the component as string.
- by default when you navigate from one component1 to another component2, the component1 is destroyed and component2 is created new. If you want to avoid this behavior, we can use,
    - keep alive support using the tag `<keep-alive></keep-alive>` and you put your component tag inside this keep-alive tag.

## `filters and mixins`
- filters are used for transforming a value. In template, it can be used with pipe symbol and also supports mutliple piping 
    -> {{ title | mySpecialFilter1 | myFilter2 }}
- filters are not very performant, so it is not advised to use it for complex filtering, instead the filtering can be achieved by computed and JS filter method. 
- mixins are a way to mix other data or methods or computed etc stored in a global .js file to be imported and mixed into the current vue instance
    -> we use the `mixins` propery in vue instance to achieve the same, it takes a array of values.
- when importing mixins, the local component where the mixin was imported has the last word, meaning it can override if same things are defined in mixin as well as local component or vue instance.

## `axios`
- alternative for vue-resource.
- eg, is given below
```
axios.post(url, data, config)
    .then(response => console.log(response))
    .catch(error => console.log(error))
```
- similarly you have axios.get(), axios.put() etc.
- axios.create() will create a new custom instance of axios. Instead if you use axios directly, you share the same global object whole over in your application.

## `vue-router`
- used for making SPA
- include it using Vue.use(VueRouter)
- then create a new instance of VueRouter by passing in the routes as arg
    -> const router = new VueRouter({routes})
- the `routes` arg above is made like given below,
    const routes = [
        {path: '', component: Home},
        {path: '/user', component: User},   
    ]
- then the VueRouter instance is added into the vue instance,
    -> new Vue({
        el: '#app',
        router
    })
- finally, you need to add a built in tag given below into your template section to render/place the routes in html.
```
    <router-view></router-view>
```
- use the given below tag for adding router links to your app (this is slightly different from html anchor tag href, that it doesn't send request to server if the mode is `hash`)
```
    <router-link></router-link>
```