- [ ] Why would you use class component over function components (removing hooks from the question)?
    Prior to hooks they were used to hold stateful components, i would now only use them to beable to work with and update older code as functions are clearly superior

- [ ] Name three lifecycle methods and their purposes.
setState can be used to change the component’s state data, forcing a call to render.
shouldComponentUpdate is a method one could use here to stop a component from calling render if necessary.
componentWillUnmount is called and can be used for any clean up you may need to do

- [ ] What is the purpose of a custom hook?
to have DRY code, see a pattern? make a custom hook

- [ ] Why is it important to test our apps?
to prevent bugs, allows us to spend more time building and less time fixing, gives us confidence in our code
