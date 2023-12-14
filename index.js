const parseRtpPacket = (packet) => {
    if (!Buffer.isBuffer(packet) || packet.length < 12) {
        throw new Error('Invalid RTP packet: Not a buffer or insufficient length');
    }

    const version = (packet[0] & 0xC0) >>> 6;
    if (version !== 2) {
        throw new Error('Unsupported RTP version');
    }

    const padding = (packet[0] & 0x20) >>> 5;
    const extension = (packet[0] & 0x10) >>> 4;
    const csrcCount = packet[0] & 0x0F;

    if (csrcCount > 0 && packet.length < 12 + csrcCount * 4) {
        throw new Error('Invalid RTP packet: Insufficient CSRC identifiers');
    }

    const marker = (packet[1] & 0x80) >>> 7;
    const payloadType = packet[1] & 0x7F;
    const sequenceNumber = packet.readUInt16BE(2);
    const timestamp = packet.readUInt32BE(4);
    const ssrc = packet.readUInt32BE(8);

    const headerLength = 12 + (csrcCount * 4);

    if (packet.length < headerLength) {
        throw new Error('Invalid RTP packet length: Insufficient length for the specified CSRC count');
    }

    const payload = packet.slice(headerLength);

    return {
        version,
        padding,
        extension,
        csrcCount,
        marker,
        payloadType,
        sequenceNumber,
        timestamp,
        ssrc,
        payload,
    };
};

module.exports = parseRtpPacket;