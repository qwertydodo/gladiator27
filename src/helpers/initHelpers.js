export const initApp = async () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 5000);
    });
};