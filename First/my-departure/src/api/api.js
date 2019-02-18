export const getUser = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve({
                username: 'cuongnqse05240'
            })
        },2000) 
    })
}

export const getFlight = (username) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                user: username,
                flight: 'AR1973',
                date : '10/27/2016 16:00PM'
            })
        },3000)
    })
}

export const getForecast = (date) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                date: date,
                forecast: 'Sunny'
            })
        })
    })
}