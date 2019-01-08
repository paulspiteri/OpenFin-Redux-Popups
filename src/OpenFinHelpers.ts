export const getOpenFinWindowOptions = () => new Promise<fin.WindowOption | undefined>((resolve, reject) => {
    if (typeof fin === 'undefined') {
        resolve(undefined);
        return;
    }
    const openFinWindow = fin.desktop.Window.getCurrent();
    openFinWindow.getOptions(options => resolve(options), reason => reject(reason))
});
