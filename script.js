
function runScan() {
  const url = document.getElementById("scanInput").value;
  const output = document.getElementById("scanOutput");

  if (!url) {
    output.textContent = "Please enter a valid URL...";
    return;
  }

  const steps = [
    "Initializing PentraSec kernel...",
    "Establishing secure connection...",
    "Fingerprinting target environment...",
    "Mapping application routes...",
    "Testing authentication flow...",
    "Probing input validation layers...",
    "Scanning API endpoints...",
    "Analyzing session management...",
    "Running privilege escalation checks...",
    "Inspecting database response patterns..."
  ];

  const findings = [
    "Possible XSS vector detected",
    "Weak session token behavior observed",
    "Suspicious API response pattern",
    "Potential SQL injection entry point",
    "Missing security headers detected",
    "Insecure authentication flow identified",
    "Rate limiting bypass possibility found",
    "Exposed internal endpoint detected"
  ];

  const risks = ["LOW", "MEDIUM", "HIGH", "CRITICAL"];

  function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  output.textContent = "";

  let i = 0;

  const interval = setInterval(() => {
    if (i < 6) {
      output.textContent += steps[Math.floor(Math.random() * steps.length)] + "\n";
      i++;
    } else {
      clearInterval(interval);

      const vulnCount = randomInt(3, 15);
      const risk = randomItem(risks);

      output.textContent += "\n--- SCAN COMPLETE ---\n";
      output.textContent += "Target: " + url + "\n\n";

      output.textContent += "Findings:\n";
      for (let j = 0; j < vulnCount; j++) {
        output.textContent += "• " + randomItem(findings) + "\n";
      }

      output.textContent += "\nVulnerabilities Detected: " + vulnCount + "\n";
      output.textContent += "Risk Level: " + risk + "\n";

      if (risk === "CRITICAL") {
        output.textContent += "Recommendation: Immediate action required ⚠\n";
      } else if (risk === "HIGH") {
        output.textContent += "Recommendation: Urgent review recommended\n";
      } else {
        output.textContent += "Recommendation: Monitor and improve security posture\n";
      }
    }
  }, 700);
}
</script>

<script>
document.getElementById('form').addEventListener('submit', function(e 

  alert("Request received. Ensure you have authorization before any testing.");
  this.reset();
});
</script>
<script>
let v = 0;
let a = 0;

setInterval(() => {
  v += Math.floor(Math.random() * 3);
  a += Math.floor(Math.random() * 1);

  document.getElementById("vulnCount").textContent = v;
  document.getElementById("appsTested").textContent = a;
}, 2000);

