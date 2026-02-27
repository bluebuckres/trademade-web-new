import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { full_name, email, brokers, strategy_description } = body;

        if (!full_name || !email) {
            return NextResponse.json(
                { error: "Full name and email are required." },
                { status: 400 }
            );
        }

        const { error } = await supabase.from("beta_waitlist").insert({
            full_name,
            email,
            brokers: brokers || null,
            strategy_description: strategy_description || null,
        });

        if (error) {
            console.error("Supabase insert error (beta_waitlist):", error);
            return NextResponse.json(
                { error: "Failed to save. Please try again." },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: "Application submitted successfully!" },
            { status: 201 }
        );
    } catch {
        return NextResponse.json(
            { error: "Invalid request." },
            { status: 400 }
        );
    }
}
