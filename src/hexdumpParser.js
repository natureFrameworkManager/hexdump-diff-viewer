/**
 * 
 * @param {String} dump 
 * @returns 
 */

function parseHexdump(dump) {
    const lines = dump.trim().split('\n');
    const parsedData = [];

    for (const line of lines) {
        const byteIndex = line.slice(0, 4).trim(); // Extract the byte index (first 8 characters)
        const hexBytes = line.slice(7, 54).split(" ").filter(byte => byte != ""); // Extract the hex bytes (characters 8 to 54) and split by spaces
        const ascii = line.slice(57).replace(/[^ -~]/g, '.').split(""); // Replace non-printable chars with '.'

        parsedData.push({
            byteIndex,
            parsedByteIndex: parseInt(byteIndex, 16),
            hexBytes,
            ascii
        });
    }

    return parsedData;
}