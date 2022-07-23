/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 *
 * List of ISO language codes:
 * @link http://www.lingoes.net/en/translator/langcode.htm
 */
const formatter = (value, local, currency) => {
  let formattedValue = new Intl.NumberFormat(local, {
    style: "currency",
    currency: currency,
  }).format(value);
  return formattedValue;
};

const tipCalculator = (sum, percentage, local, currency) => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;
  console.log(`
      Sum before tip: ${formatter(sum, local, currency)}
      Tip percentage: ${percentage}%
      Tip:            ${formatter(tip, local, currency)}
      Total:          ${formatter(total, local, currency)}
    `);
};

tipCalculator(29.95, 18, "us-US", "USD");
