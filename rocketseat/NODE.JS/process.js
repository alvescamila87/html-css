// lista de argumentos do processo que está rodando no node

console.log(process.argv)

const firstName = process.argv[2]
const lastName = process.argv[3]

console.log(`Seu nome é ${firstName} ${lastName}`)