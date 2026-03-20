// This function triggers automatically when a Netlify Form receives a submission
// Netlify looks for a function named "submission-created" and fires it on every form submit

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM_EMAIL = process.env.FROM_EMAIL || "onboarding@resend.dev";

exports.handler = async function (event) {
  try {
    const payload = JSON.parse(event.body).payload;
    const email = payload.data.email;

    if (!email) {
      console.log("No email found in submission");
      return { statusCode: 200, body: "No email" };
    }

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not set");
      return { statusCode: 500, body: "Missing API key" };
    }

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #0F0F0F;
      color: #F5F0EB;
      font-family: Georgia, 'Times New Roman', serif;
      line-height: 1.7;
      -webkit-font-smoothing: antialiased;
    }
    .container {
      max-width: 580px;
      margin: 0 auto;
      padding: 48px 24px;
    }
    .logo {
      text-align: center;
      font-size: 14px;
      letter-spacing: 0.12em;
      color: #C9A96E;
      margin-bottom: 48px;
    }
    h1 {
      font-size: 28px;
      font-weight: 400;
      line-height: 1.3;
      margin-bottom: 32px;
      color: #F5F0EB;
    }
    p {
      font-size: 16px;
      margin-bottom: 20px;
      color: #D4CFC8;
    }
    .principle-label {
      font-size: 12px;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #C9A96E;
      margin-top: 40px;
      margin-bottom: 8px;
    }
    .principle-title {
      font-size: 22px;
      font-weight: 400;
      color: #F5F0EB;
      margin-bottom: 16px;
    }
    .divider {
      text-align: center;
      color: #C9A96E;
      margin: 40px 0;
      font-size: 12px;
      letter-spacing: 0.3em;
    }
    .rhythm-box {
      background: #1A1A1A;
      border: 1px solid #2A2A2A;
      border-radius: 8px;
      padding: 24px;
      margin: 32px 0;
    }
    .rhythm-box p {
      margin-bottom: 8px;
      font-size: 15px;
    }
    .rhythm-box strong {
      color: #C9A96E;
    }
    .cta-section {
      text-align: center;
      margin-top: 48px;
      padding-top: 40px;
      border-top: 1px solid #2A2A2A;
    }
    .cta-section p {
      font-size: 15px;
      color: #A0998F;
    }
    .cta-button {
      display: inline-block;
      padding: 14px 32px;
      background: rgba(201, 169, 110, 0.15);
      border: 1px solid rgba(201, 169, 110, 0.3);
      border-radius: 8px;
      color: #C9A96E;
      text-decoration: none;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      font-size: 14px;
      letter-spacing: 0.04em;
      margin-top: 16px;
    }
    .footer {
      text-align: center;
      margin-top: 48px;
      font-size: 12px;
      color: #6B6560;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo">STRUCTURED ACHIEVEMENT</div>

    <h1>The framework behind the 21-day installation.</h1>

    <p>You signed up because something isn't working.</p>
    <p>Not your ambition. Not your intelligence. Not your effort. The system. Or more accurately, the absence of one.</p>
    <p>Here's the framework that Structured Achievement is built on. Three principles. No fluff.</p>

    <div class="divider">&#9670;</div>

    <div class="principle-label">Principle 1</div>
    <div class="principle-title">Direction before discipline.</div>
    <p>Most people start with habits. Wake up at 5am. Meditate. Journal. Cold shower.</p>
    <p>None of it matters if you don't know what you're building toward.</p>
    <p>Direction is the first component we install. Not goals, not vision boards. A single operating direction that gives every daily action coherence. When you know where you're pointed, discipline becomes obvious. Without it, discipline is just suffering with no purpose.</p>

    <div class="divider">&#9670;</div>

    <div class="principle-label">Principle 2</div>
    <div class="principle-title">Systems over motivation.</div>
    <p>Motivation is a spike. It comes, it fades, and you're back where you started.</p>
    <p>A system is infrastructure. It runs whether you feel like it or not. The difference between someone who executes consistently and someone who starts over every Monday isn't willpower. It's that one of them built a system and the other keeps relying on energy they can't control.</p>
    <p>Structured Achievement installs that system in 21 days. One component per day. Direction, structure, habits, priorities, tracking, reviews. Each one builds on the last. By the end, the system runs. You maintain it.</p>

    <div class="divider">&#9670;</div>

    <div class="principle-label">Principle 3</div>
    <div class="principle-title">Identity drives execution.</div>
    <p>You can build every habit in the book. But if you still see yourself as someone who quits, the habits collapse the first time life gets hard.</p>
    <p>The final phase of the installation connects your system to your identity. You stop being someone who is trying to be disciplined and become someone who is disciplined. Not through affirmations. Through evidence. Every day the system runs, the evidence builds. And at some point, the identity isn't aspirational anymore. It's just accurate.</p>

    <div class="divider">&#9670;</div>

    <p>That's the framework. Direction. Systems. Identity. Three phases, 21 days, one installation.</p>

    <div class="rhythm-box">
      <p><strong>The daily rhythm after installation:</strong></p>
      <p>60 seconds in the morning. See what today requires.</p>
      <p>Execute throughout the day. Check things off.</p>
      <p>60 seconds in the evening. Plan tomorrow.</p>
      <p>10 minutes on Sunday. Weekly review.</p>
      <p>Under two minutes a day to run your entire system.</p>
    </div>

    <div class="cta-section">
      <p>The first 50 members get locked in at $9/month for life.<br>After that, it's $19.</p>
      <a href="https://structured-achievement.netlify.app/#pricing" class="cta-button">See the full system</a>
      <p style="margin-top: 24px; font-size: 13px;">You already know the pattern you're stuck in.<br>This is the infrastructure that breaks it.</p>
    </div>

    <div class="footer">
      <p>Structured Achievement<br>
      You received this because you signed up at structured-achievement.netlify.app<br>
      <a href="mailto:isaac@structuredachievement.com" style="color: #6B6560;">Unsubscribe</a></p>
    </div>
  </div>
</body>
</html>`;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: email,
        subject: "The framework behind the 21-day installation",
        html: htmlContent,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Resend error:", result);
      return { statusCode: response.status, body: JSON.stringify(result) };
    }

    console.log(`Email sent to ${email}:`, result.id);
    return { statusCode: 200, body: "Email sent" };
  } catch (error) {
    console.error("Function error:", error);
    return { statusCode: 500, body: error.toString() };
  }
};
