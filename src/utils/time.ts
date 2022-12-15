// HH:MM:SS
export function formateToHHMMSS(seconds: number) {
    const h = Math.floor(seconds / 60 / 60) < 10 ? `0${Math.floor(seconds / 60 / 60)}` : Math.floor(seconds / 60 / 60);
    const m = Math.floor(seconds / 60 % 60) < 10 ? `0${Math.floor(seconds / 60 % 60) }` : Math.floor(seconds / 60 % 60);
    const s = Math.floor(seconds % 60) < 10 ? `0${Math.floor(seconds % 60)}`: Math.floor(seconds % 60);

    let res = '';
    if(h !== '00') res += `${h}:`;
    if(m !== '00') res += `${m}:`;
    res += `${s}`;
    return res;
}