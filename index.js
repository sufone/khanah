
function copyText(elementId) {
    let inputElementValue = document.getElementById(elementId).value

    console.log(inputElementValue)
    navigator.clipboard.writeText(inputElementValue).then(_ => {
        console.log('copied successfully!')
        pushNotify('success', "تم النسخ", inputElementValue)
    }, () => {
        console.log('copy failed!')
        pushNotify('error', "ما تم النسخ", inputElementValue)
    })
}

function emptyPaste(elementId) {
    let inputElement = document.getElementById(elementId)
    inputElement.value = ""
    navigator.clipboard.readText().then(
        (clipText) => inputElement.value = clipText);
    inputElement.focus()
}

function pushNotify(status, messageTitle, messageText) {
    new Notify({
        status: status,
        title: messageTitle,
        text: messageText,
        effect: 'fade',
        speed: 300,
        customClass: null,
        customIcon: null,
        showIcon: true,
        showCloseButton: false,
        autoclose: true,
        autotimeout: 2500,
        gap: 20,
        distance: 20,
        type: 1,
        position: 'x-center bottom'
    })
}

