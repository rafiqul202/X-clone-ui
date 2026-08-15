"use server";

export async function getFileDetails(fileId: string) {
  const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
  const credentials = Buffer.from(`${privateKey}:`).toString("base64");

  const response = await fetch(
    `https://api.imagekit.io/v1/files/${fileId}/details`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Basic ${credentials}`,
      },
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch file details from ImageKit");
  }

  return await response.json();
}
