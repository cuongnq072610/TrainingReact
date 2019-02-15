const item = [
    {id: 1, name: 'A'},
    {id: 2, name: 'A'},
    {id: 3, name: 'A'},
    {id: 4, name: 'A'},
    {id: 5, name: 'A'},
]

export default () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            return resolve(item)
        }, 4000)
        //return resolve(item)
    })
}