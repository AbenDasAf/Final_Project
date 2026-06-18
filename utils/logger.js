export const logger = {
    info: (message) => {
        const timestamp = new Date().toISOString();
        console.log(`[INFO] [${timestamp}]: ${message}`);
    }
};
