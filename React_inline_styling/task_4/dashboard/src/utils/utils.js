// Return the current year
export function getFullYear() {
    return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
    if (isIndex) {
        return 'Chidiebere Ekwedike';
    }
    else {
        return 'Chidiebere Ekwedike - Dashboard';
    }
}

export function getLatestNotification() {
    return {__html: '<strong>Urgent requirement</strong> - complete by EOD'};
}