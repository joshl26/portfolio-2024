import ResponsiveHeader from "./ui/ResponsiveHeader";
import ResponsiveMenu from "./ui/ResponsiveMenu";

let menuClicked = "";
let hamburgerMenuClicked = "";

export default function Home() {
  return (
    <main className="">
      <ResponsiveHeader
        menuClicked={menuClicked}
        hamburgerMenuClicked={hamburgerMenuClicked}
      />
      <ResponsiveMenu
        menuClicked={menuClicked}
        hamburgerMenuClicked={hamburgerMenuClicked}
      />
    </main>
  );
}
