updateQRCode("Write Something First")
function SendData() {
    const qrImage = document.getElementById('qr');
    qrImage.src = "";
    const name = document.getElementById("name").value;
    const animal = document.getElementById("other").value;
    var upName = String(name);
    var newName = upName.toLowerCase();
    if (newName.includes("ash")) {
        const data = `The Person Who Typed this Name Is DONKEY`;
        updateQRCode(data);
    } else {
        if (newName.includes("ash")){
            const data = "im not allowing that"
            updateQRCode(data);
        }
        const data = `${name} is a ${animal}`;
        updateQRCode(data);
    }
}

function updateQRCode(newData) {
    const qrImage = document.getElementById('qr');
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(newData)}&size=200x200`;
}
