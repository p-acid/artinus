export const getDiscountedPrice = (
  price: number | undefined,
  discountPercentage: number | undefined,
): number => {
  if (price === undefined || discountPercentage === undefined) {
    return 0;
  }

  if (price < 0 || discountPercentage < 0) {
    throw new Error("가격과 할인율은 음수일 수 없습니다.");
  }

  const discountAmount = price * (discountPercentage / 100);
  const finalPrice = price - discountAmount;

  return Number(finalPrice.toFixed(2));
};
