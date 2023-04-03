import Button from "../components/Button";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <header className="h-full bg-black">
      <NavBar />
      <p className="text-red">Hello Wilder</p>
      <Button>Test</Button>
    </header>
  );
}
