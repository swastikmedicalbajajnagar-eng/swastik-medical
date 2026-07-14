import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(request: NextRequest) {
  const search = request.nextUrl.searchParams.get("q");

  if (!search) {
    return NextResponse.json([]);
  }

  const { data, error } = await supabase
    .from("products")
    .select("id, product_name, price, mrp, image, slug")
    .ilike("product_name", `%${search}%`)
    .eq("is_active", true)
    .limit(10);

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json(data);
}