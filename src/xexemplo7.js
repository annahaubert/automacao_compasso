const person = {
    firstName: "Yung",
    secondName: "Silva",
    age: 23,
    address: {
        city: "Recife",
        region: "PE",
    },
}

const showFullName = ({firstName, secondName}) => {
    console.log(`${firstName} ${secondName}`)
}

showFullName(person)