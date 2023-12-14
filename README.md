# Simple RTP Parser

**A lightweight RTP (Real-time Transport Protocol) packet parsing tool for Node.js.**

## Installation

    npm install simple-rtp-parser

## Usage

    const parseRtpPacket = require('simple-rtp-parser');
    try {
    const parsedPacket = parseRtpPacket(YourRtpPacketFromAnyWhere);
    console.log('Parsed RTP Packet:', parsedPacket);
    } catch (error) {
    console.error('Error parsing RTP packet:', error.message);
    }

## Returned Data Format

**The parseRtpPacket function returns an object with the following properties:**

**version**: RTP protocol version
**padding**: Padding flag
**extension**: Extension flag
**csrcCount**: Count of contributing source identifiers (CSRCs)
**marker**: Marker bit
**payloadType**: Payload type
**sequenceNumber**: Sequence number
**timestamp**: Timestamp
**ssrc**: Synchronization source identifier (SSRC)
**payload**: RTP payload data

## Testing

    npm test

## Issues

If you encounter any issues or have suggestions, please open an issue.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
