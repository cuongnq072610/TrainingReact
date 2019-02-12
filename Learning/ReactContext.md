# 1.React Context
### 1.1.Why use react context
    -  Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

### 1.2.Define
    - Context is designed to share data that can be considered “global” for a tree of React components

### 1.3.Context Provider
    - Define the data you want to store
    - Create by function React.createContext()
    - With Context Provider we can inject data easily without props

### 1.4.Context Consumer
    - Context Consumer is the way to inject data from provider by param context.
    - Syntax:
        <AppContext.Consumer>
            {(context) => context.number}
        </AppContext.Consumer>

