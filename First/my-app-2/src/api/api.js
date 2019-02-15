export default (delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('Paying')
            return resolve()
        }, delay)
    })   
}