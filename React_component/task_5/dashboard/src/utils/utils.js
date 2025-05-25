// Return the current year
export function getFullYear() {
    return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
    if (isIndex) {
        return 'Chidiebere Ekwedike - Holberton School';
    }
    else {
        return 'Chidiebere Ekwedike - Holberton School main dashboard';
    }
}

export function getLatestNotification() {
    return {__html: '<strong>Urgent requirement</strong> - complete by EOD'};
}