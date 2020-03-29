export const timeConverter = (date: number): string => {
    if (!date) {
        return '';
    }

    const created = new Date(date * 1000);

    const months = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'];

    return `${created.getDate()} ${months[created.getMonth()]} ${created.getFullYear()}`;
};
