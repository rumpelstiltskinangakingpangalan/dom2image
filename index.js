var node = document.getElementById('canvas');

function convert() {

    /*
    domtoimage.toBlob(node).then(function (blob) {
        console.log(blob);
        //window.saveAs(blob, 'my-node.png');

        var a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'trueCanvas.png';
        a.click();
        a.remove();
        URL.revokeObjectURL(a.href);
    });
    */
    
    //node.style.backgroundImage = "linear-gradient(180deg,red 0%, yellow 100%)";

    domtoimage.toPng(node, {width: 600, height: 800})

    .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;

        img.onload = function() {

            var canvas = document.createElement('canvas');
            canvas.width = 600;
            canvas.height = 800;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, 600, 800);

            var a = document.createElement('a');
            a.href = canvas.toDataURL('image/png');
            a.download = "download.png";
            a.click();
            a.remove();

        }
        

        /*
        var a = document.createElement('a');
        a.href = canvas.toDataURL('image/png');
        a.download = "download.png";
        a.appendChild(canvas);
        a.click();
        a.remove();
        */
        
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });

    
}
document.getElementById('btnSave').addEventListener('click', convert)
