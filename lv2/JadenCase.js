function a(s) {
  const words = s.split(" ");
  const answer = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
  console.log(answer);
  return answer;
}

a("HHHundai samsung apple starBucks");
