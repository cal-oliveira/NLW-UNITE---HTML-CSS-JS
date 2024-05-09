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
        checkInDate: null
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
        checkInDate: null
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
        checkInDate: null
    },
    {
        name: "Isabela Santos",
        email: "isabela@email.com",
        registrationDate: new Date(2024, 2, 28, 19, 20),
        checkInDate: new Date(2024, 3, 1, 22, 0)
    }
]

const createNewParticipant = (participant) => {

    // Formatação de datas com 'dayjs'
    const registrationDate = dayjs(Date.now()).to(participant.registrationDate)
    let checkInDate = dayjs(Date.now()).to(participant.checkInDate)

    if(participant.checkInDate == null){
        checkInDate = `
            <button
                onclick='checkIn(event)'
                data-email='${participant.email}'
            >
                Confirmar chek-in
            </button>
        `
    }

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

const addParticipant = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)

    const participant = {
        name: formData.get('nome'),
        email: formData.get('email'),
        registrationDate: new Date(),
        checkInDate: null
    }

    // verificar se o participante ja existe
    const existingParticipant = participants.find((p) => {
        return p.email == participant.email
    })

    if(existingParticipant){
        alert('Email já cadastrado!')
        return
    }

    participants = [participant, ...participants]
    updateList(participants)

    // limpar o formulario
    document.querySelector('input').value = ''
    document.querySelector('[name="email"]').value = ''
    

}

const checkIn = (event) => {

    const message = 'Tem certeza que deseja fazer o check-in ?'

    if(confirm(message) === false){
        return
    }

    // encontrar o participante
    const participant = participants.find((p)=>{
        return p.email == event.target.dataset.email
    })
    // atualizar o check-in do participante
    participant.checkInDate = new Date()
    // atualizar lista
    updateList(participants)
}