import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { v4 as uuid } from "uuid";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const name = formData.get("name") as string;
    const mobile = formData.get("mobile") as string;
    const file = formData.get("file") as File;

    if (!name || !mobile || !file) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields",
        },
        {
          status: 400,
        }
      );
    }

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "application/pdf",
    ];

    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid file type",
        },
        {
          status: 400,
        }
      );
    }    const maxSize = 5 * 1024 * 1024;

    if (file.size > maxSize) {
      return NextResponse.json(
        {
          success: false,
          message: "Maximum file size is 5MB",
        },
        {
          status: 400,
        }
      );
    }

    const extension = file.name.split(".").pop();

    const fileName = `${mobile}_${uuid()}.${extension}`;

    const arrayBuffer = await file.arrayBuffer();

    const buffer = Buffer.from(arrayBuffer);

    const { error: uploadError } =
      await supabaseAdmin.storage
        .from("prescriptions")
        .upload(fileName, buffer, {
          contentType: file.type,
          upsert: false,
        });

    if (uploadError) {
      return NextResponse.json(
        {
          success: false,
          message: uploadError.message,
        },
        {
          status: 500,
        }
      );
    }    const {
        data: { publicUrl },
      } = supabaseAdmin.storage
        .from("prescriptions")
        .getPublicUrl(fileName);
  
      const { error: dbError } =
        await supabaseAdmin
          .from("prescriptions")
          .insert({
            customer_name: name,
            mobile: mobile,
            prescription_url: publicUrl,
            status: "Pending",
          });
  
      if (dbError) {
        return NextResponse.json(
          {
            success: false,
            message: dbError.message,
          },
          {
            status: 500,
          }
        );
      }
  
      return NextResponse.json({
        success: true,
        message: "Prescription uploaded successfully",
        url: publicUrl,
      });  } catch (error) {
        console.error(error);
    
        return NextResponse.json(
          {
            success: false,
            message: "Something went wrong",
          },
          {
            status: 500,
          }
        );
      }
    }