<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>REY-AI Session</title>
  <link rel="shortcut icon" href="https://i.imgur.com/wZcGmu7.jpeg" type="image/x-icon">
  <style>
    :root {
      --primary: #00eaff;
      --secondary: #222233;
      --accent: #ff00a6;
      --success: #48ff00;
      --danger: #ff3131;
      --button-bg: linear-gradient(90deg, #222233 60%, #00eaff 100%);
      --text-bold: 900;
      --button-radius: 14px;
    }
    body {
      background: linear-gradient(120deg, #070724 0%, #12123a 100%);
      color: #fff;
      font-family: 'Segoe UI', 'Roboto', Arial, sans-serif;
      margin: 0;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      padding-top: 32px;
    }
    .system-bar {
      width: 100vw;
      max-width: 750px;
      padding: 15px;
      box-sizing: border-box;
      background: #181826cc;
      border-radius: 12px;
      margin-bottom: 16px;
      display: flex;
      flex-wrap: wrap;
      gap: 18px;
      justify-content: space-between;
      align-items: center;
      font-size: 1.1em;
      font-weight: 700;
      letter-spacing: 0.03em;
      box-shadow: 0 2px 18px rgba(0,0,0,0.13);
      backdrop-filter: blur(3px);
    }
    .system-bar span {
      margin-right: 14px;
      font-weight: var(--text-bold);
    }
    .autotype {
      font-size: 2em;
      font-weight: var(--text-bold);
      color: var(--primary);
      margin-bottom: 18px;
      min-height: 44px;
      letter-spacing: 0.04em;
      border-bottom: 2px solid var(--accent);
      text-shadow: 0 0 12px #00eaff99;
    }
    .button-container {
      width: 100%;
      max-width: 420px;
      margin: 0 auto;
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      gap: 18px;
      align-items: center;
      text-align: center;
      padding-bottom: 70px;
    }
    h3 {
      font-size: 1.5em;
      font-weight: 900;
      color: var(--accent);
      margin-bottom: 6px;
      letter-spacing: 0.08em;
      opacity: 1;
      animation: fadeIn 1.6s forwards;
    }
    .button {
      width: 180px;
      height: 46px;
      font-size: 1.13em;
      font-weight: var(--text-bold);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 0 18px;
      background: var(--button-bg);
      border-radius: var(--button-radius);
      border: 2px solid var(--accent);
      color: #fff;
      position: relative;
      cursor: pointer;
      transition: filter 0.16s, box-shadow 0.17s;
      text-decoration: none;
      box-shadow: 0 1px 16px #00eaff33;
      z-index: 1;
      overflow: hidden;
    }
    .button:hover {
      filter: brightness(1.2) drop-shadow(0 2px 12px #ff00a6bb);
      box-shadow: 0 4px 24px #ff00a6aa;
    }
    .button span {
      z-index: 2;
      font-weight: var(--text-bold);
    }
    .button::before {
      content: '';
      position: absolute;
      left: -2px;
      top: -2px;
      border-radius: var(--button-radius);
      background: linear-gradient(45deg, #48ff00, #15ff00, #000000,#000000, #ff00a6, #00eaff);
      background-size: 500%;
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      z-index: 0;
      animation: steam 5s linear infinite;
      opacity: 0.5;
    }
    @keyframes steam {
      0% { background-position: 0 0; }
      50% { background-position: 500% 0; }
      100% { background-position: 0 0; }
    }
    @keyframes fadeIn {
      to { opacity: 1; }
    }
    .info-text {
      font-weight: 700;
      font-size: 1.1em;
      margin-top: 10px;
      margin-bottom: 3px;
      color: var(--primary);
    }
    footer {
      position: fixed;
      bottom: 0;
      width: 100vw;
      background: #181826ee;
      color: #c7d6ff;
      padding: 14px 0 8px 0;
      text-align: center;
      font-size: 16px;
      font-weight: 700;
      letter-spacing: 0.04em;
      z-index: 10;
      border-top: 2px solid var(--accent);
      user-select: none;
    }
    .github-stats {
      font-size: 1em;
      color: #ffec00;
      font-weight: var(--text-bold);
      margin-left: 6px;
    }
    .active-dot {
      display: inline-block;
      width: 12px;
      height: 12px;
      background: var(--success);
      border-radius: 50%;
      margin-right: 6px;
      box-shadow: 0 0 8px #48ff00c6;
      vertical-align: middle;
      animation: pulse 1.4s infinite;
    }
    @keyframes pulse {
      0% { box-shadow: 0 0 12px #48ff00c6; }
      70% { box-shadow: 0 0 20px #48ff0077; }
      100% { box-shadow: 0 0 12px #48ff00c6; }
    }
  </style>
</head>
<body>
  <div class="system-bar">
    <span><span class="active-dot"></span>System: <b>Active</b></span>
    <span id="battery"></span>
    <span id="ip"></span>
    <span id="clock"></span>
    <span>Users Request: <b id="userRequestCount">1</b></span>
    <span id="githubStats"></span>
  </div>
  <div class="autotype" id="autotype"></div>
  <div class="button-container">
    <h3>REY-AI SESSION 3</h3>
    <a href="/qr" class="button" target="_blank"><span>QR-CODE</span></a>
    <a href="/pair" class="button" target="_blank"><span>PAIRING-CODE</span></a>
    <a href="https://github.com/ZEZETECH47/Mr_REY-MD/fork" class="button" target="_blank"><span>FORK REY-AI</span></a>
    <a href="https://github.com/ZEZETECH47/Mr_REY-MD" class="button" target="_blank"><span>STAR REY-AI</span></a>
    <a href="https://whatsapp.com/channel/0029Vad7YNyJuyA77CtIPX0x" class="button" target="_blank"><span>WhatsApp</span></a>
    <div class="info-text">WANT TO TALK TO DEVELOPER? CLICK BUTTON</div>
    <a href="https://wa.me/255747397675" class="button" target="_blank"><span>CONTACT DEVELOPER</span></a>
  </div>
  <footer>
    REY47-AI&copy; <span id="currentYear"></span>
  </footer>
  <script>
    // Live auto-typing words
    const autotypeTexts = [
      "Welcome to MR_REY47-MD",
      "The Smart Pairing Experience",
      "Secure, Fast, Reliable",
      "Try QR or Pairing Code!",
      "Visit and Star MR*REY47-MD on GitHub"
    ];
    let autotypeIndex = 0, charIndex = 0;
    function typeAuto() {
      const el = document.getElementById('autotype');
      let text = autotypeTexts[autotypeIndex];
      if (charIndex < text.length) {
        el.textContent = text.slice(0, charIndex + 1);
        charIndex++;
        setTimeout(typeAuto, 50 + Math.random()*50);
      } else {
        setTimeout(() => {
          charIndex = 0;
          autotypeIndex = (autotypeIndex+1) % autotypeTexts.length;
          el.textContent = "";
          setTimeout(typeAuto, 800);
        }, 1700);
      }
    }
    window.onload = function() {
      document.getElementById('currentYear').textContent = new Date().getFullYear();
      typeAuto();
      showTime();
      getBattery();
      getIP();
      getGithubStats();
    };

    // Show time
    function showTime() {
      const el = document.getElementById('clock');
      function update() {
        const now = new Date();
        el.textContent = "Time: " + now.toLocaleTimeString();
      }
      update();
      setInterval(update, 1000);
    }

    // Battery percentage
    function getBattery() {
      const el = document.getElementById('battery');
      if (navigator.getBattery) {
        navigator.getBattery().then(function(battery) {
          function updateBatteryInfo() {
            el.textContent = "Battery: " + Math.round(battery.level * 100) + "%";
          }
          updateBatteryInfo();
          battery.addEventListener('levelchange', updateBatteryInfo);
        });
      } else {
        el.textContent = "Battery: N/A";
      }
    }

    // Get IP address (using public API)
    function getIP() {
      const el = document.getElementById('ip');
      fetch('https://api.ipify.org?format=json')
        .then(res => res.json())
        .then(data => {
          el.textContent = "IP: " + data.ip;
        })
        .catch(() => {
          el.textContent = "IP: N/A";
        });
    }

    // Display GitHub forks and stars for MR_REY47-MD
    function getGithubStats() {
      const el = document.getElementById('githubStats');
      fetch('https://api.github.com/repos/ZEZETECH47/Mr_REY-MD')
        .then(res => res.json())
        .then(repo => {
          el.innerHTML = `GitHub <b>Mr_REY47-MD</b> <span class="github-stats">★ ${repo.stargazers_count} | Forks: ${repo.forks_count}</span>`;
        })
        .catch(() => {
          el.innerHTML = `GitHub <b>Mr_REY47-MD</b> <span class="github-stats">★ N/A | Forks: N/A</span>`;
        });
    }

    // Placeholder for users request (for demo, can be updated by your app logic)
    document.getElementById('userRequestCount').textContent = "1";
  </script>
</body>
</html>
