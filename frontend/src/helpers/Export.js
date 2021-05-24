import domtoimage from 'dom-to-image';

const saveImage = () => {
    const node = document.getElementById('canvas');
    domtoimage.toPng(node).then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'canvas.png';
        link.href = dataUrl;
        link.click();
    }).catch(() => {
        alert('Something went wrong!');
    });
}

export default saveImage;

