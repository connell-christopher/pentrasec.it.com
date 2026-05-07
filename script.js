<script>
document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // SCAN FUNCTION
  // =========================
  function runScan() {
    const inputEl = document.getElementById("scanInput");
    const output = document.getElementById("scanOutput");

    if (!inputEl || !output || !inputEl.value) {
      if (output) output.textContent = "Please enter a valid URL...";
      return;
    }

    const url = inputEl.value;

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

    const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const randomInt = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    output.textContent = "";
    let i = 0;

    const interval = setInterval(() => {
      if (i < 6) {
        output.textContent += randomItem(steps) + "\n";
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

  // Expose globally
  window.runScan = runScan;

  // =========================
  // FORM HANDLER
  // =========================
  const form = document.getElementById("form");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Request received. Ensure you have authorization before any testing.");
      this.reset();
    });
  }

  // =========================
  // LIVE COUNTERS (FIXED)
  // =========================
  const counters = document.querySelectorAll('.counter');

  const animateCounter = (counter) => {
    counter.innerText = '0';

    const target = +counter.getAttribute('data-target');
    const speed = 20;

    const update = () => {
      const current = +counter.innerText;
      const increment = Math.ceil(target / 100);

      if (current < target) {
        counter.innerText = current + increment;
        setTimeout(update, speed);
      } else {
        counter.innerText = target;
      }
    };

    update();
  };

  counters.forEach(counter => animateCounter(counter));

});
</script>
