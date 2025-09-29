import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";

export default function Layout() {
    return(
        <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden w-full min-h-screen max-h-screen flex flex-col">
          <Header />
          <main className="flex-1 flex flex-col overflow-y-auto scrollbar-hide">
            <Outlet />
          </main>
          <Footer />
        </div>
    )
}