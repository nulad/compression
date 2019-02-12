import gzipDecompress from './gzip';

function decompress() {
    const input = document.getElementById("input").value;
    document.getElementById("output").value = gzipDecompress(input);
}

document.getElementById("decompress-button").onclick = decompress;
