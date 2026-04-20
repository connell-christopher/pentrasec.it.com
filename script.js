const btn = document.getElementById("scanBtn");
btn.disabled = false;

// ⌨️ Typewriter effect
function typeLine(element, text, speed = 15) {
  return new Promise(resolve => {
    let i = 0;

    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        element.textContent += "\n";
        element.scrollTop = element.scrollHeight; // auto-scroll
        resolve();
      }
    }

    type();
  });
}

async function runScan() {
  const urlInput = document.getElementById("scanInput").value.trim();
  const output = document.getElementById("scanOutput");

  // ✅ URL validation
  function isValidURL(str) {
    try {
      const u = new URL(str);
      return u.protocol === "http:" || u.protocol === "https:";
    } catch {
      return false;
    }
  }

  output.textContent = "";

  if (!isValidURL(urlInput)) {
    await typeLine(output, "Enter a valid URL (http/https required)", 20);
    return;
  }

  const url = new URL(urlInput);

  // ❌ block unrealistic targets
  if (url.hostname.includes("localhost") || url.hostname.split(".").length < 2) {
    await typeLine(output, "Target does not appear to be a valid public domain.", 20);
    return;
  }

  const steps = [
    "Initializing PentraSec kernel...",
    "Resolving DNS...",
    "Establishing TLS handshake...",
    "Fingerprinting target environment...",
    "Mapping application routes...",
    "Enumerating endpoints...",
    "Testing authentication flow...",
    "Scanning API endpoints...",
    "Analyzing session management...",
    "Running privilege escalation checks..."
  ];

  const endpoints = [
    "/login",
    "/api/v1/auth",
    "/dashboard",
    "/admin",
    "/api/v1/users",
    "/reset-password",
    "/internal/config"
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

  // 🔀 shuffle
  function shuffle(arr) {
    return [...arr].sort(() => Math.random() - 0.5);
  }

  function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let discoveredFindings = [];

  // 🧠 step-by-step scan
  for (let i = 0; i < steps.length; i++) {
    await typeLine(output, steps[i], 12);

    // 🔍 endpoint discovery
    if (i === 4) {
      const epList = shuffle(endpoints).slice(0, rand(2, 5));
      for (const ep of epList) {
        await typeLine(output, "  ↳ Discovered endpoint: " + ep, 10);
      }
    }

    // ⚠ progressive findings
    if (i >= 6 && Math.random() > 0.5) {
      const f = shuffle(findings)[0];

      if (!discoveredFindings.includes(f)) {
        discoveredFindings.push(f);
        await typeLine(output, "  ⚠ Finding: " + f, 10);
      }
    }
  }

  // 🧠 risk calculation
  const riskWeights = { LOW: 0, MEDIUM: 0, HIGH: 0, CRITICAL: 0 };

  discoveredFindings.forEach(f => {
    if (f.includes("SQL") || f.includes("XSS")) riskWeights.CRITICAL++;
    else if (f.includes("authentication")) riskWeights.HIGH++;
    else if (f.includes("headers")) riskWeights.MEDIUM++;
    else riskWeights.LOW++;
  });

  const risk = Object.keys(riskWeights).reduce((a, b) =>
    riskWeights[a] > riskWeights[b] ? a : b
  );

  // 🧾 final output
  await typeLine(output, "\n--- SCAN COMPLETE ---", 15);
  await typeLine(output, "Target: " + url.href, 15);

  await typeLine(output, "\nFinal Findings:", 15);

  if (discoveredFindings.length === 0) {
    await typeLine(output, "• No significant issues detected", 12);
  } else {
    for (const f of discoveredFindings) {
      await typeLine(output, "• " + f, 10);
    }
  }

  await typeLine(output, "\nVulnerabilities Detected: " + discoveredFindings.length, 15);
  await typeLine(output, "Risk Level: " + risk, 15);

  if (risk === "CRITICAL") {
    await typeLine(output, "Recommendation: Immediate action required ⚠", 15);
  } else if (risk === "HIGH") {
    await typeLine(output, "Recommendation: Urgent review recommended", 15);
  } else {
    await typeLine(output, "Recommendation: Monitor and improve security posture", 15);
  }

  await typeLine(
    output,
    "\nNote: This is a simulated preview. Full manual testing is performed during an official engagement.",
    10
  );
}
