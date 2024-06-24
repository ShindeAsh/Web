const scanTxt = document.getElementById("scanTxt");
updateQRCode("Write Something First")
function SendData() {
    const name = document.getElementById("name").value;
    const doing = document.getElementById("other").value;
    var str = `${name} is doing ${doing}`;
    updateQRCode(str);
    scanTxt.textContent = "Scan This";
}

function updateQRCode(newData) {
    const qrImage = document.getElementById('qr');
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(newData)}&size=200x200`;
}
