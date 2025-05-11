/* eslint-disable @next/next/no-img-element */

import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export const contentType = "image/jpeg";

const ubuntuRegular = fetch(
  "https://github.com/google/fonts/raw/main/ufl/ubuntu/Ubuntu-Regular.ttf"
).then((res) => res.arrayBuffer());
const ubuntuBold = fetch(
  "https://github.com/google/fonts/raw/main/ufl/ubuntu/Ubuntu-Bold.ttf"
).then((res) => res.arrayBuffer());

export async function GET(req: NextRequest) {
  try {
    const title =
      req.nextUrl.searchParams.get("title") ||
      "Premium Print Solutions for Your Business";
    const description =
      req.nextUrl.searchParams.get("description") ||
      "From business cards to banners, we deliver high-quality print products with fast turnaround times and exceptional customer service.";

    const logoUrl = `${req.nextUrl.origin}/images/gemprint-logo.svg`;
    const imgUrl = req.nextUrl.searchParams.get("img");
    const bgUrl = `${req.nextUrl.origin}/images/business-cards/business_cards_laminated_02.jpg`;

    const cta1Text = req.nextUrl.searchParams.get("cta1");
    const cta2Text = req.nextUrl.searchParams.get("cta2");

    let displayImgUrl = bgUrl;
    if (
      imgUrl &&
      (imgUrl.endsWith(".png") ||
        imgUrl.endsWith(".jpg") ||
        imgUrl.endsWith(".jpeg"))
    ) {
      displayImgUrl = imgUrl;
    }

    return new ImageResponse(
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          padding: 0,
          overflow: "hidden",
          fontFamily: "Ubuntu, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
            background:
              "linear-gradient(to right, rgb(230, 244, 255), rgb(16, 185, 213))",
            display: "flex",
          }}
        />
        <img
          src={displayImgUrl}
          width={700}
          height={400}
          alt="background"
          style={{
            position: "absolute",
            width: "50%",
            height: "90vh",
            objectFit: "cover",
            objectPosition: "left",
            right: 0,
            top: "16.666667%",
            borderTopLeftRadius: "1.5rem",
            borderBottomLeftRadius: "1.5rem",
            opacity: 1,
            pointerEvents: "none",
            zIndex: 2,
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 3,
            padding: 40,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <img
            src={logoUrl}
            width={120}
            height={120}
            alt="Gemprint Logo"
            style={{
              width: 240,
              height: 40,
              marginBottom: 32,
            }}
          />
          <div
            style={{
              marginTop: 0,
              marginLeft: 0,
              padding: "1.75rem",
              width: 420,
              maxHeight: 450,
              boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.15)",
              borderRadius: "1.5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
              backgroundColor: "white",
              backdropFilter: "blur(4px)",
              overflowWrap: "break-word",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "215px",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "rgb(34, 211, 238)",
                  padding: "0.75rem",
                  borderRadius: "0.5rem",
                  fontWeight: "400",
                  fontFamily: "Ubuntu, sans-serif",
                }}
              >
                Premium Print Solutions
              </div>
              <h2
                style={{
                  marginTop: "1rem",
                  fontSize: "1.5rem",
                  lineHeight: "2rem",
                  color: "black",
                  textAlign: "start",
                  fontWeight: 700,
                  fontFamily: "Ubuntu, sans-serif",
                  display: "flex",
                  flexWrap: "wrap",
                  wordBreak: "break-word",
                  whiteSpace: "normal",
                  overflow: "hidden",
                  width: "100%",
                }}
              >
                {title}
              </h2>
              <p
                style={{
                  fontSize: "1.125rem",
                  color: "black",
                  textAlign: "start",
                  fontWeight: "normal",
                  fontFamily: "Ubuntu, sans-serif",
                  lineHeight: "1.75rem",
                  display: "-webkit-box",
                  WebkitLineClamp: 5,
                  WebkitBoxOrient: "vertical",
                  wordBreak: "break-word",
                  whiteSpace: "normal",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "100%",
                }}
              >
                {description}
              </p>
              {(cta1Text || cta2Text) && (
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  {cta1Text && (
                    <div
                      style={{
                        padding: "0.5rem 1.25rem",
                        background: "rgb(34, 211, 238)",
                        color: "rgb(0, 47, 70)",
                        borderRadius: "0.5rem",
                        fontSize: "1.05rem",
                        boxShadow: "0 2px 8px 0 rgba(34, 211, 238, 0.18)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        maxWidth: 220,
                        width: "auto",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        fontWeight: "400",
                        fontFamily: "Ubuntu, sans-serif",
                      }}
                    >
                      {cta1Text}
                    </div>
                  )}
                  {cta2Text && (
                    <div
                      style={{
                        padding: "0.5rem 1.25rem",
                        background: "white",
                        color: "rgb(0, 47, 70)",
                        borderRadius: "0.5rem",
                        fontSize: "1.05rem",
                        border: "1px solid rgb(34, 211, 238)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        maxWidth: 220,
                        width: "auto",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        fontWeight: "400",
                        fontFamily: "Ubuntu, sans-serif",
                      }}
                    >
                      {cta2Text}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>,
      {
        fonts: [
          {
            name: "Ubuntu",
            data: await ubuntuRegular,
            style: "normal",
            weight: 400,
          },
          {
            name: "Ubuntu",
            data: await ubuntuBold,
            style: "normal",
            weight: 700,
          },
        ],
      }
    );
  } catch (e) {
    return new Response("Failed to generate OG Image", { status: 500 });
  }
}
