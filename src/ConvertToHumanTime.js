export default function covertToHumanTime(milliseconds) {
  const s = Math.round((milliseconds / 1000) % 60, 10);
  const m = parseInt((milliseconds / 1000) / 60, 10);
  return `${m}:${s >= 10 ? s : `0${s}`}`;
}
