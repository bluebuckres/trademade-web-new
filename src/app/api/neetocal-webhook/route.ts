import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
    try {
        const payload = await req.json();

        // Extract key fields from the NeetoCal webhook payload
        const booking = payload?.data || payload;
        const booking_id = booking?.sid || booking?.id || null;
        const name = booking?.name || booking?.invitee_name || null;
        const email = booking?.email || booking?.invitee_email || null;
        const starts_at = booking?.slot_date
            ? booking.slot_date + "T" + (booking.slot_start_time || "00:00")
            : booking?.starts_at || null;
        const ends_at = booking?.slot_date
            ? booking.slot_date + "T" + (booking.slot_end_time || "00:00")
            : booking?.ends_at || null;
        const status = booking?.status || payload?.event || "created";

        const { error } = await supabase.from("cal_bookings").insert({
            booking_id,
            name,
            email,
            starts_at,
            ends_at,
            status,
            raw_payload: payload,
        });

        if (error) {
            console.error("Supabase insert error (cal_bookings):", error);
            return NextResponse.json(
                { error: "Failed to store booking." },
                { status: 500 }
            );
        }

        return NextResponse.json({ message: "Booking stored." }, { status: 200 });
    } catch {
        return NextResponse.json(
            { error: "Invalid webhook payload." },
            { status: 400 }
        );
    }
}
