export const roundDecimal = (num: number) =>
  (Math.round(num * 100) / 100).toFixed(2);

export function formatRupiah(amount: any) {
  return 'Rp ' + amount?.toLocaleString('id-ID');
}