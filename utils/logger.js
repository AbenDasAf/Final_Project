export function logger(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] LOGGER LOG: ${message}`);
}
    