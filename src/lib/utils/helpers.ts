export function unixTimeNowInSeconds() {
    return Math.floor(new Date().getTime() / 1000);
}

export function dateTomorrow() {
    return new Date(Date.now() + 3600 * 1000 * 24);
}
