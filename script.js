let free_plan_price = document.getElementById("price-free")
let free_plan_duration = document.getElementById("duration-free")
let premium_plan_price = document.getElementById("price-premium")
let premium_plan_duration = document.getElementById("duration-premium")
let filter_price_monthly = document.getElementById("monthly-btn")
let filter_price_yearly = document.getElementById("yearly-btn")

filter_price_monthly.addEventListener("click",()=>{
    free_plan_price.innerHTML = "0";
    free_plan_duration.innerHTML = "/month";

    premium_plan_price.innerHTML = "499";
    premium_plan_duration.innerHTML = "/month";

    filter_price_monthly.classList.add("active")
    filter_price_yearly.classList.remove("active")
})

filter_price_yearly.addEventListener("click",()=>{
    free_plan_price.innerHTML = "0";
    free_plan_duration.innerHTML = "/year";

    premium_plan_price.innerHTML = "3999";
    premium_plan_duration.innerHTML = "/year";

    filter_price_monthly.classList.remove("active")
    filter_price_yearly.classList.add("active")
})