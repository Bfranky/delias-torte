import { NextRequest, NextResponse } from "next/server";

export interface EnquiryPayload {
  firstName: string;
  lastName?: string;
  phone: string;
  email?: string;
  orderType: string;
  eventDate?: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: EnquiryPayload = await req.json();
    const { firstName, phone, message, orderType } = body;

    // Basic validation
    if (!firstName?.trim() || !phone?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Missing required fields: firstName, phone, message" },
        { status: 400 }
      );
    }

    // ── CONSOLE LOG (visible in server/Vercel logs) ──────────────────────────
    console.log("\n╔══════════════════════════════════════════");
    console.log("║  NEW ORDER ENQUIRY — DELIA'S TORTE");
    console.log("╠══════════════════════════════════════════");
    console.log(`║  Name:       ${firstName} ${body.lastName ?? ""}`.trim());
    console.log(`║  Phone:      ${phone}`);
    console.log(`║  Email:      ${body.email ?? "—"}`);
    console.log(`║  Order Type: ${orderType}`);
    console.log(`║  Event Date: ${body.eventDate ?? "—"}`);
    console.log(`║  Message:    ${message}`);
    console.log(`║  Timestamp:  ${new Date().toISOString()}`);
    console.log("╚══════════════════════════════════════════\n");

    // ── EMAIL (Nodemailer — uncomment & configure in production) ─────────────
    //
    // import nodemailer from "nodemailer";
    //
    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: process.env.EMAIL_FROM,
    //     pass: process.env.EMAIL_PASS,   // use Gmail App Password
    //   },
    // });
    //
    // await transporter.sendMail({
    //   from: `"Delia's Torte Website" <${process.env.EMAIL_FROM}>`,
    //   to: process.env.NOTIFY_EMAIL,
    //   subject: `🎂 New ${orderType} Order — ${firstName} ${body.lastName ?? ""}`,
    //   html: `
    //     <h2>New Order Enquiry</h2>
    //     <table>
    //       <tr><td><b>Name</b></td><td>${firstName} ${body.lastName ?? ""}</td></tr>
    //       <tr><td><b>Phone</b></td><td>${phone}</td></tr>
    //       <tr><td><b>Email</b></td><td>${body.email ?? "—"}</td></tr>
    //       <tr><td><b>Order Type</b></td><td>${orderType}</td></tr>
    //       <tr><td><b>Event Date</b></td><td>${body.eventDate ?? "—"}</td></tr>
    //       <tr><td><b>Message</b></td><td>${message}</td></tr>
    //     </table>
    //   `,
    // });
    // ─────────────────────────────────────────────────────────────────────────

    return NextResponse.json(
      { success: true, message: "Enquiry received successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("[/api/enquiry] Error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
