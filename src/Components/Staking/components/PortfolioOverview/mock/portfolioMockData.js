const portfolioMockData = {
  overview: {
    totalInvested: 559871.852,

    todayProfit: 6.74,

    expectedProfit: 13750,

    activePortfolio: 1,
  },

  activePortfolio: {
    status: "ACTIVE",

    title: "Premium Growth Plan",

    portfolioId: "#01",

    progress: 58,

    daysLeft: 52,

    invested: 55000,

    currentValue: 57493.2538,

    expectedValue: 68750,

    totalEarned: 2493.2538,

    rewardToday: 6.74,

    endDate: "24 Aug 2025",

    startedOn: "24 May 2025",

    duration: "90 Days Plan",
  },

  unlock: {
    price: 349,
  },

  analytics: [
    {
      icon: "wallet",

      title: "Total Invested",

      value: "55,000 VEs",
    },

    {
      icon: "profit",

      title: "Total Earned",

      value: "2,493.25 VEs",

      growth: "+4.78%",
    },

    {
      icon: "clock",

      title: "Avg. APY",

      value: "18.50%",

      growth: "+1.25%",
    },

    {
      icon: "award",

      title: "Best Performing",

      value: "Premium Growth Plan",
    },
  ],
};

export default portfolioMockData;
