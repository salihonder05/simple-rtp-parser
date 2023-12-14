const fs = require('fs');
const parseRtpPacket = require('../index');
const file = './test/example.bin';

try {
    fs.readFile(file, (err, data) => {
        if (err) {
            console.error(`File reading error: ${err.message}`);
            return;
        }
        const parsedPacket = parseRtpPacket(data);
        console.log('Parsed RTP Packet:', parsedPacket);
    });

} catch (error) {
    console.error('Error parsing RTP packet:', error.message);
}
