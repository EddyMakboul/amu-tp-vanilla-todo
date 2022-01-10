export const tick = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve());
    });
}