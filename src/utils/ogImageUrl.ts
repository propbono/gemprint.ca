export function ogImageUrl({
  title,
  description,
  cta1,
  cta2,
  img,
}: {
  title: string;
  description?: string;
  cta1?: string;
  cta2?: string;
  img?: string;
}) {
  const params = new URLSearchParams({ title });
  if (description) params.append("description", description);
  if (cta1) params.append("cta1", cta1);
  if (cta2) params.append("cta2", cta2);
  if (img) params.append("img", img);
  return `/api/og?${params.toString()}`;
}
