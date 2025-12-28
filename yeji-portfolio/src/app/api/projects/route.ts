import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";
import { DATABASE_ID, TOKEN } from "@/config/page";

const notion = new Client({ auth: TOKEN });

export async function GET() {
    try {
        if (!DATABASE_ID || !TOKEN) {
            return NextResponse.json(
                { error: "Notion credentials not configured" },
                { status: 500 }
            );
        }

        const response = await notion.databases.query({
            database_id: DATABASE_ID,
            sorts: [
                {
                    property: "작성일",
                    direction: "descending",
                },
            ],
        });

        return NextResponse.json(response.results);
    } catch (error) {
        console.error("Notion API Error:", error);
        return NextResponse.json(
            { error: "Failed to fetch projects" },
            { status: 500 }
        );
    }
}
