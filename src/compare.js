/**
 * 
 * @param {{byteIndex: String, parsedByteIndex: number, hexBytes: String[], ascii: String}[]} hex1 
 * @param {{byteIndex: String, parsedByteIndex: number, hexBytes: String[], ascii: String}[]} hex2 
 * @returns 
 */

function compareHexdumps(hex1, hex2) {
    const differences = [];

    const maxLines = Math.max(hex1.length, hex2.length);

    for (let i = 0; i < maxLines; i++) {
        const line1Bytes = (i == hex1.length ? "" : hex1[i].hexBytes);
        const line2Bytes = (i == hex2.length ? "" : hex2[i].hexBytes);

        differences[i] = [];

        const maxLength = Math.max(line1Bytes.length, line2Bytes.length);

        for (let j = 0; j < maxLength; j++) {
            const byte1 = line1Bytes[j] || '';
            const byte2 = line2Bytes[j] || '';

            if (byte1 !== byte2) {
                differences[i].push(j);
            }
        }
    }

    return differences;
}