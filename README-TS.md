## `Vue with TypeScript`

sample export of vue instance with a class
```
@Component
export default class HelloWorld extends Vue {
// @Prop is used to represent `props`    
    @Prop() private msg!: String
    
// below are the `data` properties
    firstName = 'Hello'
    lastName = 'World'
    counter = 0

// get methods are used to represent `computed` properties
    get fullName(): String {
        return this.fristName + ' ' + this.lastName
    }

// methods are used to represent `methods`
    incrementCounter() {
        this.counter++
    }
}
```

