import { Footer } from "@/components/footer/footer";
import { FOOTER_LINKS } from "@/utils/constants";

export default function Home() {
  return (
    <>
      <main className="flex flex-grow  flex-col items-center justify-between bg-pink-100 p-24">
        Main Content
      </main>
      <Footer links={FOOTER_LINKS} />
    </>
  );
}
