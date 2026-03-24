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

    const htmlContent = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>The framework behind Lock-In System</title>
</head>
<body style="margin:0;padding:0;background-color:#ffffff;width:100%;-webkit-font-smoothing:antialiased;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff;">
    <tr>
      <td align="center" style="padding:24px 16px;">
        <table role="presentation" width="580" cellpadding="0" cellspacing="0" border="0" style="max-width:580px;width:100%;background-color:#1E1F23;border-radius:12px;border:1px solid #5A98FF;">
          <tr>
            <td style="padding:48px 24px;font-family:Georgia,'Times New Roman',serif;line-height:1.7;">

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center" style="padding-bottom:48px;font-family:Arial,Helvetica,sans-serif;font-size:14px;letter-spacing:3px;color:#5A98FF;">
                    LOCK-IN SYSTEM
                  </td>
                </tr>
              </table>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="font-family:Georgia,'Times New Roman',serif;font-size:28px;font-weight:400;line-height:1.3;color:#F5F0EB;padding-bottom:32px;">
                    The framework behind the 21-day system.
                  </td>
                </tr>
              </table>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr><td style="font-family:Georgia,'Times New Roman',serif;font-size:16px;color:#D4CFC8;padding-bottom:20px;">You signed up because something is not working.</td></tr>
                <tr><td style="font-family:Georgia,'Times New Roman',serif;font-size:16px;color:#D4CFC8;padding-bottom:20px;">Not your ambition. Not your effort. The system. Or more accurately, the fact that you do not have one.</td></tr>
                <tr><td style="font-family:Georgia,'Times New Roman',serif;font-size:16px;color:#D4CFC8;padding-bottom:20px;">Here is the framework that Lock-In System is built on. Three principles. No fluff.</td></tr>
              </table>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr><td align="center" style="padding:40px 0;font-size:12px;letter-spacing:5px;color:#5A98FF;">&#9670;</td></tr>
              </table>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr><td style="font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:3px;text-transform:uppercase;color:#5A98FF;padding-bottom:8px;">Principle 1</td></tr>
                <tr><td style="font-family:Georgia,'Times New Roman',serif;font-size:22px;font-weight:400;color:#F5F0EB;padding-bottom:16px;">Direction before discipline.</td></tr>
                <tr><td style="font-family:Georgia,'Times New Roman',serif;font-size:16px;color:#D4CFC8;padding-bottom:20px;">Most people start with habits. Wake up at 5am. Meditate. Journal. Cold shower.</td></tr>
                <tr><td style="font-family:Georgia,'Times New Roman',serif;font-size:16px;color:#D4CFC8;padding-bottom:20px;">None of it matters if you do not know what you are building toward.</td></tr>
                <tr><td style="font-family:Georgia,'Times New Roman',serif;font-size:16px;color:#D4CFC8;padding-bottom:20px;">Direction is the first thing we build. Not goals, not vision boards. A single operating direction that gives every daily action coherence. When you know where you are pointed, discipline becomes obvious. Without it, discipline is just suffering with no purpose.</td></tr>
              </table>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr><td align="center" style="padding:40px 0;font-size:12px;letter-spacing:5px;color:#5A98FF;">&#9670;</td></tr>
              </table>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr><td style="font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:3px;text-transform:uppercase;color:#5A98FF;padding-bottom:8px;">Principle 2</td></tr>
                <tr><td style="font-family:Georgia,'Times New Roman',serif;font-size:22px;font-weight:400;color:#F5F0EB;padding-bottom:16px;">Systems over motivation.</td></tr>
                <tr><td style="font-family:Georgia,'Times New Roman',serif;font-size:16px;color:#D4CFC8;padding-bottom:20px;">Motivation is a spike. It comes, it fades, and you are back where you started.</td></tr>
                <tr><td style="font-family:Georgia,'Times New Roman',serif;font-size:16px;color:#D4CFC8;padding-bottom:20px;">A system is structure. It runs whether you feel like it or not. The difference between someone who executes consistently and someone who starts over every Monday is not willpower. It is that one of them built a system and the other keeps relying on energy they cannot control.</td></tr>
                <tr><td style="font-family:Georgia,'Times New Roman',serif;font-size:16px;color:#D4CFC8;padding-bottom:20px;">Lock-In System builds that in 21 days. One lesson per day. Direction, structure, habits, priorities, tracking, reviews. Each one builds on the last. By the end, the system runs. You maintain it.</td></tr>
              </table>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr><td align="center" style="padding:40px 0;font-size:12px;letter-spacing:5px;color:#5A98FF;">&#9670;</td></tr>
              </table>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr><td style="font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:3px;text-transform:uppercase;color:#5A98FF;padding-bottom:8px;">Principle 3</td></tr>
                <tr><td style="font-family:Georgia,'Times New Roman',serif;font-size:22px;font-weight:400;color:#F5F0EB;padding-bottom:16px;">Identity drives execution.</td></tr>
                <tr><td style="font-family:Georgia,'Times New Roman',serif;font-size:16px;color:#D4CFC8;padding-bottom:20px;">You can build every habit in the book. But if you still see yourself as someone who quits, the habits collapse the first time life gets hard.</td></tr>
                <tr><td style="font-family:Georgia,'Times New Roman',serif;font-size:16px;color:#D4CFC8;padding-bottom:20px;">The final phase connects your system to your identity. You stop being someone who is trying to be disciplined and become someone who is disciplined. Not through affirmations. Through evidence. Every day the system runs, the evidence builds. And at some point, the identity is not aspirational anymore. It is just accurate.</td></tr>
              </table>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr><td align="center" style="padding:40px 0;font-size:12px;letter-spacing:5px;color:#5A98FF;">&#9670;</td></tr>
              </table>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr><td style="font-family:Georgia,'Times New Roman',serif;font-size:16px;color:#D4CFC8;padding-bottom:32px;">That is the framework. Direction. Systems. Identity. Three phases, 21 days, one system.</td></tr>
              </table>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background-color:#161718;border:1px solid #2A2A2A;border-radius:8px;padding:24px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr><td style="font-family:Georgia,'Times New Roman',serif;font-size:15px;font-weight:bold;color:#5A98FF;padding-bottom:12px;">The daily rhythm after 21 days:</td></tr>
                      <tr><td style="font-family:Georgia,'Times New Roman',serif;font-size:15px;color:#D4CFC8;padding-bottom:8px;">60 seconds in the morning. See what today requires.</td></tr>
                      <tr><td style="font-family:Georgia,'Times New Roman',serif;font-size:15px;color:#D4CFC8;padding-bottom:8px;">Execute throughout the day. Check things off.</td></tr>
                      <tr><td style="font-family:Georgia,'Times New Roman',serif;font-size:15px;color:#D4CFC8;padding-bottom:8px;">60 seconds in the evening. Plan tomorrow.</td></tr>
                      <tr><td style="font-family:Georgia,'Times New Roman',serif;font-size:15px;color:#D4CFC8;padding-bottom:8px;">10 minutes on Sunday. Weekly review.</td></tr>
                      <tr><td style="font-family:Georgia,'Times New Roman',serif;font-size:15px;color:#D4CFC8;">Under two minutes a day to run your entire system.</td></tr>
                    </table>
                  </td>
                </tr>
              </table>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding-top:48px;border-top:1px solid #2A2A2A;" align="center">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                      <tr><td style="font-family:Georgia,'Times New Roman',serif;font-size:15px;color:#A0998F;text-align:center;padding-bottom:16px;">The first 20 members get locked in at $9/month for life.<br/>After that, it is $19.</td></tr>
                      <tr>
                        <td align="center" style="padding-bottom:24px;">
                          <a href="https://lock-in-system-landing.netlify.app/#pricing" style="display:inline-block;padding:14px 32px;background-color:#161718;border:1px solid rgba(90,152,255,0.4);border-radius:8px;color:#5A98FF;text-decoration:none;font-family:Arial,Helvetica,sans-serif;font-size:14px;letter-spacing:1px;">Lock In Now</a>
                        </td>
                      </tr>
                      <tr><td style="font-family:Georgia,'Times New Roman',serif;font-size:13px;color:#A0998F;text-align:center;">You already know the cycle you are stuck in.<br/>This is the system that breaks it.</td></tr>
                    </table>
                  </td>
                </tr>
              </table>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center" style="padding-top:48px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#6B6560;">
                    Lock-In System<br/>
                    You received this because you signed up at <a href="https://lock-in-system-landing.netlify.app" style="color:#6B6560;">lock-in-system-landing.netlify.app</a><br/>
                  </td>
                </tr>
              </table>

            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
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
        subject: "The framework behind Lock-In System",
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
