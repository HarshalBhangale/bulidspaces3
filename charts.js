document.addEventListener("DOMContentLoaded", function () {
    // Overall Engagement Chart
    const engagementCtx = document.getElementById("engagementChart").getContext("2d");
    const engagementChart = new Chart(engagementCtx, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Engagement",
            data: [120, 150, 200, 180, 250, 300, 350, 400, 380, 420, 500, 550],
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 2,
          },
        ],
      },
    });
  
    // Top Posts Chart
    const topPostsCtx = document.getElementById("topPostsChart").getContext("2d");
    const topPostsChart = new Chart(topPostsCtx, {
      type: "bar",
      data: {
        labels: ["Post 1", "Post 2", "Post 3", "Post 4", "Post 5"],
        datasets: [
          {
            label: "Likes",
            data: [100, 180, 140, 200, 160],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
    });
  
      // New Followers Chart
  const newFollowersCtx = document.getElementById("newFollowersChart").getContext("2d");
  const newFollowersChart = new Chart(newFollowersCtx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "New Followers",
          data: [10, 15, 20, 30, 40, 50, 60, 80, 100, 120, 140, 160],
          backgroundColor: "rgba(255, 159, 64, 0.2)",
          borderColor: "rgba(255, 159, 64, 1)",
          borderWidth: 2,
        },
      ],
    },
  });

  // Platform Comparison Chart
  const platformComparisonCtx = document.getElementById("platformComparisonChart").getContext("2d");
  const platformComparisonChart = new Chart(platformComparisonCtx, {
    type: "pie",
    data: {
      labels: ["Twitter", "Facebook", "Instagram", "LinkedIn"],
      datasets: [
        {
          data: [25, 35, 30, 10],
          backgroundColor: [
            "rgba(75, 192, 192, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(54, 162, 235, 0.2)",
          ],
          borderColor: [
            "rgba(75, 192, 192, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(54, 162, 235, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
  });
});

  