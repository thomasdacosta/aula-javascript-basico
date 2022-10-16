const INSURANCE_COST = 2.99;

let shippingCost = 9.99;
let isOrderValid = true;

let userAge = 22;
let points = 400;
let cartValue = 199;
let hasPromoCode = false;
let hasParentsApproval = false;
let addInsurance = true;

/** calculate shipping cost*/
if ((userAge > 65) || (userAge >= 21 && (hasPromoCode || cartValue > 300 || points > 500))) {
    shippingCost = 0;
} else if (userAge < 21 && hasParentsApproval) {
    shippingCost = shippingCost - 5;
} else if (userAge < 21) {
    isOrderValid = false;
}

/** take account of insurance */
if (isOrderValid && addInsurance && !hasPromoCode) {
    shippingCost += INSURANCE_COST;
}

/** show message */
if (isOrderValid) {
    console.log(shippingCost);
} else {
    console.log("Cannot order if under 21");
}