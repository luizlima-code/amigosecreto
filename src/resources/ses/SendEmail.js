const aws = require('aws-skd')
const ses = new aws.SES({ region: 'us-east-1' })

module.exports = (ownerEmail, giver, receiver) => {
  const params = {
    Destination: {
      ToAddress: [giver.email],
    },
    Message: {
      Body: {
        Text: {
          Data: `Seu amigo oculto é o(a) ${receiver.name}`
        }
      },
      Subject: {
        Data: 'O amigo oculto para todos nós!'
      },
    },
    Source: ownerEmail,
  }
  return ses.sendEmail(params).promise()
}