console.log("Hello world!")
var PortfolioAnalytics = require('portfolio-analytics');
var ui = PortfolioAnalytics.ulcerIndex([100, 110, 105, 102, 95]);
// ui == 0.07204222820421435
console.log(ui);