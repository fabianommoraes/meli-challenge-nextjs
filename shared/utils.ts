export const formatCurrencyToArg = (value: number) => {
  return new Intl.NumberFormat("es-AR").format(value);
};
