import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function POST(req: NextRequest) {

  const body = await req.json();
  const { input, success } = body;

  // get IP
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0] ||
    "unknown";

  // device/browser
  const userAgent = req.headers.get("user-agent") || "unknown";

  // get location from IP
  let city = "";
  let region = "";
  let country = "";

  try {
    const geo = await fetch(`http://ip-api.com/json/${ip}`);
    const data = await geo.json();

    city = data.city;
    region = data.regionName;
    country = data.country;
  } catch {}

  await pool.query(
    `INSERT INTO password_attempts 
    (input, success, ip, city, region, country, user_agent) 
    VALUES ($1,$2,$3,$4,$5,$6,$7)`,
    [input, success, ip, city, region, country, userAgent]
  );

  return NextResponse.json({ ok: true });
}