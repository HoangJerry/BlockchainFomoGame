## URL
- Dev server: `http://18.136.205.85:3001/faq?target=fomoGame`
- Prod sever: will be sent later

Set the following value to headers: `signature` and `timeStamp`. They can be generated from `genSignature()` method below:
See example in `example request.png`

## Helper method to gen signature and timestamp
```
  const privateKeyDev = 'F0M0BankingToTheMOON8?@B##o!fV}5R8G871623JHGJ&6' // MUST be put in .env variable
  const privateKeyProd = 'F0M0BankingToTheMOON@@@(*&*&^756765769879876&%^*(&' // MUST be put in .env variable
  const privateKey = env.isProduction() ? privateKeyProd : privateKeyDev

  function genSignature() {
    const timeStamp = new Date().getTime()
    const input = `${timeStamp}F0M0Banking${timeStamp}`
    const signature = crypto.createHmac('sha256', privateKey).update(input).digest('hex')
    return {
      signature,
      timeStamp
    }
  }
```

The algorithm is:
1. Make input with term: currentTimeStamp + 'F0M0Banking' + currentTimeStamp
2. Encrypt the input with sha-256 with privateKey
