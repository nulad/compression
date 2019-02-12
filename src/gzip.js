import pako from 'pako';

export default function decompress(data) {
    // Decode base64 (convert ascii to binary)
    var strData     = atob(data);

    // Convert binary string to character-number array
    var charData    = strData.split('').map((x) => {
        return x.charCodeAt(0);
    });

    // Turn number array into byte-array
    var binData     = new Uint8Array(charData);

    // Pako magic
    var data        = pako.inflate(binData);

    // Convert gunzipped byteArray back to ascii string:
    var strData     = String.fromCharCode.apply(null, new Uint16Array(data));

    // Output to console
    return strData;
};
