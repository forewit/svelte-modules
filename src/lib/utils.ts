// export a simple uuid function
// https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
export function uuidv4(): string {
    const crypto = window.crypto || (window as any).msCrypto;

    if (crypto && crypto.getRandomValues) {
        const buffer = new Uint8Array(16);
        crypto.getRandomValues(buffer);

        buffer[6] = (buffer[6] & 0x0f) | 0x40; // Set the version to 4 (1000)
        buffer[8] = (buffer[8] & 0x3f) | 0x80; // Set the variant to IETF (10)

        return Array.from(buffer)
            .map((byte, index) => {
                if (index === 4 || index === 6 || index === 8 || index === 10) {
                    return '-' + byte.toString(16).padStart(2, '0');
                }
                return byte.toString(16).padStart(2, '0');
            })
            .join('');
    } else {
        throw new Error('Secure random number generation is not supported in this environment');
    }
}
