* [Why is Redux](#WhyisRedux)
* [Actions](#Actions)
* [Reducer](#Reducer)
* [Store](#Store)
* [Data Flow](#DataFlow)



# 1.Why is Redux
    
    - You have reasonable amounts of data changing over time
    - You need a single source of truth for your state
    - You find that keeping all your state in a top-level component is no longer sufficient

* Note: 
    - Single source of truth
    - State is read-only
    - Change are made with pure function

# 2.Actions
### 2.1.Define
    - Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using store.dispatch()

    Example:
    {
        type: ADD_TODO,
        text: 'Build my first Redux app'
    }

### 2.2.Action Creator
    function addTodo(text) {
        return {
            type: ADD_TODO,
            text
        }
    }

# 3.Reducer
### 3.1.Define
    Actions describe the fact that sth happened, but don't specify how the application's state changes in response. This is the job of reducers.
    Reducers contains the most important parts in react-redux app
### 3.2.Note
    - We don't mutate the state
    - We return the previous state in the default case.
    ===> Given the same arguments, it should calculate the next state and return it. No surprises. No side effects. No API calls. No mutations. Just a calculation.
# 4.Store
### 4.1.Define
    - Store is the object that brings all actions and reducer together.
    - It's important to note that you'll only have a single store in a Redux application. 
# 5.Data flow
    - The data lifecycle in Redux app follows these 4 steps:
        + Call dispatch actions
        + Store call the reducer function
        + State changes lead to changes in React compoents
        + The Redux store saves the complete state tree returned by the root reducer