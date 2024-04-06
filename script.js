let participants = [
    {
        name: "Calebe Oliveira",
        email: "calebe@email.com",
        registrationDate: new Date(2024, 2, 22, 19, 20),
        checkInDate: new Date(2024, 2, 25, 22, 0)
    },
    {
        name: "Diego Fernandes",
        email: "Diego@email.com",
        registrationDate: new Date(2024, 2, 23, 19, 20),
        checkInDate: new Date(2024, 2, 26, 22, 0)
    },
    {
        name: "Eduarda Lima",
        email: "eduarda@email.com",
        registrationDate: new Date(2024, 2, 24, 19, 20),
        checkInDate: new Date(2024, 2, 27, 22, 0)
    },
    {
        name: "Felipe Santos",
        email: "felipe@email.com",
        registrationDate: new Date(2024, 2, 25, 19, 20),
        checkInDate: new Date(2024, 2, 28, 22, 0)
    },
    {
        name: "Gabriela Souza",
        email: "gabriela@email.com",
        registrationDate: new Date(2024, 2, 26, 19, 20),
        checkInDate: new Date(2024, 2, 29, 22, 0)
    },
    {
        name: "Henrique Oliveira",
        email: "henrique@email.com",
        registrationDate: new Date(2024, 2, 27, 19, 20),
        checkInDate: new Date(2024, 2, 30, 22, 0)
    },
    {
        name: "Isabela Santos",
        email: "isabela@email.com",
        registrationDate: new Date(2024, 2, 28, 19, 20),
        checkInDate: new Date(2024, 3, 1, 22, 0)
    },
    {
        name: "João Silva",
        email: "joao@email.com",
        registrationDate: new Date(2024, 2, 29, 19, 20),
        checkInDate: new Date(2024, 3, 2, 22, 0)
    },
    {
        name: "Karine Oliveira",
        email: "karine@email.com",
        registrationDate: new Date(2024, 2, 30, 19, 20),
        checkInDate: new Date(2024, 3, 3, 22, 0)
    },
    {
        name: "Lucas Souza",
        email: "lucas@email.com",
        registrationDate: new Date(2024, 2, 31, 19, 20),
        checkInDate: new Date(2024, 3, 4, 22, 0)
    }

]

const createNewParticipant = (participant) => {

    // Formatação de datas com 'dayjs'
    const registrationDate = dayjs(Date.now()).to(participant.registrationDate)
    const checkInDate = dayjs(Date.now()).to(participant.checkInDate)

    return `
            <tr>
                <td>
                    <strong>
                        ${participant.name}
                    </strong>
                    <br>
                    <small>
                        ${participant.email}
                    </small>
                </td>
                <td>${registrationDate}</td>
                <td>${checkInDate}</td>
            </tr>
    `
}

const updateList = (participants) => {

    let output = ""

    for(let participant of participants){
        output = output + createNewParticipant(participant)
    }

    document.querySelector('tbody').innerHTML = output
}

updateList(participants)