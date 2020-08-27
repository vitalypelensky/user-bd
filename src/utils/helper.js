
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let InterfaceListOfMonthsObject = (id, month) => ({
            id: id,
            name: month,
            users: [],
        })


export let listMonthsWithObject = months.map((month, index) => {
        return InterfaceListOfMonthsObject(index, month)
    }
)


