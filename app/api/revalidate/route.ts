import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

// Sanity webhook → on-demand ISR revalidation
// Webhook body: { _type: "project" | "product" | "post" | "testimonial" | "siteSettings" }
export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (!process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json(
      { message: "SANITY_REVALIDATE_SECRET not configured" },
      { status: 500 }
    );
  }

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  let body: { _type?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON body" }, { status: 400 });
  }

  const type = body._type;

  switch (type) {
    case "project":
      revalidatePath("/portfolio");
      revalidatePath("/portfolio/[slug]", "page");
      revalidatePath("/"); // homepage portfolio teaser
      break;
    case "product":
      revalidatePath("/furniture");
      revalidatePath("/furniture/[slug]", "page");
      break;
    case "post":
      revalidatePath("/blog");
      revalidatePath("/blog/[slug]", "page");
      break;
    case "testimonial":
      revalidatePath("/");
      break;
    case "siteSettings":
      revalidatePath("/", "layout");
      break;
    default:
      return NextResponse.json(
        { message: `Unknown type: ${type}` },
        { status: 400 }
      );
  }

  return NextResponse.json({ revalidated: true, type, timestamp: Date.now() });
}
