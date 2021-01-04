import { Notify } from 'quasar'

const functions = function () {
  const showNotify = function (msg, position, tipo) {
    let tipoMsg
    switch (tipo) {
      case 'sucesso':
        tipoMsg = 'positive'
        break
      case 'erro':
        tipoMsg = 'negative'
        break
      case 'aviso':
        tipoMsg = 'warning'
        break
      default:
        break
    }
    Notify.create({
      message: msg,
      position: position,
      // color: cor,
      type: tipoMsg,
      actions: [{
        icon: 'close',
        color: 'white'
      }]
    })
  }
  return { showNotify }
}

export default functions
