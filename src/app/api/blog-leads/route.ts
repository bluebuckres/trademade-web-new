import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { phone, source_page } = body;

        // Validate 10-digit Indian phone number
        const cleaned = (phone || "").replace(/\D/g, "");
        if (cleaned.length !== 10) {
            return NextResponse.json(
                { error: "Please enter a valid 10-digit phone number." },
                { status: 400 }
            );
        }

        const { error } = await supabase.from("blog_leads").insert({
            phone: "+91" + cleaned,
            source_page: source_page || null,
        });

        if (error) {
            console.error("Supabase insert error (blog_leads):", error);
            return NextResponse.json(
                { error: "Failed to save. Please try again." },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: "Lead captured successfully!" },
            { status: 201 }
        );
    } catch {
        return NextResponse.json(
            { error: "Invalid request." },
            { status: 400 }
        );
    }
}
