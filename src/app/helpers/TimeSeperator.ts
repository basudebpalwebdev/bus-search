export function timeSeperator(timeString: string): { hour: number, minute: number } {
    const beforeNoon: boolean = timeString.split(' ')[1] === 'am';
    const currentTime: string = timeString.split(' ')[0];
    let currentTimeHours: number = Number.parseInt(currentTime.split(':')[0], 10);
    const currentTimeMinutes: number = Number.parseInt(currentTime.split(':')[1], 10);
    if (beforeNoon && currentTimeHours === 12) {
        currentTimeHours = 0;
    } else if (currentTimeHours !== 12) {
        currentTimeHours += 12;
    }
    return { hour: currentTimeHours, minute: currentTimeMinutes };
}
