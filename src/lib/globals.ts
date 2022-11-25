
export const _themes: Readonly<{
    light: string;
    dark: string;
}> = Object.freeze({
    light: 'light',
    dark: 'dark'
});

export const _messages: Readonly<{generalError: string}> = Object.freeze({
    generalError: "Sorry, something went wrong. Please check the validity of your data. Sometimes refreshing the page while clearing the cache using 'Ctrl/Cmd + Shift + R' on Chrome can help."
});

export const _analyticsDomainsWhitelist: Array<string> = [''];

export const _localStoragePrefix: string = 'bl-localstorage';