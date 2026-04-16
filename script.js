const btn = document.getElementById("scanBtn");
btn.disabled = true;
function runScan() {
  const url = document.getElementById("scanInput").value.trim();
  const output = document.getElementById("scanOutput");

  // ✅ URL validation
  function isValidURL(url) {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  if (!isValidURL(url)) {
    output.textContent = "Please enter a valid URL (e.g. https://example.com)";
    return;
  }

  // 🔐 Deterministic seed (same URL = same results)
  function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash);
  }

  const seed = hashCode(url);

  function seededRandom(n) {
    return (Math.sin(seed + n) + 1) / 2;
  }

  function pick(arr, n) {
    return arr[Math.floor(seededRandom(n) * arr.length)];
  }

  function rand(min, max, n) {
    return Math.floor(seededRandom(n) * (max - min + 1)) + min;
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

  output.textContent = "";

  let i = 0;

  const interval = setInterval(() => {
    if (i < 6) {
      output.textContent += pick(steps, i) + "\n";
      i++;
    } else {
      clearInterval(interval);

      const vulnCount = rand(3, 12, 1);
      const risk = pick(risks, 2);

      output.textContent += "\n--- SCAN COMPLETE ---\n";
      output.textContent += "Target: " + url + "\n\n";

      output.textContent += "Findings:\n";

      for (let j = 0; j < vulnCount; j++) {
        output.textContent += "• " + pick(findings, j + 10) + "\n";
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

      output.textContent += "\nNote: This is a simulated preview. Full manual testing is performed during an official engagement.";
    }
  }, 600);
}
btn.disabled = false;
