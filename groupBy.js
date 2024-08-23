const array = [
    { id: 1, name: "Bilal", city: "Lahore" },
    { id: 1, name: "Bilal", city: "Lahore" },
    { id: 3, name: "Hafsa", city: "Karachi" },
    { id: 4, name: "Rehan", city: "Lahore" },
    { id: 5, name: "Saqib", city: "Karachi" },
    { id: 6, name: "Farhan", city: "Islamabad" }
]

//Function(array,key)
const groupBy = (array, key) => {
    const cityWise = new Array;
    for (item of array) {
        console.log(item);
        if (item.city === key) {
            cityWise.push(item);
        }
    }
    return cityWise;
}

//Output displays the array of objects having specific city
console.log(groupBy(array, "Lahore"));


//GroupBy

const cityWise = array.reduce((cityGroup, value) => {
    const city = value.city;
    if (cityGroup[city] == null) {
        cityGroup[city] = [];
    }
    cityGroup[city].push(value);
    return cityGroup;
}, {});
console.log(cityWise);