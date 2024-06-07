const qrImage = document.getElementById('qr');
const downloadLink = document.getElementById("dl");
    function SendData() {
        const name = document.getElementById("name").value;
        const mobile = document.getElementById("mb").value;
        const quantity = document.getElementById("quantity").value;
        const data = `Name: ${name}, Mobile: ${mobile}, Quantity: ${quantity}`;
        updateQRCode(data);
    }

    function updateQRCode(newData) {
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?data=${newData}&size=200x200`;
        const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${newData}&size=500x500`;

        downloadLink.href = qrCodeUrl;
        downloadLink.download = 'qrcode.png';
        downloadLink.click();
    }