import ResponsiveFooter from "./ui/ResponsiveFooter";
import ResponsiveHeader from "./ui/ResponsiveHeader";
import ResponsiveMenu from "./ui/ResponsiveMenu";

export default function Home() {
  return (
    <main>
      <ResponsiveHeader />
      <ResponsiveMenu />
      <ResponsiveFooter />
    </main>
  );
}
